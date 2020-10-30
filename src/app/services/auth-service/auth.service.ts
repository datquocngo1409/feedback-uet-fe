import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../api-service/api.service';
import {map} from 'rxjs/operators';
import {merge} from 'rxjs';

import * as MenuConfig from '../../../assets/data/menu.json';
import {HorizontalMenuItems} from 'app/core/menu/horizontal-menu-items/horizontal-menu-items';
import {TranslateService} from '@ngx-translate/core';

const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
const USER_TOKEN = 'authenticateToken';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: Observable<firebase.User>;
    userData: any;
    isLoggedIn = false;
    token: String = null;

    constructor(private firebaseAuth: AngularFireAuth,
                private router: Router,
                private toastr: ToastrService,
                private apiService: ApiService,
                private translate: TranslateService) {
        this.user = firebaseAuth.authState;
    }

    /*
     *  getLocalStorageUser function is used to get local user profile data.
     */
    getLocalStorageUser() {
        this.userData = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userData) {
            localStorage.setItem('language', this.userData.language);
            let language: string = this.translate.getBrowserLang();
            if (localStorage.getItem('language') !== null) {
                language = localStorage.getItem('language').substring(0, 2);
            }
            this.translate.use(language.match(/en|fr/) ? language : 'en');
            this.isLoggedIn = true;
            return this.userData;
        } else {
            this.isLoggedIn = false;
            return false;
        }
    }

    isUserLogined() {
        this.userData = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userData) {
            this.isLoggedIn = true;
            return true;
        } else {
            this.isLoggedIn = false;
            return false;
        }
    }

    /*
     * loginUser fuction used to login
     */
    loginUser(value) {
        this.apiService.login(value.account, value.password).subscribe((result: any) => {
            console.log(result);
            this.toastr.success('Successfully Logged In!');
            this.router.navigate(['/']);
        }, (err) => {
            this.toastr.error(err.error.localizedMessage);
        });
    }

    /*
     * resetPassword is used to reset your password
     */
    resetPassword(value) {
        this.firebaseAuth.sendPasswordResetEmail(value.email)
            .then(value => {
                this.toastr.success('A password reset link has been sent to this email.');
                this.router.navigate(['/session/login']);
            })
            .catch(err => {
                this.toastr.error(err.message);
            });
    }


    /*
     * resetPasswordV2 is used to reset your password
     */
    resetPasswordV2(value) {
        this.firebaseAuth.sendPasswordResetEmail(value.email)
            .then(value => {
                this.toastr.success('A password reset link has been sent to this email.');
                this.router.navigate(['/session/loginV2']);
            })
            .catch(err => {
                this.toastr.error(err.message);
            });
    }

    /*
     * logOut function is used to sign out
     */
    logOut() {
        localStorage.removeItem('userProfile');
        this.isLoggedIn = false;
        this.toastr.success('Successfully logged out!');
        this.router.navigate(['/session/login']);
    }
}
