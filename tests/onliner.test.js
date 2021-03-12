const homePageSteps = require('../steps/homepage.steps')
const loginData = require('../test_data/login.data')

describe('Onliner.by smoke tests', function() {
    it('should authorize user', () => {
        browser.maximizeWindow()
        browser.url('/')
        homePageSteps.openLoginForm()
        homePageSteps.enterCredentials(loginData.login, loginData.password)
        homePageSteps.submitCredentials()
        homePageSteps.verifyLogin()
    })
})