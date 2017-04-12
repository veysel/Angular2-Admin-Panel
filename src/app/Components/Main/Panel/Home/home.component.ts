import { Component, OnInit } from '@angular/core';

import { TestService } from 'app/Components/Common/Service/test.service';

import { Test2Model } from 'app/Components/Common/Model/test2.model';

@Component({
    selector: 'home',
    templateUrl: 'home.template.html'
})
export class HomeComponent implements OnInit {
    public testText = "";


    constructor(
        private _testService: TestService
    ) { }

    ngOnInit() { }

}