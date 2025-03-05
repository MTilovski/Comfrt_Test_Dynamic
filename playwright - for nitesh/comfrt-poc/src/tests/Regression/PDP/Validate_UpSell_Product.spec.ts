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

test('Validate UpSell Product', async ({page}) => {
    // Navigate to PDP     
       await home.launchWebSite();
       await home.selectRandomCategory(helpers.generateRandomNumberforCategory(1,8));   
       await plp.selectRandomItem(helpers.generateRandomNumberforItem(1,3));
    // Navigate to Complete The Look section
    // Validate the following details are correct in Complete The Look section for UpSell products:
        // Product Image        
        // Product name
        // Price
        // Size
        // Color
       await pdp.CompleteTheLook_Verification()
        // Alignment of 'Add to Cart' button
       await pdp.CompleteTheLook_AddToCartVerification() 
    });

    // run test - npx playwright test comfrt-poc/src/tests/Regression/PDP/Validate_UpSell_Product.spec.ts --headed --reporter=html