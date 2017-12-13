import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../../../models/user.model.client";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  @ViewChild('f') registrationForm: NgForm;
  user: User;
  verifyPassword: String;
  errorFlag: Boolean;
  errorMsg: String;
  userRole: String;
  roles=['User','Organization','Employee','Buyer'];
  address='';
  creatorUserId;
  userIdentity;

  constructor(private userService: UserService,
              private router: Router, private sharedService:SharedService,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.user=new User('','','','','','','','','','','');
    this.userRole='User';
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.creatorUserId = params['uid'];
        }
      );

    this.activatedRoute.params.subscribe(params => {
      this.userIdentity = this.sharedService.user;
    });
  }



  createUser() {
    if (this.registrationForm.valid) {
      this.user.username = this.registrationForm.value.userName;
      this.user.password = this.registrationForm.value.password;
      this.user.firstName = this.registrationForm.value.firstName;
      this.user.lastName = this.registrationForm.value.lastName;
      this.user.email = this.registrationForm.value.email;
      this.user.role= this.userRole.toString();
      this.user.employeeId=this.registrationForm.value.empId ;
      this.user.organizationName = this.registrationForm.value.orgName;
      this.user.address = this.address;
      this.user.buyerName = this.registrationForm.value.buyerName;
      this.userService.createUser(this.user)
        .subscribe(
          (data: any) => {
            if (data) {
              this.router.navigate(['/user',this.creatorUserId,'manage','user']);
            } else {
              this.errorFlag = true;
              this.errorMsg = 'Failed to create the user';
            }
          },
          (error: any) => {
            this.errorFlag = true;
            this.errorMsg = 'Please enter the correct values';
          }
        );
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Please enter the correct values';
    }
  }

  isPasswordVerified() {
    return (this.registrationForm.value.password === this.registrationForm.value.verifyPassword);
  }

}
