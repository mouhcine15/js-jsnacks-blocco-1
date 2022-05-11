const firstlevel = ["parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1"];
const secondlevel = ["parola1-2", "parola2-2"];
console.log(firstlevel);
console.log(secondlevel);

// for (let i = 0; i < firstlevel.length; i++) {
//     const node = document.createElement("li");
//     const textnode = document.createTextNode(firstlevel[i]);

//     node.appendChild(textnode);

//     document.getElementById("myList").appendChild(node);
    
//     for (let i = 0; i < secondlevel.length; i++) {
//         const provaul = document.createElement("li");
//         const node2 = document.createElement("ul");
//         const textnode2 = document.createTextNode(secondlevel[i]);
    
//         node2.appendChild(provaul);
//         provaul.appendChild(textnode2);
    
//         document.getElementById("myList").appendChild(node2);  
//     };
// };



// selezione UL primo livello
const firstLevUl = document.getElementById("myList");

// livello 1
for (let i = 0; i < firstlevel.length; i++) {
    // estraplo il contenuto iesimo del primo array
    let firstLevContent = firstlevel[i];
    // mi creo il LI di primo livello, iesimo
    let firstLevLi = document.createElement("li");

    // insierire il contenuto del LI, primo livello
    firstLevLi.append(firstLevContent);
    // inserisco il LI di primo livello creato nel UL di primo livello
    firstLevUl.append(firstLevLi);

    
    // mi serve qui fuori sennò fa più ul annidati ogni li primario
    let secondLevUl = document.createElement("ul");

    for (let j = 0; j < secondlevel.length; j++) {
        // estraplo il contenuto iesimo del secondo array
        let secondLevContent = secondlevel[j];
        // mi creo il LI di secondo livello, iesimo
        let secondLevLi = document.createElement("li");
    
        // insierire il contenuto del LI, secondo livello
        secondLevLi.append(secondLevContent);
        // inserisco il LI di primo livello creato nel UL di secondo livello
        secondLevUl.append(secondLevLi);
        // inserisco UL di secondo livello nel LI di primo livello
        firstLevLi.append(secondLevUl);
    
    };

};