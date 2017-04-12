import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

    private testApiUrl = "http://api.myjson.com/bins/7luwb";

    constructor(private _http: Http) {
    }

    public getTestData1() {
        return this._http.get("test").map(x => x.json());
    }

    public getTestData2(id) {
        let params: URLSearchParams = new URLSearchParams();
        params.set("id", id);

        return this._http.get("test", { search: params }).map(x => x.json());
    }

    public postTestData(form) {
        return this._http.post("test", form).map(x => x.json());
    }

    public getApiData() {
        return this._http.get("http://api.myjson.com/bins/7luwb").map(x => x.json());
        //return "deneme";
    }

}