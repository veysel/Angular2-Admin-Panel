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
    private resultList: Array<SearchModel>;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _searchService: SearchService
    ) {
        this.resultList = new Array<SearchModel>();
        this.searchList = new Array<SearchModel>();
        this._searchService.getSearchList().subscribe(data => { this.searchList = data; });
    }

    ngOnInit() {
        this.routeSubscribe = this._activatedRoute.params.subscribe(params => {
            this.result = params['text'];
            this.search(this.result);
        });
    }

    ngOnDestroy() {
        this.routeSubscribe.unsubscribe();
    }

    private search(searchText: string) {
        this.resultList = this.searchList.filter(x => x.SearchText.toLowerCase().match(searchText.toLowerCase()));
    }


}