import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/shared/model/album';
import { AlbumService } from 'src/app/shared/service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums: Album[] = [];
  albumPhotos: { [key: number]: string } = {};

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums.map(album => ({ ...album, loaded: false }));
      albums.forEach(album => {
        this.albumService.getFirstPhotoByAlbumId(album.id).subscribe(photo => {
          this.albumPhotos[album.id] = photo.thumbnailUrl;
        });
      });
    });
  }

  onImageLoad(album: any) {
    album.loaded = true;
  }

  viewAlbumDetails(albumId: number): void {
    this.router.navigate([`albums/${albumId}`]);
  }

}
