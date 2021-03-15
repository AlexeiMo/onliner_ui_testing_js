const homePage = require('../pages/home.page')
const allure = require('@wdio/allure-reporter').default
const log = require('@wdio/logger').default
const logger = log('test-basic')


class HomePageSteps {

    get openLogFormMsg() { return 'Opening login form' }
    get enterCredsMsg() { return 'Enter user login and password' }
    get submitCredsMsg() { return 'Submit credentials'}
    get verifyLoginMsg() { return 'Verifying login process' }
    get searchItemMsg() { return 'Search specified item' }
    get verifySearchMsg() { return 'Verifying search results'}
    get navigateToCatMsg() { return 'Navigating to specified category'}
    get verifyNavigationMsg() { return 'Verifying navigation process'}

    openLoginForm() {
        logger.info(this.openLogFormMsg)
        allure.startStep(this.openLogFormMsg)
        homePage.clickLoginButton()
        allure.endStep()
    }

    enterCredentials(login, password) {
        logger.info(this.enterCredsMsg)
        allure.startStep(this.enterCredsMsg)
        homePage.setLogin(login)
        homePage.setPassword(password)
        allure.endStep()
    }

    submitCredentials() {
        logger.info(this.submitCredsMsg)
        allure.startStep(this.submitCredsMsg)
        homePage.clickSubmitLoginButton()
        allure.endStep()
    }

    verifyLogin() {
        logger.info(this.verifyLoginMsg)
        allure.startStep(this.verifyLoginMsg)
        homePage.profileImage.waitForDisplayed()
        assert.equal(true, homePage.profileImage.isDisplayed())
        allure.endStep()
    }

    searchItem(item) {
        logger.info(this.searchItemMsg)
        allure.startStep(this.searchItemMsg)
        homePage.switchToSearchFrame()
        homePage.setSearchOption(item)
        allure.endStep()
    }

    verifySearchResults(item) {
        logger.info(this.verifySearchMsg)
        allure.startStep(this.verifySearchMsg)
        browser.waitUntil(() => { return homePage.searchResults.length > 0 } )
        homePage.searchResults.forEach((res) => {
            let expression = res.getText().toUpperCase().includes(item.toUpperCase())
            assert.equal(true, expression)
        })
        allure.endStep()
    }

    navigateToCategory(category) {
        logger.info(this.navigateToCatMsg)
        allure.startStep(this.navigateToCatMsg)
        browser.waitUntil(() => { return homePage.categoryButtons.length > 0 } )
        homePage.clickCategoryButton(category)
        allure.endStep()
    }

    verifyNavigation(url) {
        logger.info(this.verifyNavigationMsg)
        allure.startStep(this.verifyNavigationMsg)
        assert.equal(browser.getUrl(), url)
        allure.endStep()
    }
}

module.exports = new HomePageSteps()
