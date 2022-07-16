import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements OnInit {
  @Input() content = '';
  @Input() bg = '';

  constructor() {}

  ngOnInit(): void {}
}
