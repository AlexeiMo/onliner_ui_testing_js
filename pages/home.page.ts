export class HomePage {

    get loginButton() {
        return $('.auth-bar__item.auth-bar__item--text');
    }

    get cartButton() {
        return $('#cart-desktop');
    }

    get categoryButtons() {
        return $$('.b-main-navigation__text');
    }

    get loginInput() {
        return $('#auth-container input[type="text"]');
    }

    get passwordInput() {
        return $('#auth-container input[type="password"]');
    }

    get submitLoginButton() {
        return $('#auth-container button');
    }

    get profileImage() {
        return $('.b-top-profile__image.js-header-user-avatar');
    }

    get iFrame() {
        return $('.modal-iframe');
    }

    get searchInput() {
        return $('.search__input');
    }

    get searchResults() {
        return $$('.product__title>a');
    }

    public clickLoginButton() {
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }

    public clickCartButton() {
        this.cartButton.waitForDisplayed();
        this.cartButton.click();
    }

    public clickCategoryButton(text: string) {
        this.categoryButtons.forEach((el) => {
            el.waitForDisplayed();
            if (el.getText() === text) {
                el.click();
            }
        })
    }

    public setLogin(text: string) {
        this.loginInput.waitForDisplayed();
        this.loginInput.setValue(text);
    }

    public setPassword(text: string) {
        this.passwordInput.waitForDisplayed();
        this.passwordInput.setValue(text);
    }

    public clickSubmitLoginButton() {
        this.submitLoginButton.waitForDisplayed();
        this.submitLoginButton.click();
    }

    public switchToSearchFrame() {
        browser.switchToFrame(this.iFrame);
    }

    public setSearchOption(text: string) {
        this.searchInput.waitForDisplayed();
        this.searchInput.setValue(text);
    }
}
