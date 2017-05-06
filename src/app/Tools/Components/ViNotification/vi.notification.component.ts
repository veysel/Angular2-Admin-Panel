import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vi-notification',
    templateUrl: './vi.notification.template.html',
    styleUrls: ['./vi.notification.style.css']
})

export class ViNotificationComponent implements OnInit {
    private contentText: string;
    private notificationState: boolean;

    ngOnInit() {
        this.notificationState = true;
        this.contentText = "Kayıt Başarılı";
    }

    public showNotification(contentText: string) {
        this.notificationState = true;
        this.contentText = contentText;
    }
}