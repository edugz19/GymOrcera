import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage implements OnInit {

  items = [
    { h: 'Pecho', link: '/home/tren-superior/pecho'},
    { h: 'Bíceps', link: 'home/tren-superior/biceps', },
    { h: 'Hombros', link: 'home/tren-superior/hombros' },
    { h: 'Antebrazos', link: 'home/tren-superior/antebrazos' },
    { h: 'Trapecio Superior', link: 'home/tren-superior/trapecio-superior' },
    { h: 'Trapecio Medio', link: 'home/tren-superior/trapecio-medio' },
    { h: 'Tríceps', link: 'home/tren-superior/triceps' },
    { h: 'Dorsales', link: 'home/tren-superior/dorsales' },
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
