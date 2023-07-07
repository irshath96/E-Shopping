import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  user: any;

  constructor(private route: Router, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      this.user = this.userDetails.find((mail: any) => {
        return mail.email === this.loginForm.value.email && this.loginForm.value.password
      });
      if (this.user) {
        alert("Login Successfull");
        //  localStorage.setItem('userDetails',JSON.stringify(this.user));
        localStorage.setItem('role_id', this.user.role_id);
        localStorage.setItem('role', this.user.role);
        localStorage.setItem('fname', this.user.firstName);
        localStorage.setItem('lname', this.user.lastName);
        localStorage.setItem('address', this.user.address1);
        localStorage.setItem('phone', this.user.number);
        // const local = localStorage.getItem('userDetails');
        // console.log(local);
        this.loginForm.reset();
        this.route.navigate(['/home']);
      } else {
        alert("User not Found");
        this.route.navigate(['/register']);
      }
    }
  }


  // ======================================== //

  userDetails = [
    {
      "firstName": "Syed",
      "lastName": "Faziyullah",
      "city": "1",
      "country": "1",
      "address1": "1/12 west street, Texas",
      "address2": "we",
      "address3": "ed",
      "address4": "sd",
      "email": "admin@gmail.com",
      "number": 9876655441,
      "password": "admin",
      "role": "admin",
      "isActive": true,
      "id": 1,
      "role_id": 1
    },
    {
      "firstName": "Noorul",
      "lastName": "Siraj",
      "city": "1",
      "country": "1",
      "address1": "1/12 west street, Kumbakonam",
      "address2": "we",
      "address3": "ed",
      "address4": "sd",
      "email": "store@gmail.com",
      "number": 9876655441,
      "password": "store",
      "role": "storeUser",
      "isActive": true,
      "id": 1,
      "role_id": 2
    },
    {
      "firstName": "Mohamed",
      "lastName": "Irshath",
      "city": "1",
      "country": "1",
      "address1": "1/12 west street, mayiladuthurai",
      "address2": "we",
      "address3": "as",
      "address4": "sd",
      "email": "user@gmail.com",
      "number": 9876543210,
      "password": "user",
      "role": "user",
      "isActive": true,
      "id": 1,
      "role_id": 3
    },
    {
      "firstName": "Ijas",
      "lastName": "Khan",
      "city": "1",
      "country": "1",
      "address1": "1/12 west street, athiramapatinam",
      "address2": "we",
      "address3": "as",
      "address4": "sd",
      "email": "supplier@gmail.com",
      "number": 9876543210,
      "password": "supplier",
      "role": "supplier",
      "isActive": true,
      "id": 1,
      "role_id": 4
    },
    {
      "firstName": "Sheik",
      "lastName": "Abdullah",
      "city": "1",
      "country": "1",
      "address1": "1/12 west street, trichy",
      "address2": "we",
      "address3": "as",
      "address4": "sd",
      "email": "shipment@gmail.com",
      "number": 9876543210,
      "password": "shipment",
      "role": "shipment",
      "isActive": true,
      "id": 1,
      "role_id": 5
    },
    {
      "firstName": "Mohamed",
      "lastName": "Azarudeen",
      "city": "1",
      "country": "1",
      "address1": "1/12 west street, chennai",
      "address2": "we",
      "address3": "as",
      "address4": "sd",
      "email": "warehouse@gmail.com",
      "number": 9876543210,
      "password": "warehouse",
      "role": "warehouse",
      "isActive": true,
      "id": 1,
      "role_id": 6
    }
  ]

}
