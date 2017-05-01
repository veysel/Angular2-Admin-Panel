import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: 'register.template.html'
})
export class RegisterComponent implements OnInit {
    constructor(
        private _router: Router
    ) {

    }

    ngOnInit() {

    }

}