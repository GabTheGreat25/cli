import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Input() title = '';
  @Output() onClose = new EventEmitter();
  isShown: boolean = true;

  close() {
    this.onClose.emit();
  }

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
