const productPage = require('../pages/product.page')


class ProductPageSteps {

    moveToProductTraders() {
        productPage.clickProductTraders()
    }

    addProductToCart(index) {
        browser.waitUntil(() => {
            return productPage.buyProductButtons.length > 0
        })
        productPage.clickBuyProductButton(index)
    }

    openCartPage() {
        productPage.clickCartButton()
    }

    acceptLocation() {
        productPage.moveToLocationButton()
        productPage.clickLocationButton()
    }

}

module.exports = new ProductPageSteps()