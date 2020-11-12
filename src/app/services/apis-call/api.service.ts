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

    getSubjectList() {
        return this.http.get(environment.apiUrl + `subject`, {});
    }

    getSubjectById(id) {
        return this.http.get(environment.apiUrl + `subject/` + id, {});
    }

    rateSubject(studentId, subjectId, point) {
        return this.http.post(environment.apiUrl + `rating-subject/rate`, {
            'studentId': studentId,
            'subjectId': subjectId,
            'point': point
        });
    }

    getRatingSubjectBySubjectId(subjectId) {
        return this.http.get(environment.apiUrl + `rating-subject/by-subject/` + subjectId, {});
    }
}
