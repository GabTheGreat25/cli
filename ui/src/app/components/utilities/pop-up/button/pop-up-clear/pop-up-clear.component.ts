import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pop-up-clear',
  templateUrl: './pop-up-clear.component.html',
  styleUrls: ['./pop-up-clear.component.scss'],
})
export class PopUpClearComponent implements OnInit {
  @Input() clearTitle: string = '';
  @Output() onBack = new EventEmitter();

  back() {
    this.onBack.emit();
    console.log('TEST');
  }

  constructor() {}

  ngOnInit(): void {}
}
