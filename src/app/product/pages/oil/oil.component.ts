import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productItem = [
    {
      name: "Coconut Oil",
      image: "/assets/product/oils/o1.png"
    },
    {
      name: "Coconut Oil",
      image: "/assets/product/oils/o2.png"
    },
    {
      name: "Coconut Oil",
      image: "/assets/product/oils/o3.png"
    },
    {
      name: "Mustard Oil",
      image: "/assets/product/oils/o4.png"
    },
    {
      name: "Mustard Oil",
      image: "/assets/product/oils/o5.png"
    },
    {
      name: "Mustard Oil",
      image: "/assets/product/oils/o6.png"
    },
    {
      name: "Sunflower Oil",
      image: "/assets/product/oils/o7.png"
    },
    {
      name: "Sunflower Oil",
      image: "/assets/product/oils/o8.png"
    }
  ]

}
