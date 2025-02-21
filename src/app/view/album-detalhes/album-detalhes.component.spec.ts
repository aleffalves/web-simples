import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetalhesComponent } from './album-detalhes.component';

describe('AlbumDetalhesComponent', () => {
  let component: AlbumDetalhesComponent;
  let fixture: ComponentFixture<AlbumDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
