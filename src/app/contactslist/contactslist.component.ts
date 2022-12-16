import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit{

      ngOnInit(): void {
        this.getContacts();
      }  

    contacts:Contact[] = [];
    message:string = "";
    constructor(private contactService:ContactService,private router:Router){}

    getContacts(){

      this.contactService.getContacts().subscribe(res => {
          this.contacts = res;
      });
      

    }

    editContact(cId:number){
      console.log(cId);
      this.router.navigate(['/editcontact',cId]);

    }

    deleteContact(contactid:number){
      this.contactService.deleteContact(contactid).subscribe(res => {
        this.message = res;
        console.log(this.message);
        this.getContacts();
      });
     
    }

}
