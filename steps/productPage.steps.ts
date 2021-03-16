import {ProductPage} from 'pages/product.page';
import PageSteps from "./page.steps";
import chai from 'chai';
const expect = chai.expect;

export class ProductPageSteps extends PageSteps{

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
        this.log(this.moveToProductTradersMsg);
        this.productPage.clickProductTraders();
    }

    public addProductToCart(index: number) {
        this.log(this.addProductToCartMsg);
        browser.waitUntil(() => {
            return this.productPage.buyProductButtons.length > 0;
        })
        this.productPage.clickBuyProductButton(index);
    }

    public openCartPage() {
        this.log(this.openCartPageMsg);
        this.productPage.clickCartButton();
    }

    public acceptLocation() {
        this.log(this.acceptLocationMsg);
        this.productPage.moveToLocationButton();
        this.productPage.clickLocationButton();
    }

}
