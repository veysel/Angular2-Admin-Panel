import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../../../Storage/Service/storage.service';

import { UserModel } from '../../../Login/Model/user.model';

@Component({
    selector: 'menu-left',
    templateUrl: 'menu.left.template.html'
})
export class MenuLeftComponent implements OnInit {
    private userModel: UserModel;
    private searchText = "";

    constructor(
        private _router: Router,
        private _storageService: StorageService
    ) {

    }

    ngOnInit() {
        this.userModel = this._storageService.getStorage();
    }

    private goToSearch() {
        this._router.navigateByUrl('/main/panel/page/search/' + this.searchText);
    }
}