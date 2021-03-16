import {HomePage} from 'pages/home.page';
import allure from '@wdio/allure-reporter';
import log from '@wdio/logger';
const logger = log('test-basic');
import chai from 'chai';
const expect = chai.expect;


export class HomePageSteps {

    private homePage = new HomePage();

    get openLoginFormMsg() {
        return 'Opening login form';
    }

    get enterCredentialsMsg() {
        return 'Enter user login and password';
    }

    get submitCredentialsMsg() {
        return 'Submit credentials';
    }

    get verifyLoginMsg() {
        return 'Verifying login process';
    }

    get searchItemMsg() {
        return 'Search specified item';
    }

    get verifySearchResultsMsg() {
        return 'Verifying search results';
    }

    get navigateToCategoryMsg() {
        return 'Navigating to specified category';
    }

    get verifyNavigationMsg() {
        return 'Verifying navigation process';
    }

    public openLoginForm() {
        logger.info(this.openLoginFormMsg);
        allure.startStep(this.openLoginFormMsg);
        this.homePage.clickLoginButton();
        allure.endStep();
    }

    public enterCredentials(login: string, password: string) {
        logger.info(this.enterCredentialsMsg);
        allure.startStep(this.enterCredentialsMsg);
        this.homePage.setLogin(login);
        this.homePage.setPassword(password);
        allure.endStep();
    }

    public submitCredentials() {
        logger.info(this.submitCredentialsMsg);
        allure.startStep(this.submitCredentialsMsg);
        this.homePage.clickSubmitLoginButton();
        allure.endStep();
    }

    public verifyLogin() {
        logger.info(this.verifyLoginMsg);
        allure.startStep(this.verifyLoginMsg);
        this.homePage.profileImage.waitForDisplayed();
        expect(this.homePage.profileImage.isDisplayed()).to.equal(true);
        allure.endStep();
    }

    public searchItem(item: string) {
        logger.info(this.searchItemMsg);
        allure.startStep(this.searchItemMsg);
        this.homePage.switchToSearchFrame();
        this.homePage.setSearchOption(item);
        allure.endStep();
    }

    public verifySearchResults(item: string) {
        logger.info(this.verifySearchResultsMsg);
        allure.startStep(this.verifySearchResultsMsg);
        browser.waitUntil(() => {
            return this.homePage.searchResults.length > 0;
        })
        this.homePage.searchResults.forEach((res) => {
            let expression = res.getText().toUpperCase().includes(item.toUpperCase());
            expect(expression).to.equal(true);
        })
        allure.endStep();
    }

    public navigateToCategory(category: string) {
        logger.info(this.navigateToCategoryMsg);
        allure.startStep(this.navigateToCategoryMsg);
        browser.waitUntil(() => {
            return this.homePage.categoryButtons.length > 0;
        })
        this.homePage.clickCategoryButton(category);
        allure.endStep();
    }

    public verifyNavigation(url: string) {
        logger.info(this.verifyNavigationMsg);
        allure.startStep(this.verifyNavigationMsg);
        expect(browser.getUrl()).to.equal(url);
        allure.endStep();
    }

}
