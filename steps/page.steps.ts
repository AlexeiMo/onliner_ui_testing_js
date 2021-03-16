import allure from '@wdio/allure-reporter'
import log from '@wdio/logger'
const logger = log('test')

export default class PageSteps {
    protected log(msg) {
        logger.info(msg)
        allure.addStep(msg)
    }
}