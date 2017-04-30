import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'menu-left',
    templateUrl: 'menu.left.template.html'
})
export class MenuLeftComponent implements OnInit {
    private searchText = "";

    constructor(
        private _router: Router,
    ) { }

    ngOnInit() {

    }

    private goToSearch() {
        this._router.navigateByUrl('/main/panel/page/search/' + this.searchText);
    }
}