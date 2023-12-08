import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://127.0.0.1:5000/api'
const baseUrlOther = 'http://127.0.0.1:5000/api1'

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) {
  }

  getQuery1Division(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q1/division`);
  }
}
