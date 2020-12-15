import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostgresService {

  constructor(private http: HttpClient) { 
    console.log('Postgres Service Listo');
  }

  getQuery(query: string){
    const url = `http://localhost:8080/v1-infopoli/${query}`;
    return this.http.get(url);
}

getUser(user: string){
  return this.getQuery(`findUser/${user}`);
}

}
