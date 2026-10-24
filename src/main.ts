class User {
    public id: number;
    public name: string;
    protected email : string;
    private _password : string;
    private _phone : string ;
    private _age : number;
    public notebooks:string;

    constructor (
        id :number,
        name:string,
        email:string,
        password:string,
        phone:string,
        age:number,
        notebooks:string
    )
    {
        this.id = id;
        this.name = name;
        this.email = email,
        this._password = password;
        this._phone = phone;
        this._age = age;
        this.notebooks =notebooks
    }

    public set age(value: number) {
        if (value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60.");
        }
        this._age = value;
    }

    public displayInfo(){
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Password:", this._password);
        console.log("Phone", this._phone);
        console.log("Age", this.age);
        console.log("notebooks:",this.notebooks);
        
    }
}

class Admin extends User {
    constructor (notebooks:string, public adminName :string){
        super(1, adminName, "", "", "", 22, notebooks);
    }
        manageNotes(){
            return`${this.notebooks}`
        }
    
}

class Note {
    public id: number;
    public title: string;
    public content: string;
    public userId: User;

    constructor(id: number, title: string, content: string, userId: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    public preview(): string {
        const maxLength = 10;
        return this.content.length > maxLength
            ? `Max length is 10`
            : this.content;
    }
}



class NoteBook {
    private notes: Note[] = [];

    addNote(noteName: string) {
        const note = new Note (noteName)
        this.notes.push(note);
    }

    removeNote(noteId: number) {
        const note2 = new Note (noteId)
        this.notes.push(note2)
    }
}

class Storage<T> {
    private items: T[] = [];

    addItem(item: T){
        this.items.push(item);
    }

    removeItem(item: T) {
        this.items = this.items.filter(existingItem => existingItem !== item);
    }

    getAllItems(): T[] {
        return [...this.items];
    }
}

const user1 = new User(
    1,
    "Mennah",
    "mennah@example.com",
    "pass123",
    "010",
    21,
    "notebook"
);
const admin1 = new Admin("Admin","notebook");
const note1 = new Note(
    1,
    "Notes",
    "Object-oriented programming",
    user1
);
const notebook1 = new NoteBook();
const storage = new Storage<Note>();


user1.displayInfo();
user1.addNotebook(notebook1);
notebook1.addNote(note1);
console.log("Note preview:", note1.preview());
admin1.manageNotes(notebook1);
storage.addItem(note1);
console.log("Stored notes:", storage.getAllItems()); 