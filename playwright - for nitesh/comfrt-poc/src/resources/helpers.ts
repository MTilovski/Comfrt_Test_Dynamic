export default class Helpers {
    public fromatedPrice: any;
    public priceMatch: boolean;
    public titleMatch: boolean;

    public constructor(){

    }
  
    /**
     * fromatPrice
     */

    public formatPrice(price1: any) {
        price1 = parseFloat(price1.replace('$',''));

        if(price1 % 1 === 0){
            return price1.toString()
        }
       // console.log('od helpers',price1);
    }  
     
    public comparePrices(price1:any, price2: any){
        console.log('PDP price is ', price1,'Checkout price is ', price2)
        if(price1 === price2){
            return this.priceMatch = true;
        }
        else{
            return this.priceMatch = false;
        }
    }
     /**
     * generateRandomNumber
     * Generates a random number between a minimum and maximum value (inclusive)
     * @param min The minimum value for the random number
     * @param max The maximum value for the random number
     * @returns A random number between min and max (inclusive)
     */
     public generateRandomNumberforCategory(min: number, max: number): number {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Generated random number: ${randomNumber}`);
        return randomNumber;
    }

     /**
     * generateRandomNumber
     * Generates a random number between a minimum and maximum value (inclusive)
     * @param min The minimum value for the random number
     * @param max The maximum value for the random number
     * @returns A random number between min and max (inclusive)
     */
     public generateRandomNumberforItem(min: number, max: number): number {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Generated random number: ${randomNumber}`);
        return randomNumber;
    }

      /**
     * generateRandomNumber
     * Generates a random number between a minimum and maximum value (inclusive)
     * @param min The minimum value for the random number
     * @param max The maximum value for the random number
     * @returns A random number between min and max (inclusive)
     */
      public generateRandomNumberforColor(min: number, max: number): number {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Generated random number: ${randomNumber}`);
        return randomNumber;
    }

    public  compareItemTitles(pdpItemTitle:string, plpItemTitle:string){
        if(pdpItemTitle === plpItemTitle){
         console.log('The titles are maching');
         return this.titleMatch = true;
        }else{
         console.log('The titles are not maching');
         return this.titleMatch = false;
        }   
       
    }
}
