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

    public getData() {
        this._testService.getApiData().subscribe(x => {
            let tempModel: Test2Model = x;
            this.testText = tempModel.id + "\n";
            this.testText += tempModel.ad + "\n";
            this.testText += tempModel.sifre + "\n";
            this.testText += tempModel.durum + "\n";
            console.log(x);
        });
        //this.testText = this._testService.getApiData();
    }

}