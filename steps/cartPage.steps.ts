import {CartPage} from 'pages/cart.page';
import PageSteps from "./page.steps";
import chai from 'chai';
const expect = chai.expect;


export class CartPageSteps extends PageSteps{

    private cartPage = new CartPage();

    get createOrderMsg() {
        return 'Creating order';
    }

    get verifyOrderPageMsg() {
        return 'Verifying order page content';
    }

    public createOrder() {
        this.log(this.createOrderMsg);
        this.cartPage.clickCreateOrderButton();
    }

    public verifyOrderPage(url: string, title: string) {
        this.log(this.verifyOrderPageMsg);
        expect(this.cartPage.getOrderTitle().includes(title)).to.equal(true);
        expect(browser.getUrl()).to.equal(url);
    }
}
