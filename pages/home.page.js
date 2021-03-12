class HomePage {
    get loginButton() { return $('#userbar>div>div>div>div:nth-child(1)') }
    get cartButton() { return $('#cart-desktop a') }
    get catalogButton() { return $('.b-main-navigation>:nth-child(1)>:nth-child(2)>span') }
    get loginInput() { return $('#auth-container input[type="text"]')}
    get passwordInput() { return $('#auth-container input[type="password"]')}
    get submitLoginButton() { return $('#auth-container button')}

    clickLoginButton() {
        this.loginButton.waitForDisplayed()
        this.loginButton.click()
    }

    clickCartButton() { // not work in console
        this.cartButton.waitForDisplayed()
        this.cartButton.click()
    }

    clickCatalogButton() {
        this.catalogButton.waitForDisplayed()
        this.catalogButton.click()
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

}