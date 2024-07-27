import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { One } from './one.model';

@Injectable({
  providedIn: 'root'
})
export class OneServiceService {
  private apiUrl = 'http://localhost:8080/one';

  constructor(private http: HttpClient) { }
  getOnes():Observable<One[]> {
    return this.http.get<One[]>(this.apiUrl);
  }
}
