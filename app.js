const express = require('express')
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/categories')
const spendingsRouter = require('./routes/spendings')
const templatesRouter = require('./routes/templates')
const notificationManager = require('./utils/notificationsService')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/auth', userRouter);
app.use('/categories', categoryRouter);
app.use('/spendings', spendingsRouter);
app.use('/templates', templatesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

notificationManager()
