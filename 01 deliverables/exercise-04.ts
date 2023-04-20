console.log("************** DELIVERABLE 04 *********************");
//Ejercicio ReadBook

function isBookRead(books:book[], titleToSearch:string):boolean | string {
    
    const result:book = books.find(({ title }) => title === titleToSearch);
    
    if(result === undefined)return "No existe el libro";

    return result.isRead;
        
  }

class book{
    constructor(title: string,isRead: boolean){
        this.title = title;
        this.isRead = isRead;
    }
    title:string;
    isRead:boolean;
  }

  const books:book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ]

console.log("Pruebas ReadBook")
console.log(isBookRead(books, "La comunidad del anillo")); 
console.log(isBookRead(books, "Devastación")); 
console.log(isBookRead(books, "Canción de hielo y fuego")); 
