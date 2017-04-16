import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'search',
    templateUrl: 'search.template.html'
})
export class SearchComponent implements OnInit {
    private result: string;

    constructor(
        private _activatedRoute: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this._activatedRoute.params.subscribe(params => {
            this.result = params['text'];
        });
    }
}