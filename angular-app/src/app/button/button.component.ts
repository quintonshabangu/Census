import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserProfileService } from '../login/userProfile.service';

@Component({
  moduleId: module.id,
  selector: 'story-character',
  template: `<div class="container">
             <button class="btn btn-primary" (click)="btnClicked('I have been clicked')">{{text}}</button>
             </div>`
})
export class ButtonComponent implements OnInit {
  constructor (private route: ActivatedRoute){

  }

  @Input() text: string;
  @Output() clicked = new EventEmitter<string>();

  ngOnInit() {
    this.route
        .params
        .map(params => params['text'])
        .do(text => this.text = text)
        .subscribe(text => {
            this.text = text;
        });
  }

  btnClicked(text: string) {
    this.text = text;
    this.clicked.emit(this.text);
  }
}