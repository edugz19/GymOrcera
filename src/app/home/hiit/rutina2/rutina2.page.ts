import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina2',
  templateUrl: './rutina2.page.html',
  styleUrls: ['./rutina2.page.scss'],
})
export class Rutina2Page implements OnInit {

  rutina = [
    { t: 'Burpees', i: 'https://media1.popsugar-assets.com/files/2014/02/27/847/n/1922729/1baf9ec0f5ce4ea9_burpee.3.gif.xxxlarge.gif' },
    { t: 'Sentadillas con salto', i: 'https://www.actitudfem.com/files/media/files/rutina-para-reducir-cintura.gif' },
    { t: 'Zancadas (hacia atrás o delante)', i: 'https://3.bp.blogspot.com/-pZWlazl6Mrw/WoiZhD7tKVI/AAAAAAAAbEQ/Yc6CxAboCJgB-Kn-vQL_A7jsZAAZ7TgWwCLcBGAs/s1600/step%2Bby%2Bstep%2Bexercises%2Bzancadas.gif' },
    { t: 'Mountain Climbers', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/mountainclimberrunning-1472061754.gif' },
    { t: 'Tijeras', i: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/XDRI4C35WNBX3KIUEVU4VPLRRE.gif' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
