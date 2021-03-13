const cartPage = require('../pages/cart.page')
const allure = require('@wdio/allure-reporter')


class CartPageSteps {

    createOrder() {
        // allure.startStep('Creating order')
        cartPage.clickCreateOrderButton()
    }

    verifyOrderPage(url, title) {
        // allure.startStep('Verifying order page content')
        assert.equal(true, cartPage.getOrderTitle().includes(title))
        assert.equal(browser.getUrl(), url)
    }

    removeProduct() {
        // allure.startStep('Remove product from cart')
        browser.url("https://cart.onliner.by/")
        cartPage.clickRemoveProductButton()
    }
}

module.exports = new CartPageSteps()