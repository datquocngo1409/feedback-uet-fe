import {Injectable} from '@angular/core';
import {ApiService} from '../api-service/api.service';
import {API} from '../apis-call/api.service';
import {ISubject} from '../../@pages/pages/subject/data/subject';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {

    constructor(private api: API) {
    }

    getList() {
      return this.api.getSubjectList();
    }
}
