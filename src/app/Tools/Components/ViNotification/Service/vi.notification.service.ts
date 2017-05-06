import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ViNotificationService {
    private contentText: string;
    private notificationState: boolean;

    constructor() {
        this.notificationState = false;
        this.contentText = "";
    }

    public getContentText() {
        return this.contentText;
    }

    public getNotificationState() {
        return this.notificationState;
    }

}