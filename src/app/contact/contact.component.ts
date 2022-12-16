import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    constructor(private contactService:ContactService,private router:Router){}

    contact:Contact = new Contact();
    message = "";
    saveContact(){

        this.contactService.saveContact(this.contact).subscribe(res => {
          this.message = res;
          this.router.navigate(['/contacts']);
        });

    }

}
