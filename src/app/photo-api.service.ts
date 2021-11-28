import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import vars from '../environments/env';
import {IPhoto} from './photo-finder/photo-finder.component'

@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPhoto = () => {
    return this.http.get<IPhoto>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization: `Client-ID ${vars.__ACCESS_KEY}` 
        }
      }
    ).pipe(
      map(value => { return {urls: value.urls.small, links: value.links.html, description: value.description}})
    )
  }

}
