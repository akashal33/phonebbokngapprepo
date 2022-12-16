import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactslistComponent } from './contactslist/contactslist.component';
import { EditcontactComponent } from './editcontact/editcontact.component';

const routes: Routes = [
  {path:"" , redirectTo:"contacts" , pathMatch: "full"},
  {path: "savecontact", component:ContactComponent},
  {path: "contacts", component:ContactslistComponent},
  {path: 'editcontact/:id', component:EditcontactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
