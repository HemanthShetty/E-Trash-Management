import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid Username or Password';

  constructor(private router: Router, private userService: UserService) {}

  login() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((data: any) => {
          this.errorFlag = false;
          this.router.navigate(['/user/', data._id]);
        },
        (error: any) => {
          this.errorFlag = true;
        });
  }


  ngOnInit() {

  }
}
