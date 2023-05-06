import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina2',
  templateUrl: './rutina2.page.html',
  styleUrls: ['./rutina2.page.scss'],
})
export class Rutina2Page implements OnInit {

  rutina = [
    { t: 'Burpees', i: 'assets/images/tren-inferior/cuadriceps/burpee.webp' },
    { t: 'Sentadillas con salto', i: 'assets/images/tren-inferior/cuadriceps/sentadilla con salto.webp' },
    { t: 'Zancadas (hacia atrás o delante)', i: 'assets/images/tren-inferior/cuadriceps/zancada frontal.webp' },
    { t: 'Mountain Climbers', i: 'assets/images/abdomen/mountain climbers.webp' },
    { t: 'Tijeras', i: 'assets/images/abdomen/tijeras.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
