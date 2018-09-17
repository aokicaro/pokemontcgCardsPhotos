import { Component } from "@angular/core";

import {pokemonService} from "../core/pokemon.service";

import { SearchBar } from "ui/search-bar";
import { Observable } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent {

    public cards = [];

    constructor(private pokemonService: pokemonService) {

    }


    onSubmit(args) {
        this.cards = []
        let searchBar = <SearchBar>args.object;
        this.pokemonService.getCards(searchBar.text).subscribe(
            res => {
                this.cards  = res['cards'];
            }
        )
    }

}
