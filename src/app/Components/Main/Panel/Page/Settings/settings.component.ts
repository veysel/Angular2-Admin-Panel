import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../../Login/Model/user.model';

import { UserService } from '../../../Login/Service/user.service';
import { StorageService } from '../../../../Storage/Service/storage.service';

@Component({
    selector: 'settings',
    templateUrl: 'settings.template.html'
})
export class SettingsComponent implements OnInit {
    private userList: Array<UserModel>;
    private loginUser: UserModel;

    constructor(
        private _userService: UserService,
        private _storageService: StorageService
    ) {
        this.userList = new Array<UserModel>();
        this.loginUser = new UserModel();
    }

    ngOnInit() {
        this._userService.getUserList().subscribe(res => { this.userList = res.list; });
        this.loginUser = this._storageService.getStorage();
    }
}