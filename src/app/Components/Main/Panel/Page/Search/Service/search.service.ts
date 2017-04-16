import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { CommonService } from '../../../../../Common/Service/common.service';

@Injectable()
export class SearchService {
    constructor(
        private _http: Http,
        private _commonService: CommonService
    ) {

    }

    public getSearchList() {
        return this._http.get(this._commonService.getSearchListApiUrl()).map(x => x.json());
    }

}