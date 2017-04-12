import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person, Country, PersonService } from './person.service';
import { UserProfileService } from '../login/userProfile.service';

@Component({
  moduleId: module.id,
  selector: 'story-character',
   templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  countries: Country[];
  selectedCountry : Country;
  countryReady : boolean;
  private id: any;
  public title: string;

  constructor(
    private personService: PersonService,
    private userProfileService: UserProfileService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (!this.person) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => {
          this.getPerson();
        });

        //getting countries
        this.personService.getCountries()
          .subscribe(response => {
              this.countries = response;
              this.selectedCountry = new Country();
          if (this.id === 0) {
            this.selectedCountry = this.countries[0];
          } else {
            this.selectedCountry.id = this.person.countryId;
            this.selectedCountry.name = this.person.name;
          }
          this.countryReady = true;
      });
    }

  }

  public postPerson() {
    this.person.countryId = this.selectedCountry.id;
    this.person.countryName = this.selectedCountry.name;

    if (this.id === 0){ // new person 
      this.personService.postPerson(this.person)
        .subscribe(response => this.gotoPersonList());
    }
    else {
      this.personService.putPerson(this.person)
        .subscribe(response => this.gotoPersonList());
    }
  }

  private getPerson() {
    if (this.id === 0) {
      this.title = "New Person";
      this.person = new Person();

    } 
    else {
      this.title = "Edit Person";
      this.personService.getPerson(this.id)
        .subscribe(person => this.savePerson(person));
    }
  }


  private gotoPersonList() {
    let route = ['/person'];
    this.router.navigate(route);
  }

  private savePerson(person: Person) {
    if (person) {
      this.person = person;
    } else {
      this.gotoPersonList();
    }
  }
}