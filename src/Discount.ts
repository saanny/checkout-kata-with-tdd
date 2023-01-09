import { ItemType } from "./item";

export class Discount {
    constructor(private itemtype: ItemType, private quantity: number, private discount: number) {

    }
    calculateDiscount(itemList: string): number {
        const a_counter = itemList.split("").filter(item => item === this.itemtype).length;
        return Math.trunc(a_counter / this.quantity) * this.discount;
    }
}