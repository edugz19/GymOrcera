import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina4',
  templateUrl: './rutina4.page.html',
  styleUrls: ['./rutina4.page.scss'],
})
export class Rutina4Page implements OnInit {

  rutina = [
    { t: 'Burpees', i: 'https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif' },
    { t: 'Mountain Climbers', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/mountainclimberrunning-1472061754.gif' },
    { t: 'Flexiones', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pushup-1525365829.gif?crop=1.00xw:0.501xh;0,0.266xh&resize=640:*' },
    { t: 'Skater Jumps', i: 'https://i.pinimg.com/originals/f5/6d/4e/f56d4ede81655fb34bedf0ec9430bfde.gif' },
    { t: 'Plancha', i: 'https://uploads-ssl.webflow.com/609aa41bb752e648eb4cb693/610385bb1ea3fa831ee371ba_pexels-photo-2294354.jpeg' },
    { t: 'Hollow Hold', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/lyinghollowbodyhold-1457044774.gif' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
