import { CONTENT_ATTR } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
//import { contentArray } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // getContent(): Content[] {
  //   return contentArray;
  // }

  getContent(): Observable<Content[]> {
    //return of(contentArray)
    return this.http.get<Content[]>("api/content");
  }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>("api/content", content, this.httpOptions);
  }


}
