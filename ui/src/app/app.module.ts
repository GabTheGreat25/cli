import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './components/utilities/card/card.module';
import { PopUpModule } from './components/utilities/pop-up/pop-up.module';
import { UtilitiesModule } from './components/utilities/utilities.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UtilitiesModule, PopUpModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
