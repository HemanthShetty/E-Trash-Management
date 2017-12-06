export class User {
  public _id: string;
  public username: string;
  public password: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public role: string;
  public employeeId: string;
  public organizationName: string;
  public buyerName: string;
  public refineryAddress: string;



  constructor(_id:string,username:string,password:string,email:string,firstName:string,lastName:string,
               role:string,employeeId:string,organizationName:string,buyerName:string,refineryAddress:string) {
    this._id = "";
    this.username =  "";
    this.password =  "";
    this.email =  "";
    this.firstName =  "";
    this.lastName =  "";
    this.role="";
    this.employeeId="";
    this.organizationName="";
    this.buyerName="";
    this.refineryAddress="";
  }
}
