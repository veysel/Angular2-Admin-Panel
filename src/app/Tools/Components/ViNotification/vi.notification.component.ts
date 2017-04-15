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
        setTimeout(x => { this.close(); }, 1000);
    }

    public showNotification(titleText: string, contentText: string) {
        this.notificationState = true;
        this.titleText = titleText;
        this.contentText = contentText;
        this.autoClose();
    }
}