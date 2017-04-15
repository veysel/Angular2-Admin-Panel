import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vi-notification',
    templateUrl: './vi.notification.template.html'
})

export class ViNotificationComponent implements OnInit {
    private contentText = "";
    private titleText = "";
    private notificationState = false;

    constructor() { }

    ngOnInit() {

    }

    private close() {
        this.notificationState = false;
    }

    private autoClose() {
        setTimeout(this.close(), 2000);
    }

    public showNotification(titleText: string, contentText: string) {
        this.titleText = titleText;
        this.contentText = contentText;
        this.notificationState = true;
        this.autoClose();
    }
}