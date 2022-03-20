import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myApiUrl:string = environment.pathApi;
  constructor(private http:HttpClient) { }
 getAll(){
  return this.http.get<any>(
    this.myApiUrl + '/api/users?page=0&size=20&sort=id,AS');
 }

 getByPage(k:number) {
  return this.http.get<any>(
    this.myApiUrl + '/api/users?page='+ k+'&size=20&sort=id,ASC'
  );
}
getbyUser(id: number) {
  return this.http.get<any>(
    this.myApiUrl +
      '/api/users' +
      id +
      '?page=0&size=200&sort=id,ASC'
  );
}
// controllo getByUser che pero non esiste
}
