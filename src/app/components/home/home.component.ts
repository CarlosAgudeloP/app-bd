import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostgresService } from 'src/app/services/postgres.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user : any = {};
  loading: boolean;

  constructor( private postgres: PostgresService) { 


    console.log('Home');

    
    };


  ngOnInit(): void {
  }

  search(user:string){
    console.log(user)
    this.postgres.getUser( user )
        .subscribe( response => {
          this.user = response;
          console.log(this.user);
        });
  }


}
