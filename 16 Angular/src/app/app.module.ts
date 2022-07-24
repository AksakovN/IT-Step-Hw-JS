import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { Serv1Service } from './services/serv1.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Serv1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
