import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm ! : FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',Validators.required],
      phone : ['',Validators.required],
      password : ['',Validators.required]
      //isActive : ['false'],
      //role : [''],
      //roleId : ['']
    })
  }

  registerData() {
    this.http.post<any>("./assets/data/data.json/userDetails",this.registerForm.value).subscribe(res =>{
      if(this.registerForm.valid) {
        alert("Register Successfully");
      //  localStorage.setItem('userDetails', JSON.stringify(this.registerForm));
        this.registerForm.reset();
        this.route.navigate(['login']);
      }
    }, err => {
      alert("Something Went Wrong");
    })

  }

}
