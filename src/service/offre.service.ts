

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }
  addOffre(input: NgForm) {
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return this.http.post(baseUrl + 'Offre', input.value,{headers});
  }
  getList() {
    return this.http.get(baseUrl + 'Offre');
  }
  update(input: NgForm) {
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return this.http.put(baseUrl + 'Offre', input.value,{headers});
  }
  getDetails(id: string) {
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return this.http.get(baseUrl + 'OffreDetails/' + id);
  }
  insertDetails(f: NgForm) {
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return this.http.post(baseUrl + 'OffreDetails', f.value,{headers});
  }
  updateDetails(f: NgForm) {
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return this.http.put(baseUrl + 'OffreDetails', f.value,{headers});
  }
  
  delete(id: string) {
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');
    
    return this.http.delete(baseUrl + 'Offre/' + id,{headers});
  }

  deleteDetails(id: string) {
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');

    return this.http.delete(baseUrl + 'OffreDetails/' + id,{headers});
  }
}
