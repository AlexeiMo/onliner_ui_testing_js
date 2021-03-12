class HomePage {
    get loginButton() { return $('.auth-bar__item.auth-bar__item--text') }
    get cartButton() { return $('#cart-desktop a') }
    get categoryButtons() { return $$('.b-main-navigation__text') }
    get loginInput() { return $('#auth-container input[type="text"]') }
    get passwordInput() { return $('#auth-container input[type="password"]') }
    get submitLoginButton() { return $('#auth-container button') }
    get profileImage() { return $('.b-top-profile__image.js-header-user-avatar') }
    get iFrame() { return $('.modal-iframe') }
    get searchInput() { return $('.search__input') }
    get searchResults() { return $$('.product__title>a') }

    clickLoginButton() {
        this.loginButton.waitForDisplayed()
        this.loginButton.click()
    }

    clickCartButton() { // not work in console
        this.cartButton.waitForDisplayed()
        this.cartButton.click()
    }

    clickCategoryButton(text) {
        this.categoryButtons.forEach((el) => {
            el.waitForDisplayed()
            if(el.getText() === text) {
                el.click()
            }
        })
    }

    setLogin(text) {    // not work in console
        this.loginInput.waitForDisplayed()
        this.loginInput.setValue(text)
    }

    setPassword(text) { // not work in console
        this.passwordInput.waitForDisplayed()
        this.passwordInput.setValue(text)
    }

    clickSubmitLoginButton() {
        this.submitLoginButton.waitForDisplayed()
        this.submitLoginButton.click()
    }

    switchToSearchFrame() {
        browser.switchToFrame(this.iFrame)
    }

    setSearchOption(text) {
        this.searchInput.setValue(text)
    }

}
module.exports = new HomePage()