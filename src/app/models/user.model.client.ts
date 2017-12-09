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
  public address: string;



  constructor(_id:string,username:string,password:string,email:string,firstName:string,lastName:string,
               role:string,employeeId:string,organizationName:string,buyerName:string,address:string) {
    this._id = _id;
    this.username =  username;
    this.password =  password;
    this.email =  email;
    this.firstName =  firstName;
    this.lastName =  lastName;
    this.role=role;
    this.employeeId=employeeId;
    this.organizationName=organizationName;
    this.buyerName=buyerName;
    this.address=address;
  }
}
