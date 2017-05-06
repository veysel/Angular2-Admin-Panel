import { Component, OnInit } from '@angular/core';

import { ViNotificationService } from './Service/vi.notification.service';

@Component({
    selector: 'vi-notification',
    templateUrl: './vi.notification.template.html',
    styleUrls: ['./vi.notification.style.css']
})

export class ViNotificationComponent implements OnInit {
    private contentText: string;
    private notificationState: boolean;

    constructor(
        private _viNotificationService: ViNotificationService
    ) {
        this.notificationState = this._viNotificationService.getNotificationState();
        this.contentText = this._viNotificationService.getContentText();
    }

    ngOnInit() {
    }

    public showNotification(contentText: string) {
        this.notificationState = true;
        this.contentText = contentText;
    }
}