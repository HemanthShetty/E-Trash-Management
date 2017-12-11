import {Inventory} from "./inventory.model.client";
/**
 * Created by hemanthshetty on 12/10/17.
 */

export class DropOff {
  public _id: String;
  public customerId: String;
  public collectionPointId: String;
  public inventory: Inventory[];
  public status: String;




  constructor(_id:String,customerId:String,collectionPointId:String,inventory:Inventory[],status:String) {
    this._id = _id;
    this.customerId = customerId;
    this.collectionPointId =  collectionPointId;
    this.inventory=inventory;
    this.status =  status;
  }
}

