import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trapecio',
  templateUrl: './trapecio.page.html',
  styleUrls: ['./trapecio.page.scss'],
})
export class TrapecioPage implements OnInit {

  segment: string = 'peso_corporal';

  peso_corporal = [
    { t: 'Flexión en V elevada', i: 'https://workout-temple.com/wp-content/uploads/2022/10/pike-push-ups-small.jpg' }
  ];

  barra = [
    { t: 'Remo vertical con barra', i: 'https://blog.squatwolf.com/wp-content/uploads/2021/07/2-2.gif'},
    { t: 'Encogimientos con barra', i: 'https://i.gifer.com/4PzC.gif'},
    { t: 'Encogimientos traseros con barra', i: 'https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1637908377443-B8UUEVXSYG8K63DXGWJL/Standing%2BRear%2BBarbell%2BShrugs.jpeg' }
  ];

  poleas = [
    { t: 'Remo vertical con polea', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2017/04/uprightrow-1491252369.gif'},
    { t: 'Encogimiento de hombros con polea', i: 'https://static.vecteezy.com/system/resources/previews/008/631/437/original/woman-doing-cable-shrugs-exercise-flat-illustration-isolated-on-white-background-vector.jpg'},
    { t: 'Curl con agarre invertido', i: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Reverse-Grip-EZ-bar-Biceps-Curl.gif' }
  ];

  mancuernas = [
    { t: 'Encogimiento de hombro sentado', i: 'https://thumbs.gfycat.com/ChubbyHotDeer-size_restricted.gif' },
    { t: 'Encogimiento de hombro', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/Dumbbell-Shrug.gif' },
    { t: 'Pasos de granjero', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasos-granjero-1574679038.gif?resize=320:*' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
