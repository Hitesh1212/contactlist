import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

  constructor(private http: Http) { }


  // retriving contact service

  getContacts() {
    return this.http.get('http://localhost:2000/api/contacts')
    .map(res => res.json());
  }

  addContact(newContact) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:2000/api/contact', newContact, {headers: headers})
          .map(res => res.json());
  }

  deleteContact(id) {
    return this.http.delete('http://localhost:2000/api/contact/' + id)
    .map(res => res.json());
  }
}
