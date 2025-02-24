import test, { Page, expect } from "@playwright/test";
import UIActions from "framework/actions/UIActions";
import AlertActions from "framework/actions/AlertActions";
import PLPage from "pages/PLPage";

export default class PLPageFunctions {    
    private ui: UIActions;
    private ae: AlertActions;
    public item1Name: string;

    public getPage(): Page {
        return this.page;
    }

    constructor(private page: Page) {
        this.ui = new UIActions(page);
        this.ae = new AlertActions(page);
    }

    public async selectItem(Item: string){
        test.step('Select Item From PLP', async() => {
            let ITEM = `//*[@data-orly-handle="${Item}"]`;
            await this.page.locator(ITEM).click();
        });
    }

    public async verifyPLPTitle(Title: string, Title1: string){
        test.step('Verify that the PLP title is present and correct', async() => {
            let TITLE =`//*[@id="collections_with_pagination-default-collections-with-pagination_0"]/h1[contains(text(),'${Title}')]`
            const mainTitle = await this.page.locator(TITLE).isVisible();
            let TITLE1 = `//*[contains(@id, 'featured_products')]/div/div/h1[contains(text(),'${Title1}')]`;
            const titleBelowBanner = await this.page.locator(TITLE1).isVisible();

            if (mainTitle) {
                console.log('Title is present');
              } else if (titleBelowBanner) {
                console.log('Title is present below the banner');
              } else {
                console.log('Title is not present');
              }
              
        })
    }
    public async verifyItemsOnPLP(){
        test.step('verify thet items are present on the PLP', async() => {
            //IDS ARE NEEDED 
        })
    }
    public async verifyDynamicPLPTitle(){
        test.step('Verify that the PLP title is present', async() => {
            const mainTitle = await this.page.locator(PLPage.MAIN_TITLE).isVisible();
            const titleBelowBanner = await this.page.locator(PLPage.TITLE_BELOW_BANNER).isVisible();
            if (mainTitle) {
                console.log('Title is present');
              } else if (titleBelowBanner) {
                console.log('Title is present below the banner');
              } else {
                console.log('Title is not present');
              }  
        });
    }
    public async selectRandomItem(itemNumber: number){
        test.step('Selecting a random item and verify the item title on PLP', async() =>{
            let ITEM1 = `//div[contains(@id, "collections_with_pagination")]/div/div/div[${itemNumber}]/a/div[2]/div[1]`;
            let ITEM2 = `(//div[contains(@id,"featured_products_section")])[1]/div/div[2]/div/div[${itemNumber}]/a/div[2]/div[1]`;
           // let ITEM3 = `(//div[contains(@id,"featured_products_section")])[2]/div/div[2]/div/div[${itemNumber}]/a`;

            const item1Visable = await this.page.locator(ITEM1).isVisible();
            const item2Visible = await this.page.locator(ITEM2).isVisible();
           // const item3Visable = await this.page.locator(ITEM3);

                if(item1Visable){
                    await this.page.waitForTimeout(300);
                    this.item1Name = await this.page.locator(ITEM1).textContent();
                    await this.page.locator(ITEM1).click();
                    await console.log('Item PLP title is ',this.item1Name);
                    return this.item1Name ;
                }else if(item2Visible){
                    await this.page.waitForTimeout(300);
                    this.item1Name = await this.page.locator(ITEM2).textContent();
                    await this.page.locator(ITEM2).click();
                    await console.log('Item PLP title is ',this.item1Name);
                    return this.item1Name;
                }else{
                    await this.page.waitForTimeout(300);
                    await console.log('no locators are present');
                }

        });
    }

}

    