import {CartPage} from 'pages/cart.page';
import chai from 'chai';
const expect = chai.expect;
import {Advised} from "aspect.js";
import LoggerAspect from "../utils/logger.aspect";


@Advised(LoggerAspect)
export class CartPageSteps{

    private cartPage = new CartPage();

    public createOrder() {
        this.cartPage.clickCreateOrderButton();
    }

    public verifyOrderPage(url: string, title: string) {
        expect(this.cartPage.getOrderTitle().includes(title)).to.equal(true);
        expect(browser.getUrl()).to.equal(url);
    }
}
