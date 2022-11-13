import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private BASE_URL = environment.api_base
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.BASE_URL)
  }

  deleteUser(id:string){}
  editUser(){}
  
}
