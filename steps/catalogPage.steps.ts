import {CatalogPage} from 'pages/catalog.page';
import allure from '@wdio/allure-reporter';
import log from '@wdio/logger';
import chai from 'chai';
const expect = chai.expect;
const logger = log('test-basic')


export class CatalogPageSteps {

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
        logger.info(this.openCategoryMsg);
        allure.startStep(this.openCategoryMsg);
        browser.waitUntil(() => {
            return this.catalogPage.categoriesButtons.length > 0;
        })
        this.catalogPage.clickCategoryButton(name);
        allure.endStep();
    }

    public openSubcategory(name: string) {
        logger.info(this.openSubcategoryMsg);
        allure.startStep(this.openSubcategoryMsg);
        browser.waitUntil(() => {
            return this.catalogPage.subCategories.length > 0;
        })
        this.catalogPage.moveToSubCategory(name);
        allure.endStep();
    }

    public openProductCategory(name: string) {
        logger.info(this.openProductCategoryMsg);
        allure.startStep(this.openProductCategoryMsg);
        browser.waitUntil(() => {
            return this.catalogPage.productCategoriesButtons.length > 0;
        })
        this.catalogPage.clickProductCategory(name);
        allure.endStep();
    }

    public markProductToCompare(index: number) {
        logger.info(this.markProductToCompareMsg);
        allure.startStep(this.markProductToCompareMsg);
        browser.waitUntil(() => {
            return this.catalogPage.compareCheckboxes.length > 0;
        })
        this.catalogPage.clickCompareCheckbox(index);
        allure.endStep();
    }

    public openCompareForm() {
        logger.info(this.openCompareFormMsg);
        allure.startStep(this.openCompareFormMsg);
        this.catalogPage.clickCompareButton();
        allure.endStep();
    }

    public getProductTitle(index: number) {
        logger.info(this.getProductTitleMsg);
        allure.startStep(this.getProductTitleMsg);
        browser.waitUntil(() => {
            return this.catalogPage.productsTitles.length > 0;
        })
        allure.endStep();
        return this.catalogPage.getProductTitle(index);
    }

    public verifyCompare(url: string, title1: string, title2: string) {
        logger.info(this.verifyCompareMsg);
        allure.startStep(this.verifyCompareMsg);
        browser.waitUntil(() => {
            return this.catalogPage.comparedProducts.length === 2;
        })
        expect(browser.getUrl().includes(url)).to.equal(true);
        const compTitle1 = this.catalogPage.getComparedProductTitle(0);
        const compTitle2 = this.catalogPage.getComparedProductTitle(1);
        expect(compTitle1).to.equal(title1);
        expect(compTitle2).to.equal(title2);
        allure.endStep();
    }

    public clearCompare() {
        logger.info(this.clearCompMsg);
        allure.startStep(this.clearCompMsg);
        this.catalogPage.clickClearCompareButton();
        allure.endStep();
    }

    public openProductPage(index: number) {
        logger.info(this.openProductPageMsg);
        allure.startStep(this.openProductPageMsg);
        browser.waitUntil(() => {
            return this.catalogPage.productPageLinks.length > 0;
        })
        this.catalogPage.clickProductPageLink(index);
        allure.endStep();
    }
}
