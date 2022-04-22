import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.loginUserForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'password': new FormControl('', [Validators.required]),
    });
  }

  loginUser() {
    this.userService.loginUser(this.loginUserForm.value).subscribe(data => {
      this._snackBar.open('User created successfully.');
    }, err => {
      this._snackBar.open('Unable to create user.');
    });
  }

}
