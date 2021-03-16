export class CartPage {

    get createOrderButton() {
        return $('.cart-form__offers-part.cart-form__offers-part_confirm a');
    }

    get orderTitle() {
        return $('.cart-form__title.cart-form__title_big-alter.cart-form__title_extended-alter');
    }

    public clickCreateOrderButton() {
        this.createOrderButton.waitForDisplayed();
        this.createOrderButton.click();
    }

    public getOrderTitle() {
        this.orderTitle.waitForDisplayed();
        return this.orderTitle.getText();
    }
}