const homePage = require('../pages/home.page')
const allure = require('@wdio/allure-reporter').default
const log = require('@wdio/logger').default
const logger = log('test-basic')


class HomePageSteps {

    openLoginForm() {
        logger.info('Opening login form')
        allure.startStep('Opening login form')
        homePage.clickLoginButton()
        allure.endStep()
    }

    enterCredentials(login, password) {
        logger.info('Enter user login and password')
        allure.startStep('Enter user login and password')
        homePage.setLogin(login)
        homePage.setPassword(password)
        allure.endStep()
    }

    submitCredentials() {
        logger.info('Submit credentials')
        allure.startStep('Submit credentials')
        homePage.clickSubmitLoginButton()
        allure.endStep()
    }

    verifyLogin() {
        logger.info('Verifying login process')
        allure.startStep('Verifying login process')
        homePage.profileImage.waitForDisplayed()
        assert.equal(true, homePage.profileImage.isDisplayed())
        allure.endStep()
    }

    searchItem(item) {
        logger.info('Search specified item')
        allure.startStep('Search specified item')
        homePage.switchToSearchFrame()
        homePage.setSearchOption(item)
        allure.endStep()
    }

    verifySearchResults(item) {
        logger.info('Verifying search results')
        allure.startStep('Verifying search results')
        browser.waitUntil(() => { return homePage.searchResults.length > 0 } )
        homePage.searchResults.forEach((res) => {
            let expression = res.getText().toUpperCase().includes(item.toUpperCase())
            assert.equal(true, expression)
        })
        allure.endStep()
    }

    navigateToCategory(category) {
        logger.info('Navigating to specified category')
        allure.startStep('Navigating to specified category')
        browser.waitUntil(() => { return homePage.categoryButtons.length > 0 } )
        homePage.clickCategoryButton(category)
        allure.endStep()
    }

    verifyNavigation(url) {
        logger.info('Verifying navigation process')
        allure.startStep('Verifying navigation process')
        assert.equal(browser.getUrl(), url)
        allure.endStep()
    }
}

module.exports = new HomePageSteps()
