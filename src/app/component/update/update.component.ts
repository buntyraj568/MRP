import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  model: any = {}

  constructor() { }

  ngOnInit(): void {
  }
 update() {
    console.log(this.model)
  }
}
