import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class API {
    public token: String;

    constructor(private http: HttpClient) {

    }

    getToken() {
        return this.token;
    }

    setToken(token: String) {
        this.token = token;
    }

    removeToken() {
        this.token = null;
    }

    login(username: String, password: String) {
        return this.http.post(environment.apiUrl + `login`, {
            username: username,
            password: password
        });
    }
}
