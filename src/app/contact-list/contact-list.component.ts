import { contacts } from './../contact';
import { userContact } from './../userContact';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: any = {};
  constructor() { }

  ngOnInit() {
    // initialize your contacts here
    this.contacts = contacts;
  }

  addContact(newContact): any {
    console.log('Add contact has been called');
    // Fill your code here
    // add contact to contacts list
    // clear inputs
    console.log('Add contact has been called');
    newContact['name'] = this.newContact.name;
    newContact['email'] = this.newContact.email;
    newContact['phoneNumber'] = this.newContact.phoneNumber;
    newContact['image'] = this.newContact.image;
    contacts.push(newContact);
  }
}
