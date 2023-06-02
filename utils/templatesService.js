const TemplatesRepository = require('../repositories/templatesRepository')
const templatesRepo = new TemplatesRepository();
const moment = require('moment')

const unapplyTemplates = async () => {
    if(moment().date() === 1)
        await templatesRepo.unapplyAllTemplates()
    else{
        const nextMonth = moment().add(1, 'months').startOf('month');
        const daysLeft = nextMonth.diff(moment(), 'days');
        setTimeout(() => {
            unapplyTemplates()
        }, daysLeft * 24 * 60 * 60 * 1000)
    }

}

unapplyTemplates()