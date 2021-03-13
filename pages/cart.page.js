class CartPage {

    get createOrderButton() {
        return $('.cart-form__offers-part.cart-form__offers-part_confirm a')
    }

    get orderTitle() {
        return $('.cart-form__title.cart-form__title_big-alter.cart-form__title_extended-alter')
    }

    get removeProductButton() {
        return $('.cart-form__offers-part.cart-form__offers-part_remove div')
    }

    clickCreateOrderButton() {
        this.createOrderButton.waitForDisplayed()
        this.createOrderButton.click()
    }

    getOrderTitle() {
        this.orderTitle.waitForDisplayed()
        return this.orderTitle.getText()
    }

    clickRemoveProductButton() {
        this.removeProductButton.waitForExist()
        this.removeProductButton.moveTo()
        this.removeProductButton.click()
    }
}

module.exports = new CartPage()