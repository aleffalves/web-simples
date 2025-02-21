import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { AlbumComponent } from './view/album/album.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AlbumDetalhesComponent } from './view/album-detalhes/album-detalhes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'albums', component: AlbumComponent, canActivate: [AuthGuard] },
  { path: 'albums/:id', component: AlbumDetalhesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/albums', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
