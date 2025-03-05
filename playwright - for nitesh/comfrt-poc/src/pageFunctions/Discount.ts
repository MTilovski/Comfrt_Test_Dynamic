import test, { Page, expect } from "@playwright/test";
import UIActions from "framework/actions/UIActions";
import HomePageConstants from "framework/constants/HomePageConstants";
import HomePage from "../pages/HomePage";
import UIElementActions from "framework/actions/UIElementActions";
import AlertActions from "framework/actions/AlertActions";

import * as dotenv from "dotenv";
import Discount from "pages/Discount";
dotenv.config({ path: "playwright - for nitesh\\comfrt-poc\\.env" });



export default class DiscountFunctions {    
    private ui: UIActions;
    private ae: AlertActions;

    public getPage(): Page {
        return this.page;
    }

    constructor(private page: Page) {
        this.ui = new UIActions(page);
        this.ae = new AlertActions(page);
    }
     public async completeDiscountProcess(email: string, phone: string){
            await test.step('Click Sign Up footer button and complete the discount process', async() => {
                await this.page.locator(HomePage.SIGN_UP_FOOTER_BUTTON).scrollIntoViewIfNeeded();
                await this.page.locator(HomePage.SIGN_UP_FOOTER_BUTTON).click();
                await this.page.waitForTimeout(2000);
                await this.page.locator(Discount.PRETTY_COMFY_BUTTON).waitFor();
                await this.page.locator(Discount.PRETTY_COMFY_BUTTON).isVisible();
                await this.page.locator(Discount.PRETTY_COMFY_BUTTON).click();
                await this.page.locator(Discount.INPUT_EMAIL).fill(email);
                await this.page.locator(Discount.CLAIM_15).click();
                await this.page.locator(Discount.ACTIVATE_BUTTON).waitFor();
                await this.page.locator(Discount.INPUT_TEL).fill(phone);
                await this.page.locator(Discount.ACTIVATE_BUTTON).click()
                await this.page.locator(Discount.SHOP_NOW_BUTTON).waitFor();
                await this.page.locator(Discount.SHOP_NOW_BUTTON).click();
            });
        }   
}
