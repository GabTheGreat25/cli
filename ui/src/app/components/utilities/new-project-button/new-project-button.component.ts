import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'new-project-button',
  templateUrl: './new-project-button.component.html',
  styleUrls: ['./new-project-button.component.scss'],
})
export class NewProjectButtonComponent implements OnInit {
  @Input() backTitle: string = '';
  @Input() nextTitle: string = '';
  @Input() backIcon: string = '';
  @Input() nextIcon: string = '';
  @Output() onBack = new EventEmitter();
  @Output() onNext = new EventEmitter();

  back() {
    this.onBack.emit();
  }
  next() {
    this.onNext.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
