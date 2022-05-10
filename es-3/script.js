const firstlevel = ["parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1"];
const secondlevel = ["parola1-2", "parola2-2"];
console.log(firstlevel);
console.log(secondlevel);

for (let i = 0; i < firstlevel.length; i++) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(firstlevel[i]);

    node.appendChild(textnode);

    document.getElementById("myList").appendChild(node);
    
    for (let i = 0; i < secondlevel.length; i++) {
        const provaul = document.createElement("ul");
        const node2 = document.createElement("li");
        const textnode2 = document.createTextNode(secondlevel[i]);
    
        node2.appendChild(provaul);
        provaul.appendChild(textnode2);
    
        document.getElementById("myList").appendChild(node2);
        
    };
};



// firstlevel.append(secondlevel);