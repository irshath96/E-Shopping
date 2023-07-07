import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.scss']
})
export class RiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productItem = [
    {
      name: "Black Eye Beans (CHAWLI)",
      image: "/assets/product/rice/r1.png"
    },
    {
      name: "Black Urad Dal",
      image: "/assets/product/rice/r2.jpg"
    },
    {
      name: "Black Urad whole",
      image: "/assets/product/rice/r3.png"
    },
    {
      name: "Chana Dal",
      image: "/assets/product/rice/r4.jpg"
    },
    {
      name: "Black Urad whole",
      image: "/assets/product/rice/r5.png"
    },
    {
      name: "Chana Dal",
      image: "/assets/product/rice/r6.png"
    }
  ]

}
