/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex and elaborate implementation of a web-based contact management system. It includes advanced object-oriented programming techniques, data validation, and interactive user functionalities.
*/

// Contact class represents a single contact
class Contact {
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

// ContactManagement class manages contacts and provides various functionalities
class ContactManagement {
  constructor() {
    this.contacts = [];
    this.nextId = 1;
  }

  // Method to add a contact
  addContact(name, email, phone) {
    if (this.isValidEmail(email) && this.isValidPhone(phone)) {
      const contact = new Contact(this.nextId++, name, email, phone);
      this.contacts.push(contact);
      console.log(`Contact '${contact.name}' added successfully.`);
    } else {
      console.error('Invalid email or phone number.');
    }
  }

  // Method to remove a contact
  removeContact(id) {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      const contact = this.contacts.splice(index, 1)[0];
      console.log(`Contact '${contact.name}' removed successfully.`);
    } else {
      console.error('Contact not found.');
    }
  }

  // Method to search contacts by name
  searchContactsByName(name) {
    const results = this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(`${results.length} contacts found.`);
    results.forEach((contact) => console.log(contact));
  }

  // Method to validate email format
  isValidEmail(email) {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Method to validate phone format
  isValidPhone(phone) {
    // Regular expression for phone number validation
    const regex = /^\d{10}$/;
    return regex.test(phone);
  }
}

// Usage example
const contactManagement = new ContactManagement();
contactManagement.addContact('John Doe', 'johndoe@example.com', '1234567890');
contactManagement.addContact('Alice Smith', 'alice@example.com', '9876543210');
contactManagement.addContact('Bob Johnson', 'bob@example.com', '5555555555');
contactManagement.removeContact(2);
contactManagement.searchContactsByName('John');