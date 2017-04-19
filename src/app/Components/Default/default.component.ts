import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from '../Common/Service/common.service';

@Component({
    selector: 'default',
    templateUrl: 'default.template.html'
})
export class DefaultComponent implements OnInit {
    constructor(
        private _commonService: CommonService,
        private _router: Router
    ) { }

    ngOnInit() {
        this._router.navigate(["/main/panel"]);
    }

}