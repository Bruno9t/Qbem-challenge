import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatProgressBarModule} from '@angular/material/progress-bar'

import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapLinkedin,
  bootstrapUpload
} from '@ng-icons/bootstrap-icons';

import {InputFileComponent} from './components/input-file/input-file.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputFileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    NgIconsModule.withIcons({
      bootstrapGithub,
      bootstrapLinkedin,
      bootstrapUpload
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
