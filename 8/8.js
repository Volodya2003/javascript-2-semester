let library = []


function Book(name,desc,image)
{
        this.name = name
        this.desc = desc
        this.image = image

        this.addBook = function()
        {
            let name = prompt ("Input name: ")
            let desc = prompt ("Input desc: ")
            let image = prompt ("Input image: ")

            let bookObject = new Book(name,desc,image)

            library.push(bookObject)
        }

        this.delBook = function()
        {
            index  = parseInt(prompt("Input index: "))
            library.splice(index,1)
            bookObject.printBookInfo();
        }

        this.printBookInfo = function()
        {
            let output = document.getElementById("output");
            output.innerHTML = "";
            library.forEach(( bookObject, index) => {
              let bookDiv = document.createElement("div");
              bookDiv.className = "book";
              bookDiv.innerHTML = `
                <h3>${bookObject.name}</h3>
                <p>${bookObject.desc}</p>
                <img src="${bookObject.image}" alt="Изображение книги">`;
              output.appendChild(bookDiv);
        });
    }
}

let bookObject = new Book(' ',' ',' ')

