import { Discount } from "./Discount";
import { itemFactory } from "./item";

export class Store {
    constructor(private discountList?: Discount[]) { }

    checkout(itemList: string): number {
        let total = 0;

        for (const itemChar of itemList.split("")) {
            total += itemFactory(itemChar).getPrice();
        }

        let totalDiscount = 0;
        for (const discount of this.discountList) {
            totalDiscount += discount.calculateDiscount(itemList);
        }



        return total - totalDiscount;
    }
}

