import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu-left',
    templateUrl: 'menu.left.template.html'
})
export class MenuLeftComponent implements OnInit {
    private percentage: number;

    constructor() { }

    ngOnInit() {
        this.percentage = 38;
    }
}