export class Inventory {
  public itemId : String;
  public quantity : String;
  public itemName : String;



  constructor(id,quantity,itemName) {
    this.itemId = id;
    this.quantity = quantity;
    this.itemName = itemName;
  }
}
