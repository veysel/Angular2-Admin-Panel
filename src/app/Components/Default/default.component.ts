import { Component, OnInit } from '@angular/core';

import { CommonService } from '../Common/Service/common.service';
import { ViNotificationComponent } from '../../Tools/Components/ViNotification/vi.notification.component';

@Component({
    selector: 'default',
    templateUrl: 'default.template.html',
    providers: [ViNotificationComponent]
})
export class DefaultComponent implements OnInit {
    constructor(
        private _commonService: CommonService,
        private _viNotificationComponent: ViNotificationComponent
    ) { }

    ngOnInit() { }

    private showNotification() {
        // this._commonService.showNotification("Test Başlık", "Test İçerik");
        this._viNotificationComponent.showNotification("Test Başlık", "Test İçerik");
    }

}