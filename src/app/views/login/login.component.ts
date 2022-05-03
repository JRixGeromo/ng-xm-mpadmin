import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthHelperGuard } from 'src/app/helpers/auth-helper.guard';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { environment } from 'src/environments/environment';

export interface userProfile {
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  displayPhotoFilePath: null;
  displayBannerFilePath: null;
  walletAddress: null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup = new FormGroup({});
  newProfileDetail: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router,
    private authHelper: AuthHelperGuard,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.loginUserForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'password': new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.authService.login(this.loginUserForm.value).subscribe(data => {
      this._snackBar.open('Login successfully.');
        this.authHelper.saveAuthInfo(data);
        /* this.profileService.getProfilebyUserId(data.userId).subscribe(profileData){
          this.newProfileDetail = {
            ...data,
            profile: {
              ...profileData,
              displayPhotoFilePath: profileData.displayPhotoFilePath ? profileData.displayPhotoFilePath : environment.ANG_APP_DEFAULT_PIC_URL,
            },
          };
        }; */
      this.router.navigate(['/']);
    }, err => {
      console.log('err', err);
      this._snackBar.open('Unable to login.');
    });
  }

}
