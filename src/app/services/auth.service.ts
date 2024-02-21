import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: string;

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", " application/json")
    }
    let params = new HttpParams()
      .set("username", username).set("password", password).set("grantType", "password");
    return this.http.post("http://localhost:8080/login", params, options)
  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    console.log('Réponse du serveur complète :', data);
    this.accessToken = data['accessToken']

    console.log('Token reçu :', this.accessToken);

    try {

    } catch (error) {
      console.error('Erreur lors du décodage du JWT :', error);
    }


  }
}
