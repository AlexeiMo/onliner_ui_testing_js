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
        homePage.profileImage.waitForDisplayed()
        assert.equal(true, homePage.profileImage.isDisplayed())
    }
    searchItem(item) {
        homePage.switchToSearchFrame()
        homePage.setSearchOption(item)
    }
    verifySearchResults(item) {
        browser.waitUntil(() => {return homePage.searchResults.length > 0})
        homePage.searchResults.forEach((res) => {
            let expression = res.getText().includes(item)
            assert.equal(true, expression)
        })
    }
}

module.exports = new HomePageSteps()
