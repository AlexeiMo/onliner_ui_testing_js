import {CatalogPage} from 'pages/catalog.page';
import PageSteps from "./page.steps";
import chai from 'chai';
const expect = chai.expect;


export class CatalogPageSteps extends PageSteps{

    private catalogPage = new CatalogPage();

    get openCategoryMsg() {
        return 'Open specified category';
    }

    get openSubcategoryMsg() {
        return 'Open specified subcategory';
    }

    get openProductCategoryMsg() {
        return 'Open specified product category';
    }

    get markProductToCompareMsg() {
        return 'Mark product as "Compared"';
    }

    get openCompareFormMsg() {
        return 'Open compare form';
    }

    get getProductTitleMsg() {
        return 'Getting product title';
    }

    get verifyCompareMsg() {
        return 'Verifying compare process';
    }

    get clearCompMsg() {
        return 'Clear compare popup';
    }

    get openProductPageMsg() {
        return 'Opening specified product page';
    }

    public openCategory(name: string) {
        this.log(this.openCategoryMsg);
        browser.waitUntil(() => {
            return this.catalogPage.categoriesButtons.length > 0;
        })
        this.catalogPage.clickCategoryButton(name);
    }

    public openSubcategory(name: string) {
        this.log(this.openSubcategoryMsg);
        browser.waitUntil(() => {
            return this.catalogPage.subCategories.length > 0;
        })
        this.catalogPage.moveToSubCategory(name);
    }

    public openProductCategory(name: string) {
        this.log(this.openProductCategoryMsg);
        browser.waitUntil(() => {
            return this.catalogPage.productCategoriesButtons.length > 0;
        })
        this.catalogPage.clickProductCategory(name);
    }

    public markProductToCompare(index: number) {
        this.log(this.markProductToCompareMsg);
        browser.waitUntil(() => {
            return this.catalogPage.compareCheckboxes.length > 0;
        })
        this.catalogPage.clickCompareCheckbox(index);
    }

    public openCompareForm() {
        this.log(this.openCompareFormMsg);
        this.catalogPage.clickCompareButton();
    }

    public getProductTitle(index: number) {
        this.log(this.getProductTitleMsg);
        browser.waitUntil(() => {
            return this.catalogPage.productsTitles.length > 0;
        })
        return this.catalogPage.getProductTitle(index);
    }

    public verifyCompare(url: string, title1: string, title2: string) {
        this.log(this.verifyCompareMsg);
        browser.waitUntil(() => {
            return this.catalogPage.comparedProducts.length === 2;
        })
        expect(browser.getUrl().includes(url)).to.equal(true);
        const compTitle1 = this.catalogPage.getComparedProductTitle(0);
        const compTitle2 = this.catalogPage.getComparedProductTitle(1);
        expect(compTitle1).to.equal(title1);
        expect(compTitle2).to.equal(title2);
    }

    public clearCompare() {
        this.log(this.clearCompMsg);
        this.catalogPage.clickClearCompareButton();
    }

    public openProductPage(index: number) {
        this.log(this.openProductPageMsg);
        browser.waitUntil(() => {
            return this.catalogPage.productPageLinks.length > 0;
        })
        this.catalogPage.clickProductPageLink(index);
    }
}
