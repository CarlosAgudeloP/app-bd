import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostgresService } from 'src/app/services/postgres.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = {};
  loading: boolean;

  constructor(
    private postgres: PostgresService,
    private storageSvc: StorageService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  search(user: string) {
    console.log(user);
    this.postgres.getUser(user)
      .subscribe((response) => {
        this.user = response;
        console.log(this.user);
        if (response) {
          this.storageSvc.setUserId(25);
          this.router.navigate(['/survey']);
        }
      });
  }


}
