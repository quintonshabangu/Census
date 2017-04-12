import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Person, PersonService } from './person.service';

@Component({
  moduleId: module.id,
  selector: 'story-characters',
   templateUrl: './person-list.component.html',
  styles: [`
    .characters {list-style-type: none;}
    *.characters li {padding: 4px;cursor: pointer;}
  `],
  providers: []
})
export class PersonListComponent implements OnInit {
  persons: Observable<Person[]>;
  constructor(private PersonService: PersonService) { }

  ngOnInit() {
    this.persons = this.PersonService.getPersons();
  }
}