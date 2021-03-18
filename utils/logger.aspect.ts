import {beforeMethod, afterMethod, Metadata} from "aspect.js";
import allure from "@wdio/allure-reporter";
import log from '@wdio/logger'

const logger = log('test')

export default class LoggerAspect {
    @beforeMethod({
        methodNamePattern: /^/
    })
    invokeBeforeMethod(meta: Metadata) {
        let res = meta.method.name.toString()
            .replace(/([A-Z])/g, ' $1')
            .toLowerCase()
        meta.method.args.forEach((arg) => {
            res += ` "${arg}"`
        })
        logger.info(res)
        allure.startStep(res)
    }

    @afterMethod({
        methodNamePattern: /^/
    })
    invokeAfterMethod(meta: Metadata) {
        allure.endStep()
    }
}
