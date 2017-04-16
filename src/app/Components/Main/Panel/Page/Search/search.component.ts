import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchModel } from './Model/search.model';

import { SearchService } from './Service/search.service';

@Component({
    selector: 'search',
    templateUrl: 'search.template.html'
})
export class SearchComponent implements OnInit {
    private result: string;
    private routeSubscribe: any;
    private searchList: Array<SearchModel>;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _searchService: SearchService
    ) {
        this.searchList = new Array<SearchModel>();
        this._searchService.getSearchList().subscribe(data => { this.searchList = data; });
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