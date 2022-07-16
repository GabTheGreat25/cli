import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mayaBird = `../../../assets/images/maya-bird-with-mayajs.svg`;
  electric = `../../../assets/images/electric.svg`;
  constructor() {}

  ngOnInit(): void {}
}
