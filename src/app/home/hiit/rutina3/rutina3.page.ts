import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina3',
  templateUrl: './rutina3.page.html',
  styleUrls: ['./rutina3.page.scss'],
})
export class Rutina3Page implements OnInit {

  rutina = [
    { t: 'Carrera en el sitio', i: 'assets/images/calentamiento/trote.webp' },
    { t: 'Flexiones (negativas o apoyo rodillas si resulta complicado)', i: 'assets/images/tren-superior/pecho/flexion.webp' },
    { t: 'Saltos con rodillas al pecho', i: 'assets/images/calentamiento/saltos.webp' },
    { t: 'Mountain Climbers', i: 'assets/images/abdomen/mountain climbers.webp' },
    { t: 'Abdominales rusas', i: 'assets/images/abdomen/abdominal rusa.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
