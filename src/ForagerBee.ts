class ForagerBee extends Bee 
{
    canFly : boolean = true;
    treasureChest: Array<string> = [];
    constructor() {
        super();
        this.age = 10;
        this.job = 'find pollen';
               
     } 

     forage (treasueAdd:string) {
        this.treasureChest.push(treasueAdd)  ;
    }
};