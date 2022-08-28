import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbsolutePipe, EventComponentComponent } from './event-component/event-component.component';

import { ManageUsersFormComponent } from './manage-users-form/manage-users-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewDebtDialogueComponent } from './new-debt-dialogue/new-debt-dialogue.component';

const routes: Routes = [
  {path:'event', component: EventComponentComponent},
  {path: 'manage-users', component: ManageUsersFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EventComponentComponent,
    ManageUsersFormComponent,
    NavbarComponent,
    NewDebtDialogueComponent,
    AbsolutePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
