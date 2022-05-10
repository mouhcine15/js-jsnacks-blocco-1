const array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 1000) + 1);
    console.log(array[i]);
    
    if (array[i] % 2 == 0) {
        document.getElementById("primodiv").innerHTML += (" " + array[i]);
    } else {
        document.getElementById("secondodiv").innerHTML += (" " + array[i]);
    }
};

// const pari = (array[i] % 2 == 0)
// document.getElementById("primodiv").innerHTML = (pari);

// const dispari = (array[i] % 2 !== 0)
// document.getElementById("secondodiv").innerHTML = (dispari);