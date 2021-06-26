const { format } = require('node:path')
const nodemailer = require('nodemailer')

    const standupData = [
    {
            developer: 'Zach',
        tasks: [
            {taskName: 'fix bug', status: 'active'},
            {taskName: 'new feature', status: 'completed'},
        ]
    },
    {
        developer: 'Woody',
    tasks: [
        {taskName: 'fix bug', status: 'active'},
        {taskName: 'new feature', status: 'completed'},
        ]
    },
]

const nameOfDevelopers = standupData.map((elem) => elem.developer)
console.log(nameOfDevelopers)

const firstTask = standupData.map((elem) => elem.tasks[0].taskName)
console.log(firstTask)

const firstTaskStatus = standupData.map((elem) => elem.tasks[0].status)
console.log(firstTaskStatus)

const allTaskStatuses = standupData.map((elem) => elem.tasks.map(task => task.status))
console.log(allTaskStatuses)


//data => data of another format
//an array of objects => one email string