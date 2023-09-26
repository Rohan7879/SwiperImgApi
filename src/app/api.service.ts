import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  data() {
    return this.http.get('https://api.slingacademy.com/v1/sample-data/photos');
  }
}
