export class ProductPage {

    get productTraders() {
        return $('.button.button_orange.button_big.offers-description__button');
    }

    get buyProductButtons() {
        return $$('.offers-list__control.offers-list__control_default>a');
    }

    get cartButton() {
        return $('#cart-desktop');
    }

    get locationButton() {
        return $('.button-style.button-style_another.button-style_base.offers-form__button');
    }

    get locationInfo() {
        return $('.offers-list__description.offers-list__description_alter.offers-list__description_base');
    }

    get removeProductButton() {
        return $('.cart-form__offers-part.cart-form__offers-part_remove a');
    }

    public clickProductTraders() {
        this.productTraders.waitForDisplayed();
        this.productTraders.click();
    }

    public clickBuyProductButton(index: number) {
        this.buyProductButtons[index].waitForDisplayed();
        this.buyProductButtons[index].click();
    }

    public clickCartButton() {
        this.cartButton.waitForDisplayed();
        this.cartButton.click();
    }

    public moveToLocationButton() {
        this.locationInfo.waitForDisplayed();
        this.locationInfo.scrollIntoView();
    }

    public clickLocationButton() {
        this.locationButton.waitForDisplayed();
        this.locationButton.click();
    }

    public clickRemoveProductButton() {
        this.removeProductButton.waitForExist();
        this.removeProductButton.moveTo();
        this.removeProductButton.click();
    }
}
