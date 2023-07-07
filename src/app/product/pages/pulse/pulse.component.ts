import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulse',
  templateUrl: './pulse.component.html',
  styleUrls: ['./pulse.component.scss']
})
export class PulseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productItem = [
    {
      name: "Anardana Seeds",
      image: "/assets/product/pulses/p1.png"
    },
    {
      name: "Bay Leaves (Tej Patta)",
      image: "/assets/product/pulses/p2.png"
    },
    {
      name: "Black Cardamom",
      image: "/assets/product/pulses/p3.png"
    },
    {
      name: "Black Elaichi Whole",
      image: "/assets/product/pulses/p4.png"
    },
    {
      name: "Black Peppercorns",
      image: "/assets/product/pulses/p5.png"
    },
    {
      name: "Black Salt Powder",
      image: "/assets/product/pulses/p6.png"
    },
    {
      name: "Black Sesame Seeds",
      image: "/assets/product/pulses/p7.png"
    },
    {
      name: "Carom Seeds",
      image: "/assets/product/pulses/p8.png"
    },
    {
      name: "Carom Seeds",
      image: "/assets/product/pulses/p9.png"
    },
    {
      name: "Charoli",
      image: "/assets/product/pulses/p10.png"
    },
    {
      name: "Chia Seeds",
      image: "/assets/product/pulses/p11.png"
    },
    {
      name: "cumin Seeds",
      image: "/assets/product/pulses/p12.png"
    },
    {
      name: "Muth Whole",
      image: "/assets/product/pulses/p13.png"
    },
    {
      name: "Oily Toor Dal",
      image: "/assets/product/pulses/p14.png"
    },
    {
      name: "Orange Rajma",
      image: "/assets/product/pulses/p15.png"
    },
    {
      name: "Rajma",
      image: "/assets/product/pulses/p16.png"
    },
    {
      name: "Red Chana",
      image: "/assets/product/pulses/p17.png"
    },
    {
      name: "Red Masoor Dal",
      image: "/assets/product/pulses/p18.png"
    },
    {
      name: "Toor Dal",
      image: "/assets/product/pulses/p19.png"
    },
    {
      name: "Vaal",
      image: "/assets/product/pulses/p20.png"
    },
    {
      name: "White Urad Gota",
      image: "/assets/product/pulses/p21.png"
    }
  ]

}
