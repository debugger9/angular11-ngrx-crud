import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/users').toPromise().then(res => {
        resolve(res);
      },
        err => {
          reject(err);
        });
    });
  }
}

