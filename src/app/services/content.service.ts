import { CONTENT_ATTR } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Content[] {
    return contentArray;
  }

  getContentObs(): Observable<Content[]> {
    return of(contentArray)
  }
}
