// access to the route parameters
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // static var. Non istance-specific
  goals: any;

  // gets called when the component is loaded
  // properties
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
   }

   // called after component was created
  ngOnInit() {

    // get the response from the service
    this._data.goal.subscribe(response => this.goals = response);
  }

  semdMeHome() {
    // path set up in app.routing.module.ts
    this.router.navigate(['']);
  }
}
