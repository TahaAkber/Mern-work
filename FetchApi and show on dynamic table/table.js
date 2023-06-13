function getdata(){
    const divtable = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=> response.json())
    .then(data=>{
    const table = document.createElement("table");
    const header = ["ID","TITLE","BODY"];
    const row = document.createElement("tr"); 
    for(let i=0; i<header.length; i++){
        const th = document.createElement("th");
        th.textContent = header[i];
        row.appendChild(th);
    }
        table.appendChild(row);

        divtable.appendChild(table);

        for(let i =0;i<500;i++){
            const id= document.createElement("td");
            const row = document.createElement("tr");
            id.textContent = data[i].id;
            row.appendChild(id);
            

            

            const title = document.createElement("td");
            const titlerow = document.createElement("tr");
            title.textContent=data[i].title;
            row.appendChild(title);
     

            const body = document.createElement("td");
            const bodyrow = document.createElement("tr");
            body.textContent = data[i].body;
            row.appendChild(body);

            table.appendChild(row);
            divtable.appendChild(table);
            
        }
        
    })



}