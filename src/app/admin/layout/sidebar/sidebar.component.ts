import { Component, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  token: any;
  menuItems: any;

  constructor() { }

  ngOnInit(): void {
    this.getRole();
  }

  getRole() {

    this.token = localStorage.getItem('role_id');
    if (this.token == 2) {
      this.menuItems = [
        { path: '/admin/dashboard', title: 'Dashboard', icon: 'fa fa-th' },
        { path: '/admin/order', title: 'My Orders', icon: 'fa fa-credit-card' },
        { path: '/admin/profile', title: 'Products', icon: 'fa fa-credit-card' },
        { path: '/admin/profile', title: 'Stock', icon: 'fa fa-credit-card' },
        { path: '/admin/profile', title: 'Payments', icon: 'fa fa-credit-card' },
        { path: '/admin/Logout', title: 'Track Shipments', icon: 'fa fa-frown-o' },
        { path: '/admin/profile', title: 'Payment History', icon: 'fa fa-credit-card' },
        { path: '/admin/Logout', title: 'Order History', icon: 'fa fa-frown-o' },
        { path: '/admin/profile', title: 'Help', icon: 'fa fa-credit-card' },
        { path: '/admin/Logout', title: 'Profile', icon: 'fa fa-frown-o' },
        { path: '/admin/Logout', title: 'Logout', icon: 'fa fa-frown-o' }
      ];
    }
    else if (this.token == 3) {
      this.menuItems = [
        { path: '/admin/order', title: 'My Order', icon: 'fa fa-th' },
        { path: '/admin/profile', title: 'My Profile', icon: 'fa fa-credit-card' },
        { path: '/admin/profile', title: 'My Rewards', icon: 'fa fa-credit-card' },
        { path: '/admin/profile', title: 'Order History', icon: 'fa fa-credit-card' },
        { path: '/admin/profile', title: 'Payment History', icon: 'fa fa-credit-card' },
        { path: '/admin/payment/', title: 'Help', icon: 'fa fa-braille' },
        { path: '/admin/Logout', title: 'Logout', icon: 'fa fa-frown-o' }
      ];
    }
    else if (this.token == 4) {
      this.menuItems = [
        { path: '/admin/dashboard', title: 'Dashboard', icon: 'bi bi-grid' },
        { path: '/admin/order', title: 'Orders Views', icon: 'fa fa-th' },
        { path: '/admin/products', title: 'Product Views', icon: 'fa fa-bookmark' },
        { path: '/admin/stock', title: 'Stock View', icon: 'fa fa-bookmark' },
        { path: '/admin/products', title: 'Order History', icon: 'fa fa-bookmark' },
        { path: '/admin/payment', title: 'Payment History', icon: 'fa fa-braille' },
        { path: '/admin/paymet/', title: 'Transaction Logs', icon: 'fa fa-braille' },
        { path: '/admin/warehouse/', title: 'My Warehouse', icon: 'fa fa-braille' },
        { path: '/admin/payment/', title: 'Help', icon: 'fa fa-braille' },
        { path: '/admin/profile', title: 'Profile', icon: 'fa fa-credit-card' },
        { path: '/admin/Logout', title: 'Logout', icon: 'fa fa-frown-o' }
      ];
    }
    else if (this.token == 5) {
      this.menuItems = [
        { path: '/admin/dashboard', title: 'Dashboard', icon: 'bi bi-grid' },
        { path: '/admin/order', title: 'My Warehouse', icon: 'fa fa-th' },
        { path: '/admin/products', title: 'Export Documents', icon: 'fa fa-bookmark' },
        { path: '/admin/stock', title: 'Shipment Status', icon: 'fa fa-bookmark' },
        { path: '/admin/products', title: 'Payments', icon: 'fa fa-bookmark' },
        { path: '/admin/payment', title: 'Track Shipments', icon: 'fa fa-braille' },
        { path: '/admin/paymet/', title: 'Payment History', icon: 'fa fa-braille' },
        { path: '/admin/payment/', title: 'Help', icon: 'fa fa-braille' },
        { path: '/admin/profile', title: 'Profile', icon: 'fa fa-credit-card' },
        { path: '/admin/Logout', title: 'Logout', icon: 'fa fa-frown-o' }
      ];
    }
    else if (this.token == 6) {
      this.menuItems = [
        { path: '/admin/dashboard', title: 'Dashboard', icon: 'bi bi-grid' },
        { path: '/admin/order', title: 'My Orders', icon: 'fa fa-th' },
        { path: '/admin/products', title: 'Products', icon: 'fa fa-bookmark' },
        { path: '/admin/stock', title: 'Stock', icon: 'fa fa-bookmark' },
        { path: '/admin/products', title: 'Purchase Req', icon: 'fa fa-bookmark' },
        { path: '/admin/payment', title: 'Purchase Orders', icon: 'fa fa-braille' },
        { path: '/admin/paymet/', title: 'Track Shipment', icon: 'fa fa-braille' },
        { path: '/admin/warehouse/', title: 'Payment History', icon: 'fa fa-braille' },
        { path: '/admin/warehouse/', title: 'Order History', icon: 'fa fa-braille' },
        { path: '/admin/payment/', title: 'Help', icon: 'fa fa-braille' },
        { path: '/admin/profile', title: 'Profile', icon: 'fa fa-credit-card' },
        { path: '/admin/Logout', title: 'Logout', icon: 'fa fa-frown-o' }
      ];
    }
    else {
      this.menuItems = [
        { path: '/admin/dashboard', title: 'Dashboard', icon: 'bi bi-grid' },
        { path: '/admin/order', title: 'Orders Views', icon: 'fa fa-th' },
        { path: '/admin/products', title: 'Product Views', icon: 'fa fa-bookmark' },
        { path: '/admin/stock', title: 'Stock View', icon: 'fa fa-bookmark' },
        { path: '/admin/products', title: 'Order History', icon: 'fa fa-bookmark' },
        { path: '/admin/payment', title: 'Payment History', icon: 'fa fa-braille' },
        { path: '/admin/paymet/', title: 'Transaction Logs', icon: 'fa fa-braille' },
        { path: '/admin/warehouse/', title: 'My Warehouse', icon: 'fa fa-braille' },
        { path: '/admin/payment/', title: 'Help', icon: 'fa fa-braille' },
        { path: '/admin/profile', title: 'Profile', icon: 'fa fa-credit-card' },
        { path: '/admin/Logout', title: 'Logout', icon: 'fa fa-frown-o' }
      ];
    }
  }


}
