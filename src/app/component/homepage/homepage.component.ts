import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  model: any = {}
  constructor() { }

  ngOnInit(): void {
  }
  
  homepage() {
    console.log(this.model)
  }
}
