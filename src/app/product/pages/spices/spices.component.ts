import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.scss']
})
export class SpicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  productItem = [
    {
      name: "Chilli Powder",
      image: "/assets/product/spices/z1.png"
    },
    {
      name: "Turmeric Powder",
      image: "/assets/product/spices/z2.png"
    },
    {
      name: "Cumin Powder",
      image: "/assets/product/spices/z3.png"
    },
    {
      name: "Pepper Rasam POwder",
      image: "/assets/product/spices/z4.png"
    },
    {
      name: "Fish Fry Masala",
      image: "/assets/product/spices/z5.png"
    },
    {
      name: "Mutton Masala",
      image: "/assets/product/spices/z6.png"
    },
    {
      name: "Idly Podi Masala",
      image: "/assets/product/spices/z7.png"
    },
    {
      name: "Sambar Powder",
      image: "/assets/product/spices/z8.png"
    },
    {
      name: "Chicken 65 Masala",
      image: "/assets/product/spices/z9.png"
    },
    {
      name: "Garam Masala Powder",
      image: "/assets/product/spices/z10.png"
    },
    {
      name: "Fenugreen Powder",
      image: "/assets/product/spices/z11.png"
    },
    {
      name: "Garlic Powder",
      image: "/assets/product/spices/z12.png"
    },
    {
      name: "Muth Whole",
      image: "/assets/product/spices/z13.png"
    },
    {
      name: "Oily Toor Dal",
      image: "/assets/product/spices/z14.png"
    },
    {
      name: "Orange Rajma",
      image: "/assets/product/spices/z15.png"
    },
    {
      name: "Rajma",
      image: "/assets/product/spices/z16.png"
    },
    {
      name: "Red Chana",
      image: "/assets/product/spices/z17.png"
    },
    {
      name: "Red Masoor Dal",
      image: "/assets/product/spices/z18.png"
    },
    {
      name: "Toor Dal",
      image: "/assets/product/spices/z19.png"
    },
    {
      name: "Vaal",
      image: "/assets/product/spices/z20.png"
    },
    {
      name: "White Urad Gota",
      image: "/assets/product/spices/z21.png"
    }
  ]

}
