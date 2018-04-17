import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an intem';
  goalText: string = '';
  goals = [];

  // create private var to use the DataService service
  constructor(private _data: DataService) { }

  // after the component is created
  // create an instance of the DataService service through dependency injection
  ngOnInit() {

    // get the response from the service
    this._data.goal.subscribe(response => this.goals = response);

    this.itemCount = this.goals.length;

    this._data.changeGoal(this.goals);
  }

  addItem() {
    if (this.goalText.length > 3) {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
    }
    else {
      alert('Input error: please enter at least four characters.');
    }
    
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
