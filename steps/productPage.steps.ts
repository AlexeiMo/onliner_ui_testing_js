import {ProductPage} from 'pages/product.page';
import chai from 'chai';
const expect = chai.expect;
import {Advised} from "aspect.js";
import LoggerAspect from "../utils/logger.aspect";


@Advised(LoggerAspect)
export class ProductPageSteps{

    private productPage = new ProductPage();

    private isProductAdded = false;

    public moveToProductTraders() {
        this.productPage.clickProductTraders();
    }

    public addProductToCart(index: number) {
        browser.waitUntil(() => {
            return this.productPage.buyProductButtons.length > 0;
        })
        this.productPage.clickBuyProductButton(index);
        this.isProductAdded = true;
    }

    public openCartPage() {
        this.productPage.clickCartButton();
    }

    public acceptLocation() {
        this.productPage.moveToLocationButton();
        this.productPage.clickLocationButton();
    }

    public removeProduct(url: string) {
        if(this.isProductAdded === true) {
            browser.url(url);
            this.productPage.clickRemoveProductButton();
        }
    }
}
