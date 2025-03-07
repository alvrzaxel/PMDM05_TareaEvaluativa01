import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'swiper',
    loadChildren: () => import('./pages/swiper/swiper.module').then( m => m.SwiperPageModule)
  },
  {
    path: 'voice',
    loadChildren: () => import('./pages/voice/voice.module').then( m => m.VoicePageModule)
  },
  {
    path: 'leaflet',
    loadChildren: () => import('./pages/leaflet/leaflet.module').then( m => m.LeafletPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
