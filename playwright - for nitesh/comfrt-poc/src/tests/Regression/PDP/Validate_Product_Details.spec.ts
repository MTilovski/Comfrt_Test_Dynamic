import { expect } from '@playwright/test';
import HomeFunctions from "pageFunctions/HomePage";
import PLPageFunctions from 'pageFunctions/PLPage';
import PDPFunctions from 'pageFunctions/PDPage';
import SideCartFunctions from 'pageFunctions/Sidecart';
import CheckOutFunctions from 'pageFunctions/CheckOut';
import ShippingFunctions from 'pageFunctions/Shipping';
import Helpers from 'resources/helpers';
import test from '@playwright/test';

let home: HomeFunctions;
let plp: PLPageFunctions;
let pdp: PDPFunctions;
let sidecart: SideCartFunctions;
let checkout: CheckOutFunctions;
let shipping: ShippingFunctions;
let helpers: Helpers;

test.beforeEach(async ({ page }) => {

    home = new HomeFunctions(page);  
    plp = new PLPageFunctions(page);
    pdp = new PDPFunctions(page);
    sidecart = new SideCartFunctions(page);
    checkout = new CheckOutFunctions(page);
    shipping = new ShippingFunctions(page);
    helpers = new Helpers(page);

});

test('Validate product details', async ({page}) => {
    // Navigate to Home Page     
       await home.launchWebSite();
    // Navigate to any category and select an item   
       await home.selectRandomCategory(helpers.generateRandomNumberforCategory(1,8));   
       await plp.selectRandomItem(helpers.generateRandomNumberforItem(1,3));
    // Validate that the product has a title and a short description
       await pdp.verifyItemTitle();
       await pdp.verifyItemDescription();
    });

    // run test - npx playwright test comfrt-poc/src/tests/Regression/PDP/Validate_Product_Details.spec.ts --headed --reporter=html
