import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../../../Storage/Service/storage.service';

import { UserModel } from '../../../Login/Model/user.model';

@Component({
    selector: 'menu-top',
    templateUrl: 'menu.top.template.html'
})
export class MenuTopComponent implements OnInit {
    private userModel: UserModel;

    constructor(
        private _router: Router,
        private _storageService: StorageService
    ) {

    }

    ngOnInit() {
        this.userModel = this._storageService.getStorage();
    }

    private logout() {
        this._storageService.clearStorage();
        this._router.navigate(["/main/login"]);
    }
}