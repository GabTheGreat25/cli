import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent, CardWrapperComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardWrapperComponent],
})
export class CardModule {}
