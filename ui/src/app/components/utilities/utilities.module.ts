import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CreateButtonComponent } from './create-button/create-button.component';
import { ChooseFileComponent } from './choose-file/choose-file.component';
import { FolderComponent } from './folder/folder.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ExtensionComponent } from './extension/extension.component';
import { NewProjectButtonComponent } from './new-project-button/new-project-button.component';
import { SwitchComponent } from './switch/switch.component';
import { SideFolderComponent } from './side-folder/side-folder.component';
@NgModule({
  declarations: [
    SidenavComponent,
    CreateButtonComponent,
    ChooseFileComponent,
    FolderComponent,
    ReminderComponent,
    ExtensionComponent,
    NewProjectButtonComponent,
    SwitchComponent,
    SideFolderComponent,
  ],
  exports: [
    SidenavComponent,
    CreateButtonComponent,
    ChooseFileComponent,
    FolderComponent,
    ReminderComponent,
    ExtensionComponent,
    NewProjectButtonComponent,
    SwitchComponent,
    SideFolderComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class UtilitiesModule {}
