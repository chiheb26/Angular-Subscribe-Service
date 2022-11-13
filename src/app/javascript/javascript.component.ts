import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers:[EnrollService]
})
export class JavascriptComponent {

  constructor(private enrollService: EnrollService) { }
  title="JavaScript";

  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title);
  }
}
