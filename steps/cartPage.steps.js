const cartPage = require('../pages/cart.page')


class CartPageSteps {

    createOrder() {
        cartPage.clickCreateOrderButton()
    }

    verifyOrderPage(url, title) {
        assert.equal(true, cartPage.getOrderTitle().includes(title))
        assert.equal(browser.getUrl(), url)
    }

    removeProduct() {
        browser.url("https://cart.onliner.by/")
        cartPage.clickRemoveProductButton()
    }
}

module.exports = new CartPageSteps()