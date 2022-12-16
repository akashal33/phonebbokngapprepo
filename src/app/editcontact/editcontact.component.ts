import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit{

    ngOnInit(): void {
      this.getContact()
    }

  constructor(private contactService:ContactService,private activeRouter:ActivatedRoute,private router:Router){}

  contact:Contact = new Contact();
  msg = "";
  contactId = 0;
  
  updateContact(){
    this.contactService.updateContact(this.contact).subscribe(res =>{
      this.msg = res;
      this.router.navigate(['/contacts']);
    });

  }

  getContact(){
      // 'id' in router module which erver declare param used only that
      this.contactId = this.activeRouter.snapshot.params['id'];
      console.log(this.contactId);
      this.contactService.getContact(this.contactId).subscribe(res =>{
        this.contact = res;
      });
  }

}
