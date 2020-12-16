import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  // tslint:disable-next-line: variable-name
  api_base = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  getQR(id: number): any {
    return this.http.get(`${this.api_base}/v1-infopersonal/qrcodes/${id}`);
  }
}
