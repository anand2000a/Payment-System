import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router:Router,private apiService:ApiService, private authService:AuthService) {
    
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  onLogin(form: FormGroup){
    this.apiService.ApiPost("http://localhost:8081/authenticate",{
      "username": this.loginForm.controls.username.value,
      "password": this.loginForm.controls.password.value
    }).subscribe((x:any)=>{
        localStorage.setItem("customer", x.customer)
        localStorage.setItem("token", x.jwt);
        this.authService.loggedIn = true;
    })
}

}
