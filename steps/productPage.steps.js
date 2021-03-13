const productPage = require('../pages/product.page')
const allure = require('@wdio/allure-reporter')

class ProductPageSteps {

    moveToProductTraders() {
        // allure.startStep('Move to product traders')
        productPage.clickProductTraders()
    }

    addProductToCart(index) {
        // allure.startStep('Add specified product to cart')
        browser.waitUntil(() => {
            return productPage.buyProductButtons.length > 0
        })
        productPage.clickBuyProductButton(index)
    }

    openCartPage() {
        // allure.startStep('Opening cart page')
        productPage.clickCartButton()
    }

    acceptLocation() {
        // allure.startStep('Accepting location popup')
        productPage.moveToLocationButton()
        productPage.clickLocationButton()
    }

}

module.exports = new ProductPageSteps()