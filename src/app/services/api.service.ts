import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ApiService{
    constructor(private http:HttpClient){
    }

    ApiGet(url:string){
        let httpHeaders = new HttpHeaders();
        let token = localStorage.getItem("token")?localStorage.getItem("token")?.toString():'';
        if(token==null){
            httpHeaders =httpHeaders.append("Authorization",'')
        }
        else{
            httpHeaders =httpHeaders.append("Authorization",token);
        }
        
        return this.http.get(url,{headers:httpHeaders});
    }
    ApiPost(url:string,data:any){
        let httpHeaders = new HttpHeaders();
        let token = localStorage.getItem("token")?localStorage.getItem("token")?.toString():'';
        if(token==null){
            httpHeaders =httpHeaders.append("Authorization",'')
        }
        else{
            httpHeaders =httpHeaders.append("Authorization",token);
        }
        return this.http.post(url,data,{headers:httpHeaders});
    }

}