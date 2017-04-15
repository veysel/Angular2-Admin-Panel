import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vi-notification',
    templateUrl: './vi.notification.template.html'
})

export class ViNotificationComponent implements OnInit {
    private contentText: string;
    private titleText: string;
    private notificationState: boolean;

    constructor() {
        this.close();
    }

    ngOnInit() {

    }

    private close() {
        this.notificationState = false;
        this.titleText = "";
        this.contentText = "";
    }

    private autoClose() {
        setTimeout(x => { this.close(); }, 1000);
    }

    public showNotification(titleText: string, contentText: string) {
        this.notificationState = true;
        this.titleText = titleText;
        this.contentText = contentText;
        this.autoClose();
    }
}