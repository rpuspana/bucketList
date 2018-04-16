// access to the route parameters
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // gets called when the component is loaded
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
   }

   // called after loading
  ngOnInit() {
  }

}
