import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { One } from './one.model';

@Injectable({
  providedIn: 'root'
})
export class OneServiceService {
  private apiUrl = 'http://localhost:8080/one';
  private create = 'http://localhost:8080/one/create';

  headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
 
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }
  getOnes():Observable<One[]> {
    return this.http.get<One[]>(this.apiUrl);
  }
  addOne(one: {name :string}): Observable<One> {
    return this.http.post<One>(this.create, one);
  }
  deleteOne(id: number):Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  findByItem(id: number): Observable<One> {
    const url = `${this.apiUrl}/${id}`;
    console.log(url);
    return this.http.get<One>(url);
  }
}
