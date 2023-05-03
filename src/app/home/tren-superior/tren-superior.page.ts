import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tren-superior',
  templateUrl: './tren-superior.page.html',
  styleUrls: ['./tren-superior.page.scss'],
})
export class TrenSuperiorPage implements OnInit {

  items = [
    { h: 'Pecho', link: '/home/tren-superior/pecho'},
    { h: 'Bíceps', link: 'home/tren-superior/biceps', },
    { h: 'Hombros', link: 'home/tren-superior/hombros' },
    { h: 'Antebrazos', link: 'home/tren-superior/antebrazos' },
    { h: 'Trapecio', link: 'home/tren-superior/trapecio' },
    { h: 'Tríceps', link: 'home/tren-superior/triceps' },
    { h: 'Dorsales', link: 'home/tren-superior/dorsales' },
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
