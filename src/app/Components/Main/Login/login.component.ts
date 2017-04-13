import { Component, OnInit } from '@angular/core';

import { UserModel } from './Model/user.model';

import { UserService } from './Service/user.service';

@Component({
    selector: 'login',
    templateUrl: 'login.template.html'
})
export class LoginComponent implements OnInit {
    public userList: Array<UserModel>;

    constructor(
        private _userService: UserService
    ) {
        this.userList = new Array<UserModel>();
    }

    ngOnInit() {
        this._userService.getUserList().subscribe(res => { this.userList = res.list; });
    }

}