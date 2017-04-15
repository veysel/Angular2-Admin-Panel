import { Component, OnInit } from '@angular/core';

import { CommonService } from '../Common/Service/common.service';

@Component({
    selector: 'default',
    templateUrl: 'default.template.html'
})
export class DefaultComponent implements OnInit {
    constructor(
        private _commonService: CommonService
    ) { }

    ngOnInit() { }

    private showNotification() {
        this._commonService.showNotification("Test Başlık", "Test İçerik");
    }

}