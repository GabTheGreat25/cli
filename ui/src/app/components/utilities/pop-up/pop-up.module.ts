import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from './pop-up.component';
import { PopUpQuestionComponent } from './body/pop-up-question/pop-up-question.component';
import { PopUpPresetComponent } from './button/pop-up-preset/pop-up-preset.component';
import { PopUpClearComponent } from './button/pop-up-clear/pop-up-clear.component';
import { PopUpInputComponent } from './body/pop-up-input/pop-up-input.component';
import { PopUpOptionsComponent } from './body/pop-up-options/pop-up-options.component';
import { UtilitiesModule } from '../utilities.module';

@NgModule({
  declarations: [PopUpComponent, PopUpQuestionComponent, PopUpPresetComponent, PopUpClearComponent, PopUpInputComponent, PopUpOptionsComponent],
  imports: [CommonModule, UtilitiesModule],
  exports: [PopUpComponent, PopUpQuestionComponent, PopUpPresetComponent, PopUpClearComponent, PopUpInputComponent, PopUpOptionsComponent],
})
export class PopUpModule {}
