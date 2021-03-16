const {beforeMethod} = require("aspect.js")
const log = require('@wdio/logger').default
const logger = log('test-basic')

class LoggingAspect {
    @beforeMethod({
        classNamePattern: /.*/,
        methodNamePattern: /.*/
    })
    logStepToConsole(meta) {
        logger.info()
    }
}