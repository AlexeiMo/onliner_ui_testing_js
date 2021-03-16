import {ProductPage} from 'pages/product.page';
import allure from '@wdio/allure-reporter';
import log from '@wdio/logger';
const logger = log('test-basic');
import chai from 'chai';
const expect = chai.expect;

export class ProductPageSteps {

    private productPage = new ProductPage();

    get moveToProductTradersMsg() {
        return 'Move to product traders';
    }

    get addProductToCartMsg() {
        return 'Add specified product to cart';
    }

    get openCartPageMsg() {
        return 'Opening cart page';
    }

    get acceptLocationMsg() {
        return 'Accepting location popup';
    }

    public moveToProductTraders() {
        logger.info(this.moveToProductTradersMsg);
        allure.startStep(this.moveToProductTradersMsg);
        this.productPage.clickProductTraders();
        allure.endStep();
    }

    public addProductToCart(index: number) {
        logger.info(this.addProductToCartMsg);
        allure.startStep(this.addProductToCartMsg);
        browser.waitUntil(() => {
            return this.productPage.buyProductButtons.length > 0;
        })
        this.productPage.clickBuyProductButton(index);
        allure.endStep();
    }

    public openCartPage() {
        logger.info(this.openCartPageMsg);
        allure.startStep(this.openCartPageMsg);
        this.productPage.clickCartButton();
        allure.endStep();
    }

    public acceptLocation() {
        logger.info(this.acceptLocationMsg);
        allure.startStep(this.acceptLocationMsg);
        this.productPage.moveToLocationButton();
        this.productPage.clickLocationButton();
        allure.endStep();
    }

}
