const cartPage = require('../pages/cart.page')
const allure = require('@wdio/allure-reporter').default
const log = require('@wdio/logger').default
const logger = log('test-basic')


class CartPageSteps {

    get createOrderMsg() { return 'Creating order' }
    get verifyOrderPagaMsg() { return 'Verifying order page content' }
    get removeProdMsg() { return 'Remove product from cart' }

    createOrder() {
        logger.info(this.createOrderMsg)
        allure.startStep(this.createOrderMsg)
        cartPage.clickCreateOrderButton()
        allure.endStep()
    }

    verifyOrderPage(url, title) {
        logger.info(this.verifyOrderPagaMsg)
        allure.startStep(this.verifyOrderPagaMsg)
        assert.equal(true, cartPage.getOrderTitle().includes(title))
        assert.equal(browser.getUrl(), url)
        allure.endStep()
    }

    removeProduct() {
        logger.info(this.removeProdMsg)
        allure.startStep(this.removeProdMsg)
        browser.url("https://cart.onliner.by/")
        cartPage.clickRemoveProductButton()
        allure.endStep()
    }
}

module.exports = new CartPageSteps()