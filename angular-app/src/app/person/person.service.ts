import { Injectable } from '@angular/core';
import { Http, Response, BaseRequestOptions } from '@angular/http';

import { CONFIG } from '../config';

let personsUrl = CONFIG.baseUrls.persons;

export class Person {
  id: number;
  name: string;
  surname: string;
  countryId: number;
  countryName:  string;
}

export class Country {
  id: number;
  name: string;
}

@Injectable()
export class PersonService {
  constructor(private http: Http) { 
  }

  getPerson(id: number) {
    let result = this.http
      .get(personsUrl + "/" + id)
      .map((response: Response) => <Person>response.json());
      return result;
  }

  getPersons() {
    let result = this.http
      .get(personsUrl)
      .map((response: Response) => <Person[]>response.json());
      return result;
  }

  postPerson(person: Person) {
    let result = this.http
    .post(personsUrl, person)
    .map((response : Response) => response.json());

    return result;
  }

  putPerson(person: Person) {
    let result = this.http
    .put(personsUrl + "/" + person.id, person)
    .map((response : Response) => response.json());

    return result;
  }

  getCountries() {
    let result = this.http
      .get(personsUrl + '/countries')
      .map((response: Response) => <Country[]>response.json());
      return result;
  }
}
