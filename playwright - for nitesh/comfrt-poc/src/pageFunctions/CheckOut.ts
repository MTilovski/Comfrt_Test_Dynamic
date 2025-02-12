import test, { Page, expect } from "@playwright/test";
import UIActions from "framework/actions/UIActions";
// import Assert from "@asserts/Assert";
import CommonConstants from "framework/constants/CommonConstants";
import HomePageConstants from "framework/constants/HomePageConstants";
import HomePage from "../pages/HomePage";
import UIElementActions from "framework/actions/UIElementActions";
import AlertActions from "framework/actions/AlertActions";

import * as dotenv from "dotenv";
import CheckOut from "pages/CheckOut";
dotenv.config({ path: "playwright - for nitesh\\comfrt-poc\\.env" });



export default class CheckOutFunctions {    
    private ui: UIActions;
    private ae: AlertActions;

    public getPage(): Page {
        return this.page;
    }

    constructor(private page: Page) {
        this.ui = new UIActions(page);
        this.ae = new AlertActions(page);
    }
    public async fillCredentials(email: string, country: string, name: string, lastName:string, adress: string, city: string,
        zip: string, phone: string 
     ) {
            await test.step(`Fill in all required filds`, async () => {
                await this.page.locator(CheckOut.EMAIL_FIELD).fill(email) ;
                await this.page.locator(CheckOut.COUNTRY_DROPDOWN).selectOption({ value: country});
                await this.page.locator(CheckOut.FIRST_NAME_FIELD).fill(name);
                await this.page.locator(CheckOut.LAST_NAME_FIELD).fill(lastName);
                await this.page.locator(CheckOut.ADDRESS_FIELD).fill(adress);
                await this.page.locator(CheckOut.CITY_FIELD).fill(city);
                await this.page.locator(CheckOut.ZIP_FIELD).fill(zip);
                await this.page.locator(CheckOut.PHONE_FIELDS).fill(phone);

            });          
    }
public async clickContinueToShippingButton(){
            await test.step('Clicking the Continue to shipping Button', async() => {
               await this.ui.element(CheckOut.CONTINUE_TO_SHIPPING_BUTTON,'Continue to shipping').waitForPresent();
               await this.ui.element(CheckOut.CONTINUE_TO_SHIPPING_BUTTON,'Continue to shipping').click();
            }) 

    }  
}

