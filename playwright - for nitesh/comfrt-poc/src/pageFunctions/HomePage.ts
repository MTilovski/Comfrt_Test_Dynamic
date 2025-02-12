import test, { Page, expect } from "@playwright/test";
import UIActions from "framework/actions/UIActions";
// import Assert from "@asserts/Assert";
import CommonConstants from "framework/constants/CommonConstants";
import HomePageConstants from "framework/constants/HomePageConstants";
import HomePage from "../pages/HomePage";
import UIElementActions from "framework/actions/UIElementActions";
import AlertActions from "framework/actions/AlertActions";

import * as dotenv from "dotenv";
dotenv.config({ path: "playwright - for nitesh\\comfrt-poc\\.env" });



export default class HomeFunctions {    
    private ui: UIActions;
    private ae: AlertActions;

    public getPage(): Page {
        return this.page;
    }

    constructor(private page: Page) {
        this.ui = new UIActions(page);
        this.ae = new AlertActions(page);
    }
    /**
     * Launch the Application
     */
    public async launchWebSite() {
        await test.step(`Launching the web site`, async () => {
            await this.ui.goto(process.env.BASE_URL, HomePageConstants.HOME_PAGE);
            await this.page.waitForTimeout(3000);
        });
    }

    // public async 

    // Verify Footers on Home Page
    public async verifyHomePageBanner() {
        await test.step(`Verify the hompage banner`, async () => {
        await this.ui.element(HomePage.HOME_PAGE_BANNER,'Verify banner').waitForPresent();

        })
    }

    //Close pop-up window on home page
    public async closePopUp(){
        await test.step(`Close Pop up window on Home Page`, async () => {
            await this.page.getByRole('button', { name: 'Close' }).click();
        });
    }

    //Click on search icon
    public async searchIcon(){
        await test.step(`Click on Home Page`, async () => {
            await this.ui.element(HomePage.SEARCH_BUTTON, HomePageConstants.SEARCH_ICON).click();
        });
    }

    public async verifyLogo(){
        await test.step('verify that the logo is present', async() => {
            await this.ui.element(HomePage.LOGO,'verify logo').waitForPresent();
        });
    }
    
    public async navigateToCategory(collectionName: string){
        let COLLECTION_MENU = `//*[@data-orly-type="main_menu_item_desktop" and contains(text(),'${collectionName}')]`
        //let COLLECTION_MENU = `//*[@href="/collections/${collectionName}"]` 
        await test.step('Navigate to a category', async () => {
            await this.page.locator(COLLECTION_MENU).waitFor();
            await this.page.locator(COLLECTION_MENU).click();
        });     
    } 
    public async clickBannerButton(){
        await test.step('Navigate to a category', async () => {
            await this.page.locator(HomePage.BANNER_BUTTON).waitFor();
            await this.page.locator(HomePage.BANNER_BUTTON).click();
         });
    }
}
