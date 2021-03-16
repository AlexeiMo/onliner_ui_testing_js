import {beforeMethod, afterMethod, Metadata} from "aspect.js";
import allure from "@wdio/allure-reporter";
import log from '@wdio/logger'
const logger = log('test')

export default class LoggerAspect {
    @beforeMethod({
        methodNamePattern: /^/
    })
    invokeBeforeMethod(meta: Metadata) {
        logger.info(meta.method.name.toString())
        allure.startStep(meta.method.name.toString())
    }
    @afterMethod({
        methodNamePattern: /^/
    })
    invokeAfterMethod(meta: Metadata) {
        allure.endStep()
    }
}
