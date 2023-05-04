import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiit',
  templateUrl: './hiit.page.html',
  styleUrls: ['./hiit.page.scss'],
})
export class HiitPage implements OnInit {

  items = [
    { h: 'Rutina 1', link: '/home/hiit/rutina1'},
    { h: 'Rutina 2', link: '/home/hiit/rutina2'},
    { h: 'Rutina 3', link: '/home/hiit/rutina3'},
    { h: 'Rutina 4 (Sólo para valientes)', link: '/home/hiit/rutina4' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
