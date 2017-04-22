import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../../Login/Model/user.model';

import { UserService } from '../../../Login/Service/user.service';

@Component({
    selector: 'settings',
    templateUrl: 'settings.template.html'
})
export class SettingsComponent implements OnInit {
    private userList: Array<UserModel>;

    constructor(
        private _userService: UserService
    ) { }

    ngOnInit() {
        this._userService.getUserList().subscribe(res => { this.userList = res.list; });
    }
}