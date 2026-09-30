class VendingMachine {
    constructor(items, money) {
        this.items = items;
        this.money = money;
    }

    vend(selection, itemMoney) {
        const item = this.items.find(item => item.code === selection);

        if (!item) {
            return `Invalid selection! : Money in vending machine = ${(this.money).toFixed(2)}`;
        }

        if (itemMoney < item.price) {
            return `Not enough money!`;
        }
      
        if (item.quantity === 0) {
            return `${item.name}: Out of stock!`;
        }

        const change = itemMoney - item.price;
        item.quantity -= 1;
        this.money += item.price;
      
        if (change) {
            return `Vending ${item.name} with ${(change).toFixed(2)} change.`;
        }  else {
            return `Vending ${item.name}`;
        }
    }
}