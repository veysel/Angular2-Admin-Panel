import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { UserModel } from '../../Main/Login/Model/user.model';

@Injectable()
export class StorageService {
    private loginDataName = "userLoginData";

    public setStorage(userModel: UserModel) {
        localStorage.setItem(this.loginDataName, JSON.stringify(userModel));
    }

    public getStorage() {
        return JSON.parse(localStorage.getItem(this.loginDataName));
    }

    public clearStorage() {
        localStorage.removeItem(this.loginDataName);
    }

    public checkStorage() {
        return this.getStorage() ? true : false;
    }

}