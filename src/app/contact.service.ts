import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    baseUrl = "http://localhost:9000";

  constructor(private httpClient:HttpClient) { }

  saveContact(contact:Contact):Observable<string>{
    return this.httpClient.post(`${this.baseUrl}/contact`,contact,{responseType:"text"});
  }

  getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  getContact(contactId:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${contactId}`);
  }

  updateContact(contact:Contact):Observable<string>{
    return this.httpClient.put(`${this.baseUrl}/contact`,contact,{responseType:"text"});
  }

  deleteContact(contactId:number):Observable<string>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${contactId}`,{responseType:"text"});
  }
  


}
