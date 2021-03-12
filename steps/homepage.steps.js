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
        browser.waitUntil(() => { return homePage.searchResults.length > 0 } )
        homePage.searchResults.forEach((res) => {
            let expression = res.getText().toUpperCase().includes(item.toUpperCase())
            assert.equal(true, expression)
        })
    }
    navigateToCategory(category) {
        browser.waitUntil(() => { return homePage.categoryButtons.length > 0 } )
        homePage.clickCategoryButton(category)
    }
    verifyNavigation(url) {
        console.log(browser.getUrl())
        assert.equal(browser.getUrl(), url)
    }
}

module.exports = new HomePageSteps()
