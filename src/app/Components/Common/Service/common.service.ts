import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

    constructor(
    ) { }

    public getUserListApiUrl() {
        return "https://api.myjson.com/bins/zo8tf";
    }

    public getSearchListApiUrl() {
        return "https://api.myjson.com/bins/g7nfz";
    }

}