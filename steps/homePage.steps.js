const homePage = require('../pages/home.page')
const allure = require('@wdio/allure-reporter')


class HomePageSteps {

    openLoginForm() {
        // allure.startStep('Opening login form')
        homePage.clickLoginButton()
    }

    enterCredentials(login, password) {
        // allure.startStep('Enter user login and password')
        homePage.setLogin(login)
        homePage.setPassword(password)
    }

    submitCredentials() {
        // allure.startStep('Submit credentials')
        homePage.clickSubmitLoginButton()
    }

    verifyLogin() {
        // allure.startStep('Verifying login process')
        homePage.profileImage.waitForDisplayed()
        assert.equal(true, homePage.profileImage.isDisplayed())
    }

    searchItem(item) {
        // allure.startStep('Search specified item')
        homePage.switchToSearchFrame()
        homePage.setSearchOption(item)
    }

    verifySearchResults(item) {
        // allure.startStep('Verifying search results')
        browser.waitUntil(() => { return homePage.searchResults.length > 0 } )
        homePage.searchResults.forEach((res) => {
            let expression = res.getText().toUpperCase().includes(item.toUpperCase())
            assert.equal(true, expression)
        })
    }

    navigateToCategory(category) {
        // allure.startStep('Navigating to specified category')
        browser.waitUntil(() => { return homePage.categoryButtons.length > 0 } )
        homePage.clickCategoryButton(category)
    }

    verifyNavigation(url) {
        // allure.startStep('Verifying navigation process')
        console.log(browser.getUrl())
        assert.equal(browser.getUrl(), url)
    }
}

module.exports = new HomePageSteps()
