import {HomePage} from 'pages/home.page';
import chai from 'chai';
const expect = chai.expect;
import {Advised} from "aspect.js";
import LoggerAspect from "../utils/logger.aspect";


@Advised(LoggerAspect)
export class HomePageSteps{

    private homePage = new HomePage();

    public openLoginForm() {
        this.homePage.clickLoginButton();
    }

    public enterCredentials(login: string, password: string) {
        this.homePage.setLogin(login);
        this.homePage.setPassword(password);
    }

    public submitCredentials() {
        this.homePage.clickSubmitLoginButton();
    }

    public verifyLogin() {
        this.homePage.profileImage.waitForDisplayed();
        expect(this.homePage.profileImage.isDisplayed()).to.equal(true);
    }

    public searchItem(item: string) {
        this.homePage.switchToSearchFrame();
        this.homePage.setSearchOption(item);
    }

    public verifySearchResults(item: string) {
        browser.waitUntil(() => {
            return this.homePage.searchResults.length > 0;
        })
        this.homePage.searchResults.forEach((res) => {
            let expression = res.getText().toUpperCase().includes(item.toUpperCase());
            expect(expression).to.equal(true);
        })
    }

    public navigateToCategory(category: string) {
        browser.waitUntil(() => {
            return this.homePage.categoryButtons.length > 0;
        })
        this.homePage.clickCategoryButton(category);
    }

    public verifyNavigation(url: string) {
        expect(browser.getUrl()).to.equal(url);
    }

}
