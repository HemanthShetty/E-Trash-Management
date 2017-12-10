export class Catalog {
  public _id: string;
  public name: string;
  public description: string;
  public price: string;
  public quantity: string;
  public imageUrl: string;




  constructor(_id:string,name:string,description:string,price:string,quantity:string,imageUrl:string) {
    this._id = _id;
    this.name = name;
    this.description =  description;
    this.price =  price;
    this.quantity =  quantity;
    this.imageUrl =  imageUrl;
  }
}
