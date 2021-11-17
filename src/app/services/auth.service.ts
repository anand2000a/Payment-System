import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{
    loggedIn:boolean = false;

    constructor(private http:HttpClient){
        
    }

    isLoggedIn() {
        if(localStorage.getItem('token') == null)
            this.loggedIn = false;
    }

    

}