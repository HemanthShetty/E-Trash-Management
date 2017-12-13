import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import { Validators } from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userId: String ;
  user: User = new User('', '', '', '', '', '','', '', '', '', '');
  notificationMessage: String;
  isInvalid: boolean;
  userIdentity;
  creatorUserId;
  @ViewChild('f') profileForm: NgForm;
  roles=['User','Organization','Employee','Buyer'];
  constructor(private userService: UserService, private router: Router,
              private sharedService: SharedService,private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.creatorUserId = params['uid'];
        }
      );

    this.activatedRoute.params.subscribe(params => {
      this.userIdentity = this.sharedService.user;
    });

    this.userService.findUserById(this.userId)
      .subscribe(
        (data: any) => {
          this.user = data;
        },
        (error: any) => {
        }
      );
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  editProfile() {
    if (this.profileForm.valid) {
      this.user.username = this.profileForm.value.username;
      this.user.password = this.profileForm.value.password;
      this.user.firstName = this.profileForm.value.firstname;
      this.user.lastName = this.profileForm.value.lastname;
      this.user.email = this.profileForm.value.email;
      this.user.employeeId=this.profileForm.value.empId ;
      this.user.organizationName = this.profileForm.value.orgName;
      this.user.address = this.profileForm.value.address;
      this.user.buyerName = this.profileForm.value.buyerName;
      this.userService.updateUser(this.userId, this.user).subscribe(
        (data: any) => {
          if (data == null) {
            this.isInvalid = true;
            this.notificationMessage = 'Error updating profile information' ;
          } else {
            this.isInvalid = false;
            this.router.navigate(['/user', this.creatorUserId , 'manage','user' ]);
          }
        },
        (error: any) => {
          this.isInvalid = true;
          this.notificationMessage = 'Error updating profile information' ;
        }
      );
    } else {
      this.notificationMessage = 'Please Enter The Correct Values';
      this.isInvalid = true ;
    }
  }

  deleteUser() {
    this.userService.deleteUser(this.userId)
      .subscribe(
        (data: any) => {
          if (data.success) {
            this.router.navigate(['/user', this.creatorUserId , 'manage','user' ]);
          } else {
            this.notificationMessage = 'Please Enter The Correct Values';
            this.isInvalid = true ;
          }
        },
        (error: any) => {
        }
      );
  }


}
