import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { CommonService } from '../../../Common/Service/common.service';

@Injectable()
export class UserService {
    constructor(
        private _http: Http,
        private _commonService: CommonService
    ) {

    }

    public getUserList() {
        return this._http.get(this._commonService.getUserListApiUrl()).map(x => x.json());
    }

}