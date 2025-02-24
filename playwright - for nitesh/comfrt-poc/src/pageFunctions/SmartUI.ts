import test, { Page, expect } from "@playwright/test";
import UIActions from "framework/actions/UIActions";
import AlertActions from "framework/actions/AlertActions";

import * as dotenv from "dotenv";
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

    public async smartUIScreenShotFeature(SSName: string){
            await test.step('Take a scren shot and do a comparason',async() =>{
                 await this.page.evaluate((_) => {},
                   `lambdatest_action: ${JSON.stringify({
                    action: 'smartui.takeScreenshot',
                    arguments: {
                    fullPage: true,
                    screenshotName: `${SSName}`
                    }
                })
            }`)
          }) 
        }
}