// add-session.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/Models/session.model';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {
  sessionform!:FormGroup
  session= {
    id: 0,
    name: "",
    startTime: new Date(),
    endTime: new Date(),
    description: "",
    status: true
  }
 @Output() addformEvent=new EventEmitter<Session>();
constructor(private acr : ActivatedRoute){
}
ngOnInit(): void {
this.sessionform=new FormGroup({
name:new FormControl(this.session.name,Validators.required),
startTime: new FormControl(this.session.startTime.toISOString(), Validators.required),
endTime: new FormControl(this.session.endTime.toISOString(), Validators.required),
description:new FormControl(this.session.description,[Validators.required, Validators.minLength(10)])
})
}}
