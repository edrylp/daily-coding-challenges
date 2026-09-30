class VendingMachine():

    def __init__(self, items, money):
        self.items = items
        self.money = money

    def vend(self, selection, item_money):
        item = next(
            (item for item in self.items if item["code"] == selection),
            None
        )

        if item is None:
            return f"Invalid selection! : Money in vending machine = {self.money:.2f}"
        
        if item_money < item["price"]:
            return "Not enough money!"
        
        if item["quantity"] == 0:
            return f"{item['name']}: Out of stock!"
        
        change = item_money - item['price']
        item['quantity'] -= 1
        self.money += item['price']

        if change:
            return f"Vending {item['name']} with {change:.2f} change."
        else:
            return f"Vending {item['name']}"