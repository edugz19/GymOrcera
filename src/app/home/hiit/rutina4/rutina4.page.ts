import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina4',
  templateUrl: './rutina4.page.html',
  styleUrls: ['./rutina4.page.scss'],
})
export class Rutina4Page implements OnInit {

  rutina = [
    { t: 'Burpees', i: 'assets/images/tren-inferior/cuadriceps/burpee.webp' },
    { t: 'Mountain Climbers', i: 'assets/images/abdomen/mountain climbers.webp' },
    { t: 'Flexiones explosivas', i: 'assets/images/tren-superior/pecho/flexion explosiva.webp' },
    { t: 'Skater Jumps', i: 'assets/images/calentamiento/skater jumps.webp' },
    { t: 'Long lever', i: 'assets/images/abdomen/long lever.webp' },
    { t: 'Hollow Hold', i: 'assets/images/abdomen/hollow hold.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
