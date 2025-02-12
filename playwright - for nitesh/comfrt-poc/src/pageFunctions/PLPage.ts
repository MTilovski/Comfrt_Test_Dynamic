import test, { Page, expect } from "@playwright/test";
import UIActions from "framework/actions/UIActions";
// import Assert from "@asserts/Assert";
import CommonConstants from "framework/constants/CommonConstants";
import HomePageConstants from "framework/constants/HomePageConstants";
import HomePage from "../pages/HomePage";
import UIElementActions from "framework/actions/UIElementActions";
import AlertActions from "framework/actions/AlertActions";
import PLPage from "pages/PLPage";

export default class PLPageFunctions {    
    private ui: UIActions;
    private ae: AlertActions;

    public getPage(): Page {
        return this.page;
    }

    constructor(private page: Page) {
        this.ui = new UIActions(page);
        this.ae = new AlertActions(page);
    }

    public async selectItem(Item: string){
        test.step('Select Item From PLP', async() => {
            let ITEM = `//*[@data-orly-handle="${Item}"]`
            await this.page.locator(ITEM).click();
        });
    }

}

    