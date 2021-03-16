import {HomePage} from 'pages/home.page';
import PageSteps from "./page.steps";
import chai from 'chai';
const expect = chai.expect;

export class HomePageSteps extends PageSteps{

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
        this.log(this.openLoginFormMsg)
        this.homePage.clickLoginButton();
    }

    public enterCredentials(login: string, password: string) {
        this.log(this.enterCredentialsMsg);
        this.homePage.setLogin(login);
        this.homePage.setPassword(password);
    }

    public submitCredentials() {
        this.log(this.submitCredentialsMsg);
        this.homePage.clickSubmitLoginButton();
    }

    public verifyLogin() {
        this.log(this.verifyLoginMsg);
        this.homePage.profileImage.waitForDisplayed();
        expect(this.homePage.profileImage.isDisplayed()).to.equal(true);
    }

    public searchItem(item: string) {
        this.log(this.searchItemMsg);
        this.homePage.switchToSearchFrame();
        this.homePage.setSearchOption(item);
    }

    public verifySearchResults(item: string) {
        this.log(this.verifySearchResultsMsg);
        browser.waitUntil(() => {
            return this.homePage.searchResults.length > 0;
        })
        this.homePage.searchResults.forEach((res) => {
            let expression = res.getText().toUpperCase().includes(item.toUpperCase());
            expect(expression).to.equal(true);
        })
    }

    public navigateToCategory(category: string) {
        this.log(this.navigateToCategoryMsg);
        browser.waitUntil(() => {
            return this.homePage.categoryButtons.length > 0;
        })
        this.homePage.clickCategoryButton(category);
    }

    public verifyNavigation(url: string) {
        this.log(this.verifyNavigationMsg);
        expect(browser.getUrl()).to.equal(url);
    }

}
