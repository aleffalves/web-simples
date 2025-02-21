import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Album } from "../model/album";
import { Foto } from "../model/foto";

@Injectable({
    providedIn: 'root'
  })
export class AlbumService {

    private apiUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {}

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.apiUrl}/albums`);
    }

    getFirstPhotoByAlbumId(albumId: number): Observable<Foto> {
        return this.http.get<Foto>(`${this.apiUrl}/albums/${albumId}/photos?_limit=1`);
    }

    getFirstTenPhotosByAlbumId(albumId: number): Observable<Foto[]> {
        return this.http.get<Foto[]>(`${this.apiUrl}/albums/${albumId}/photos?_limit=10`);
      }

}