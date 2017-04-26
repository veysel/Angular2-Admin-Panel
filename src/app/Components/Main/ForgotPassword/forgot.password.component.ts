import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../Storage/Service/storage.service';

@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot.password.template.html'
})
export class ForgotPasswordComponent implements OnInit {
    constructor(
        private _storageService: StorageService,
        private _router: Router
    ) {

    }

    ngOnInit() {
        if (this._storageService.checkStorage())
            this._router.navigate(["/main/panel"]);
    }

}