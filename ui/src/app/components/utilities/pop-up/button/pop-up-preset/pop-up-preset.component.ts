import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pop-up-preset',
  templateUrl: './pop-up-preset.component.html',
  styleUrls: ['./pop-up-preset.component.scss'],
})
export class PopUpPresetComponent implements OnInit {
  @Input() continueTitle: string = '';
  @Input() createTitle: string = '';
  @Output() onNext = new EventEmitter();

  next() {
    this.onNext.emit();
  }

  constructor(private router: Router) {}

  back() {}

  ngOnInit(): void {}
}
