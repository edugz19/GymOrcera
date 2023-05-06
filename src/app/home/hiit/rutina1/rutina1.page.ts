import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina1',
  templateUrl: './rutina1.page.html',
  styleUrls: ['./rutina1.page.scss'],
})
export class Rutina1Page implements OnInit {

  rutina = [
    { t: 'Jumping Jacks', i: 'assets/images/calentamiento/jumping jacks.webp' },
    { t: 'Flexiones (negativas o apoyo rodillas si resulta complicado)', i: 'assets/images/tren-superior/pecho/flexion.webp' },
    { t: 'Sentadillas', i: 'assets/images/tren-inferior/cuadriceps/sentadilla.webp' },
    { t: 'Mountain Climbers', i: 'assets/images/abdomen/mountain climbers.webp' },
    { t: 'Plancha', i: 'assets/images/abdomen/plancha.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
