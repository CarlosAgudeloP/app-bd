import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostgresService {

  constructor(private http: HttpClient) {
    console.log('Postgres Service Listo');
  }

  getQuery(query: string): Observable<any> {
    const url = `http://localhost:8080/v1-infopoli/${query}`;

    return this.http.get(url).pipe(
      catchError((err) => {
        console.log('Not found', err);
        return of(null);
      })
    );
  }

  getUser(user: string): Observable<any> {
    return this.getQuery(`findUser/${user}`);
  }

}
