const homePage = require('../pages/home.page')


class HomePageSteps {
    openLoginForm() {
        homePage.clickLoginButton()
    }
    enterCredentials(login, password) {
        homePage.setLogin(login)
        homePage.setPassword(password)
    }
    submitCredentials() {
        homePage.clickSubmitLoginButton()
    }
    verifyLogin() {
        assert.equal(true, homePage.profileImage.isDisplayed())
    }
}

module.exports = new HomePageSteps()
