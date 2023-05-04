import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina1',
  templateUrl: './rutina1.page.html',
  styleUrls: ['./rutina1.page.scss'],
})
export class Rutina1Page implements OnInit {

  rutina = [
    { t: 'Jumping Jacks', i: 'https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif' },
    { t: 'Flexiones (negativas o apoyo rodillas si resulta complicado)', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pushup-1525365829.gif?crop=1.00xw:0.501xh;0,0.266xh&resize=640:*' },
    { t: 'Sentadillas', i: 'https://media.tenor.com/OI0eQbBWOYUAAAAC/sentadilla.gif' },
    { t: 'Mountain Climbers', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/mountainclimberrunning-1472061754.gif' },
    { t: 'Plancha', i: 'https://uploads-ssl.webflow.com/609aa41bb752e648eb4cb693/610385bb1ea3fa831ee371ba_pexels-photo-2294354.jpeg' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
