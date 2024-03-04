import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  constructor(private http:HttpClient) { }
  getData(): Observable<any> {
    return this.http.get("./assets/data.json");
  }
}
