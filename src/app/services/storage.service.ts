import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUserId(id: number): void {
    localStorage.setItem('userId', `${id}`);
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }
}
