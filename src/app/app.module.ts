import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule, 
          NbLayoutModule, 
          NbSidebarModule, 
          NbButtonModule, 
          NbCardModule, 
          NbDialogModule,
          NbIconModule,
          NbSelectModule,
          NbInputModule,
          NbFormFieldModule,
          NbSearchModule,
        } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DialogNebularComponent } from './components/dialog-nebular/dialog-nebular.component';
import {ShowcaseDialogComponent} from './components/showcase-dialog/showcase-dialog.component';


@NgModule({
  declarations: [
    AppComponent,    
    DialogNebularComponent,
    ShowcaseDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    NbIconModule,
    NbSelectModule,
    NbInputModule,
    NbFormFieldModule,
    NbSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
