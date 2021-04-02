import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http : HttpClient) { }
  
  getInvalidateDepot() {
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return  this.http.get(baseUrl + '/InvalidateList',{headers});
  }
  validIt(id:String){
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return  this.http.get(baseUrl + '/ValiderDepot/'+id,{headers});    
  }
  declineIt(id:String){
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return  this.http.get(baseUrl + '/EffacerDepot/'+id,{headers});    
  }
  StatDepot(){
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return  this.http.get(baseUrl + '/depot/Statistique',{headers});    
  }
}
