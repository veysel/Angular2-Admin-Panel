import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

// import { ViNotificationComponent } from '../../../Tools/Components/ViNotification/vi.notification.component';

@Injectable()
export class CommonService {

    constructor(
        // private _viNotificationComponent: ViNotificationComponent
    ) { }

    public getUserListApiUrl() {
        return "https://api.myjson.com/bins/zo8tf";
    }

    public showNotification(titleText: string, contentText: string) {
        // this._viNotificationComponent.showNotification(titleText, contentText);
    }

}