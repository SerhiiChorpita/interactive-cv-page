import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './blocks/contacts/contacts.component';
import { SoftSkillsComponent } from './blocks/soft-skills/soft-skills.component';
import { TechSkillsComponent } from './blocks/tech-skills/tech-skills.component';
import { ExperienceComponent } from './blocks/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactsComponent,
    SoftSkillsComponent,
    TechSkillsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
