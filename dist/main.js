"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    _password;
    _phone;
    _age;
    notebooks;
    constructor(id, name, email, password, phone, age, notebooks) {
        this.id = id;
        this.name = name;
        this.email = email,
            this._password = password;
        this._phone = phone;
        this._age = age;
        this.notebooks = notebooks;
    }
    set age(value) {
        if (value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60.");
        }
        this._age = value;
    }
    displayInfo() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Password:", this._password);
        console.log("Phone", this._phone);
        console.log("Age", this.age);
        console.log("notebooks:", this.notebooks);
    }
}
class Admin extends User {
    adminName;
    constructor(notebooks, adminName) {
        super(1, adminName, "", "", "", 22, notebooks);
        this.adminName = adminName;
    }
    manageNotes() {
        return `${this.notebooks}`;
    }
}
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        const maxLength = 10;
        return this.content.length > maxLength
            ? `Max length is 10`
            : this.content;
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(existingItem => existingItem !== item);
    }
    getAllItems() {
        return [...this.items];
    }
}
const user1 = new User(1, "Mennah", "mennah@example.com", "pass123", "010", 21, "notebook");
const admin1 = new Admin("Admin", "notebook");
const note1 = new Note(1, "Notes", "Object-oriented programming", user1);
const storage = new Storage();
user1.displayInfo();
console.log("Note preview:", note1.preview());
storage.addItem(note1);
console.log("Stored notes:", storage.getAllItems());
