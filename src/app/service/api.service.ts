import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlapi= 'https://api.themoviedb.org/3/movie/157336?api_key=98441ea1bd28c5b1b50c4f34abbc6eea';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlapi);
  }
}
