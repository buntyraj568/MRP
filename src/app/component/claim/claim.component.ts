import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  model: any = {}

  constructor() { }

  ngOnInit(): void {
    
  }
  claim() {
    console.log(this.model)
  }

}
