import { Component, OnInit } from '@angular/core';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
  standalone: false,
})
export class SwiperPage implements OnInit {

  constructor(public cameraService: CameraService) { }

  ngOnInit() {
  }


  imageLoaded: boolean[] = [];

}
