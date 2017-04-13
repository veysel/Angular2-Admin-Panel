import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

    public getUserListApiUrl() {
        return "https://api.myjson.com/bins/q2i23";
    }

}