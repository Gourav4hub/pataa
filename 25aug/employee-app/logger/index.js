const {createLogger,format,transports} = require('winston')
const {combine,timestamp,json,errors} = format

var logger = createLogger({
    format: combine(
        errors({stack:true}),
        timestamp(),
        json()
    ),
    defaultMeta: { service: 'user-service' },
    transports : [
        new transports.File({filename:'errors.log',level:"error"}),
        new transports.File({filename:'info.log',level:"info"})
    ]
})

module.exports = logger


// var logger = winston.createLogger({
//     format: winston.format.simple(),
//     transports : [
//         new winston.transports.Console()
//     ]
// })