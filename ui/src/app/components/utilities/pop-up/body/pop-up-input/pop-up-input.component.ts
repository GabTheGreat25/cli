import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pop-up-input',
  templateUrl: './pop-up-input.component.html',
  styleUrls: ['./pop-up-input.component.scss'],
})
export class PopUpInputComponent implements OnInit {
  @Input() icon: string = '';
  @Input() infoTitle: string = '';
  @Input() title: string = '';
  @Input() info: string = '';
  constructor() {}

  ngOnInit(): void {}
}
