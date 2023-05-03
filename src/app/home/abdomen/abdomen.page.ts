import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.page.html',
  styleUrls: ['./abdomen.page.scss'],
})
export class AbdomenPage implements OnInit {

  items = [
    { h: 'Con equipamiento', link: '/home/abdomen/con-equipamiento'},
    { h: 'Sin equipamiento', link: 'home/abdomen/sin-equipamiento'}
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
