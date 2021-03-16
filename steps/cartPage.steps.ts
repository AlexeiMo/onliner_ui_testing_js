import {CartPage} from 'pages/cart.page';
import allure from '@wdio/allure-reporter';
import log from '@wdio/logger';
import chai from 'chai';
const expect = chai.expect;

const logger = log('test-basic')

// const {Advised} = require("aspect.js")


export class CartPageSteps {
    private cartPage = new CartPage();

    get createOrderMsg() {
        return 'Creating order';
    }

    get verifyOrderPageMsg() {
        return 'Verifying order page content';
    }

    get removeProductMsg() {
        return 'Remove product from cart';
    }

    public createOrder() {
        logger.info(this.createOrderMsg);
        allure.startStep(this.createOrderMsg);
        this.cartPage.clickCreateOrderButton();
        allure.endStep();
    }

    public verifyOrderPage(url: string, title: string) {
        logger.info(this.verifyOrderPageMsg);
        allure.startStep(this.verifyOrderPageMsg);
        expect(this.cartPage.getOrderTitle().includes(title)).to.equal(true);
        expect(browser.getUrl()).to.equal(url);
        allure.endStep();
    }

    public removeProduct(url: string) {
        logger.info(this.removeProductMsg);
        allure.startStep(this.removeProductMsg);
        browser.url(url);
        this.cartPage.clickRemoveProductButton();
        allure.endStep();
    }
}
