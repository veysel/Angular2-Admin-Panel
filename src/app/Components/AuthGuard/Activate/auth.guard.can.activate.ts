import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from '../../Storage/Service/storage.service';

@Injectable()
export class AuthGuardCanActivate implements CanActivate {

    constructor(
        private _storageService: StorageService,
        private _router: Router
    ) { }

    canActivate() {
        if (this._storageService.checkStorage())
            return true;
        else
            this._router.navigate(["/main/login"]);
    }
}