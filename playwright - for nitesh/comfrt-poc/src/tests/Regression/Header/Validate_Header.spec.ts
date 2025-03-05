import { expect } from '@playwright/test';
import HomeFunctions from "pageFunctions/HomePage";
import test from '@playwright/test';
import PLPageFunctions from 'pageFunctions/PLPage';
import PDPFunctions from 'pageFunctions/PDPage';
import SideCartFunctions from 'pageFunctions/Sidecart';
import CheckOutFunctions from 'pageFunctions/CheckOut';
import ShippingFunctions from 'pageFunctions/Shipping';
import Helpers from 'resources/helpers';

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

test('Validate AMBASSADOR PROGRAM page', async ({page}) => {
 // Navigate to page       
await home.launchWebSite();
// Verify the home page banner and logo    
    await home.verifyHomePageBanner();
    await home.verifyLogo();
// Verify collection links     
    await home.verifyCollectionLinks();
    await home.collectionLinkNavigation('All');
    await home.collectionLinkNavigation('Hoodies');
    await home.collectionLinkNavigation('Sweatpants');
    await home.collectionLinkNavigation('Kids');
    await home.collectionLinkNavigation('Loungewear');
    await home.collectionLinkNavigation('Blankets');
    await home.collectionLinkNavigation('Pets');
// Verify Side Cart    
    await sidecart.openSideCart();
    await sidecart.closeSideCart();
// Verify Ticker    
    await home.verifyTicker();

    


 });

// run test - npx playwright test comfrt-poc/src/tests/Regression/Header/Validate_Header.spec.ts --headed --reporter=html
// cnage remote origin -  git remote set-url origin <new-repository-url>