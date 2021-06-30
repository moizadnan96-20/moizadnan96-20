import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseURL = 'http://localhost:3000/api/mail';
  constructor(private http: HttpClient) { }

  addEmail(data:any) {
    return this.http.post(`${this.baseURL}/send`, data).toPromise();
  }
}