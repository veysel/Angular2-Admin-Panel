import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'menu-top',
    templateUrl: 'menu.top.template.html'
})
export class MenuTopComponent implements OnInit {
    public searchText = "";

    constructor(
        private _router: Router
    ) { }

    ngOnInit() { }

    private goToSearch() {
        this._router.navigate(['/main/panel/page/search', this.searchText]);
    }
}