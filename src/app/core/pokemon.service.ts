import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class pokemonService {

    constructor(
        private http: HttpClient) { }

    getCards(name) {
     return  this.http.get(`https://api.pokemontcg.io/v1/cards?name=${name}`);
    }

}