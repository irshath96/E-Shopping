import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any;
  totalPrice: number = 2000;

  constructor() { }

  ngOnInit(): void {
  }

}
