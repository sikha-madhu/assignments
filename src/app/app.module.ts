import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Components/Common components/header-component/header-component.component';
import { FooterComponentComponent } from './Components/Common components/footer-component/footer-component.component';
import { ProjectWelcomepageComponent } from './Components/projectCreation/project-welcomepage/project-welcomepage.component';
import { TabComponentComponent } from './Components/Common components/tab-component/tab-component.component';
import { PopupComponentComponent } from './Components/Common components/popup-component/popup-component.component';
import { ToastComponentComponent } from './Components/Common components/toast-component/toast-component.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjectCreationFormComponent } from './Components/projectCreation/project-creation-form/project-creation-form.component';
import { ProjectAckComponent } from './Components/projectCreation/project-ack/project-ack.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ProjectWelcomepageComponent,
    TabComponentComponent,
    PopupComponentComponent,
    ToastComponentComponent,
    ProjectCreationFormComponent,
    ProjectAckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
