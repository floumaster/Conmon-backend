const SpendingRepository = require('../repositories/spendingRepository')
const spendingRep = new SpendingRepository();
const UserRepository = require('../repositories/userRepository')
const userRep = new UserRepository();
var admin = require("firebase-admin");
var serviceAccount = require("../firebaseFile.json");
const moment = require('moment')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const getAllScheduledSpendings = async () => {
    const spendings = await spendingRep.getAllSpendings()
    const scheduledAndNotCompletedSpendings = spendings
    .filter(spending => spending.isScheduled && !spending.isCompleted)
    scheduledAndNotCompletedSpendings.forEach(spending => {
        if(checkNotificationForSendTime(spending.notificationDateStart || spending.creationDate, spending.frequency))
            getUserFCMByNotification(spending.user_id).then(data => generateMessageAndSend(data, {
                notification: {
                title: "Complete your spending",
                body: `Its time to complete ${spending.name}`
                }
            }))
    });
}

const checkNotificationForSendTime = (notificationDateStart, frequency) => {
    const difference = moment.duration(moment(moment().format('YYYY-MM-DD')).diff(moment(notificationDateStart))).asDays
    switch(frequency){
        case 'Every day':
            return true
        case 'Every week':
            return difference % 7 === 0
        case 'Every two weeks':
            return difference % 14 === 0
        case 'Every month':
            return difference % 31 === 0
        case 'Every 3 months':
            return difference % 93 === 0
        case 'Every year':
            return difference % 364 === 0
        default:
            return true
        
    }
}

const getUserFCMByNotification = async (userId) => {
    const allUsers = await userRep.getAllUsers()
    return allUsers.find(user => user.id === userId).fcmToken
}

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

const generateMessageAndSend = async (token, message_notification) => {
    const result = await admin.messaging().sendToDevice(token, message_notification, notification_options)
    console.log(result)
}

const notificationManager = () => {
    let duration = null
    let requiredTime = moment(moment().format('YYYY-MM-DD') + ' ' + '10:00')
    if(requiredTime.format('YYYY-MM-DD hh:mm') === moment().format('YYYY-MM-DD hh:mm')){
        getAllScheduledSpendings()
    }
    if(requiredTime > moment()){
        duration = moment.duration(requiredTime.diff(moment())).asMilliseconds()
    }
    else{
        requiredTime = moment(moment().add(1, 'days').format('YYYY-MM-DD') + ' ' + '10:00')
        duration = moment.duration(requiredTime.diff(moment())).asMilliseconds()
    }
    setInterval(() => {
        getAllScheduledSpendings()
    }, [duration])
}

module.exports = notificationManager