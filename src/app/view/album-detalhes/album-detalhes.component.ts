import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foto } from 'src/app/shared/model/foto';
import { AlbumService } from 'src/app/shared/service/album.service';

@Component({
  selector: 'app-album-detalhes',
  templateUrl: './album-detalhes.component.html',
  styleUrls: ['./album-detalhes.component.scss']
})
export class AlbumDetalhesComponent implements OnInit {

  fotos: Foto[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.albumId = this.route.snapshot.params['id'];
    this.albumService.getFirstTenPhotosByAlbumId(this.albumId).subscribe(photos => {
      this.fotos = photos.map(foto => ({ ...foto, loaded: false }));
    });
  }

  onImageLoad(foto: any) {
    foto.loaded = true;
  }

  goBack() {
    this.location.back();
  }
}
