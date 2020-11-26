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

    signup(data) {
        return this.http.post(environment.apiUrl + `signup`, data);
    }

    signupTeacher(data) {
        return this.http.post(environment.apiUrl + `teacher-signup`, data);
    }

    getSubjectList() {
        return this.http.get(environment.apiUrl + `subject`, {});
    }

    getSubjectById(id) {
        return this.http.get(environment.apiUrl + `subject/` + id, {});
    }

    createSubject(data) {
        return this.http.post(environment.apiUrl + `subject`, data);
    }

    deleteSubject(id) {
        return this.http.delete(environment.apiUrl + `subject/` + id, {});
    }

    rateSubject(studentId, subjectId, point) {
        return this.http.post(environment.apiUrl + `rating-subject/rate`, {
            'studentId': studentId,
            'subjectId': subjectId,
            'point': point
        });
    }

    rateTeacher(studentId, teacherId, point) {
        return this.http.post(environment.apiUrl + `rating-teacher/rate`, {
            'studentId': studentId,
            'teacherId': teacherId,
            'point': point
        });
    }

    getRatingSubjectBySubjectId(subjectId) {
        return this.http.get(environment.apiUrl + `rating-subject/by-subject/` + subjectId, {});
    }

    getRatingTeacherByTeacherId(teacherId) {
        return this.http.get(environment.apiUrl + `rating-teacher/by-teacher/` + teacherId, {});
    }

    getStudentFull() {
        return this.http.get(environment.apiUrl + `student/full`, {});
    }

    getStudentByIdFull(id) {
        return this.http.get(environment.apiUrl + `student/full/` + id, {});
    }

    getUserById(id) {
        return this.http.get(environment.apiUrl + `user/` + id, {});
    }

    updateUser(id, data) {
        return this.http.patch(environment.apiUrl + `user/` + id, data);
    }

    deleteStudent(id) {
        return this.http.delete(environment.apiUrl + `student/` + id, {});
    }

    getTeacherFull() {
        return this.http.get(environment.apiUrl + `teacher/full`, {});
    }

    getTeacher() {
        return this.http.get(environment.apiUrl + `teacher`, {});
    }

    getTeacherByIdFull(id) {
        return this.http.get(environment.apiUrl + `teacher/full/` + id, {});
    }

    deleteTeacher(id) {
        return this.http.delete(environment.apiUrl + `teacher/` + id, {});
    }

    getCommentById(id) {
        return this.http.get(environment.apiUrl + `comment/` + id, {});
    }

    getCommentBySubjectId(id) {
        return this.http.get(environment.apiUrl + `comment/bySubjectId/` + id, {});
    }

    comment(data) {
        return this.http.post(environment.apiUrl + `comment`, data);
    }

    repComment(data, parentId) {
        return this.http.post(environment.apiUrl + `comment/rep/` + parentId, data);
    }
}
