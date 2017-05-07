import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vi-modals',
    templateUrl: './vi.modals.template.html'
})

export class ViModalsComponent implements OnInit {
    private modalsTitle: string;
    private modalsBody: string;

    constructor() { }

    ngOnInit() {
    }
}