class ProductPage {

    get productTraders() {
        return $('.button.button_orange.button_big.offers-description__button')
    }

    get buyProductButtons() {
        return $$('.offers-list__control.offers-list__control_default>a')
    }

    get cartButton() {
        return $('#cart-desktop')
    }

    get locationButton() {
        return $('.button-style.button-style_another.button-style_base.offers-form__button')
    }

    get locationInfo() {
        return $('.offers-list__description.offers-list__description_alter.offers-list__description_base')
    }

    clickProductTraders() {
        this.productTraders.waitForDisplayed()
        this.productTraders.click()
    }

    clickBuyProductButton(index) {
        this.buyProductButtons[index].waitForDisplayed()
        this.buyProductButtons[index].click()
    }

    clickCartButton() {
        this.cartButton.waitForDisplayed()
        this.cartButton.click()
    }

    moveToLocationButton() {
        this.locationInfo.waitForDisplayed()
        this.locationInfo.scrollIntoView()
    }

    clickLocationButton() {
        this.locationButton.waitForDisplayed()
        this.locationButton.click()
    }
}

module.exports = new ProductPage()
