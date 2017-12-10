/**
 * Created by hemanthshetty on 12/10/17.
 */

export class DropOff {
  public _id: String;
  public customerId: String;
  public collectionPointId: String;
  public itemId: String;
  public quantity: String;
  public status: String;




  constructor(_id:String,customerId:String,collectionPointId:String,itemId:String,quantity:String,status:String) {
    this._id = _id;
    this.customerId = customerId;
    this.collectionPointId =  collectionPointId;
    this.itemId = itemId  ;
    this.quantity =  quantity;
    this.status =  status;
  }
}

