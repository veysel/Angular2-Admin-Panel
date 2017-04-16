import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu-top',
    templateUrl: 'menu.top.template.html'
})
export class MenuTopComponent implements OnInit {
    public searchText = "";

    constructor() { }

    ngOnInit() { }
}