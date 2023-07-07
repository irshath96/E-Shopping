import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.scss']
})
export class TeaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productItem = [
    {
      name: "Premium Tea",
      image: "/assets/product/teaCoffee/t1.png"
    },
    {
      name: "Green Tea",
      image: "/assets/product/teaCoffee/t2.png"
    },
    {
      name: "Premium Tea",
      image: "/assets/product/teaCoffee/t3.png"
    },
    {
      name: "Green Tea",
      image: "/assets/product/teaCoffee/t4.png"
    },
    {
      name: "Coffee",
      image: "/assets/product/teaCoffee/t5.png"
    },
    {
      name: "Green Tea",
      image: "/assets/product/teaCoffee/t6.png"
    }
  ]

}
