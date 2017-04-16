import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'search',
    templateUrl: 'search.template.html'
})
export class SearchComponent implements OnInit {
    private result: string;
    private routeSubscribe: any;

    constructor(
        private _activatedRoute: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.routeSubscribe = this._activatedRoute.params.subscribe(params => {
            this.result = params['text'];
        });
    }

    ngOnDestroy() {
        this.routeSubscribe.unsubscribe();
    }
}