import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flour',
  templateUrl: './flour.component.html',
  styleUrls: ['./flour.component.scss']
})
export class FlourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productItem = [
    {
      name: "Whole Wheat",
      image: "/assets/product/flours/f1.png"
    },
    {
      name: "Fresh Ragi",
      image: "/assets/product/flours/f2.png"
    },
    {
      name: "Chakki Fresh",
      image: "/assets/product/flours/f3.jpg"
    },
    {
      name: "Fresh Ragi",
      image: "/assets/product/flours/f4.jpg"
    }
  ]


}
