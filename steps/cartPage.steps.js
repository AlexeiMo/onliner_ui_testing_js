const cartPage = require('../pages/cart.page')
const allure = require('@wdio/allure-reporter').default
const log = require('@wdio/logger').default
const logger = log('test-basic')


class CartPageSteps {

    createOrder() {
        logger.info('Creating order')
        allure.startStep('Creating order')
        cartPage.clickCreateOrderButton()
        allure.endStep()
    }

    verifyOrderPage(url, title) {
        logger.info('Verifying order page content')
        allure.startStep('Verifying order page content')
        assert.equal(true, cartPage.getOrderTitle().includes(title))
        assert.equal(browser.getUrl(), url)
        allure.endStep()
    }

    removeProduct() {
        logger.info('Remove product from cart')
        allure.startStep('Remove product from cart')
        browser.url("https://cart.onliner.by/")
        cartPage.clickRemoveProductButton()
        allure.endStep()
    }
}

module.exports = new CartPageSteps()