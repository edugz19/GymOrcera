import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina3',
  templateUrl: './rutina3.page.html',
  styleUrls: ['./rutina3.page.scss'],
})
export class Rutina3Page implements OnInit {

  rutina = [
    { t: 'Carrera en el sitio', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/highkneerun-1457044203.gif?resize=768:*' },
    { t: 'Flexiones (negativas o apoyo rodillas si resulta complicado)', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pushup-1525365829.gif?crop=1.00xw:0.501xh;0,0.266xh&resize=640:*' },
    { t: 'Saltos con rodillas al pecho', i: 'https://www.yomeentreno.com/wp-content/uploads/2017/07/rodillas-al-pecho.gif' },
    { t: 'Mountain Climbers', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/mountainclimberrunning-1472061754.gif' },
    { t: 'Abdominales rusas', i: 'https://j.gifs.com/mwy1v0@large.gif?download=true' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
