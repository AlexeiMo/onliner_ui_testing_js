class HomePage {
    get loginButton() { return $('.auth-bar__item.auth-bar__item--text') }
    get cartButton() { return $('#cart-desktop a') }
    get categoryButtons() { return $$('.b-main-navigation__text') }
    get loginInput() { return $('#auth-container input[type="text"]')}
    get passwordInput() { return $('#auth-container input[type="password"]')}
    get submitLoginButton() { return $('#auth-container button')}

    clickLoginButton() {
        homePage.loginButton.waitForDisplayed()
        homePage.loginButton.click()
    }

    clickCartButton() { // not work in console
        homePage.cartButton.waitForDisplayed()
        homePage.cartButton.click()
    }

    clickCategoryButton(text) {
        homePage.categoryButtons.forEach((el) => {
            if(el.getText() === text) {
                el.click()
            }
        })
    }

    setLogin(text) {    // not work in console
        homePage.loginInput.waitForDisplayed()
        homePage.loginInput.setValue(text)
    }

    setPassword(text) { // not work in console
        homePage.passwordInput.waitForDisplayed()
        homePage.passwordInput.setValue(text)
    }

    clickSubmitLoginButton() {
        homePage.submitLoginButton.waitForDisplayed()
        homePage.submitLoginButton.click()
    }

}
export const homePage = new HomePage()
// module.exports = new HomePage()