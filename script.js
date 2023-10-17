let url = "http://159.223.51.203/api/bio"; 

let card1 = (json) => {
    let name = json[0].name; 
    let id = json[0].id; 
    let name1 = document.getElementById("name1"); 
    let id1 = document.getElementById("id1"); 
    name1.innerHTML = name; 
    id1.innerHTML = id; 
}
let card2 = (json) => {
    let name = json[1].name; 
    let id = json[1].id; 
    let name2 = document.getElementById("name2"); 
    let id2 = document.getElementById("id2"); 
    name2.innerHTML = name; 
    id2.innerHTML = id; 
}
let card3 = (json) => {
    let name = json[2].name; 
    let id = json[2].id; 
    let name3 = document.getElementById("name3"); 
    let id3 = document.getElementById("id3"); 
    name3.innerHTML = name; 
    id3.innerHTML = id; 
}
let card4 = (json) => {
    let name = json[3].name; 
    let id = json[3].id; 
    let name4 = document.getElementById("name4"); 
    let id4 = document.getElementById("id4"); 
    name4.innerHTML = name; 
    id4.innerHTML = id; 
}
let card5 = (json) => {
    let name = json[4].name; 
    let id = json[4].id; 
    let name5 = document.getElementById("name5"); 
    let id5 = document.getElementById("id5"); 
    name5.innerHTML = name; 
    id5.innerHTML = id; 
}
let card6 = (json) => {
    let name = json[5].name; 
    let id = json[5].id; 
    let name6 = document.getElementById("name6"); 
    let id6 = document.getElementById("id6"); 
    name6.innerHTML = name; 
    id6.innerHTML = id; 
}
let card7 = (json) => {
    let name = json[6].name; 
    let id = json[6].id; 
    let name7 = document.getElementById("name7"); 
    let id7 = document.getElementById("id7"); 
    name7.innerHTML = name; 
    id7.innerHTML = id; 
}
let card8 = (json) => {
    let name = json[7].name; 
    let id = json[7].id; 
    let name8 = document.getElementById("name8"); 
    let id8 = document.getElementById("id8"); 
    name8.innerHTML = name; 
    id8.innerHTML = id; 
}
let card9 = (json) => {
    let name = json[8].name; 
    let id = json[8].id; 
    let name9 = document.getElementById("name9"); 
    let id9 = document.getElementById("id9"); 
    name9.innerHTML = name; 
    id9.innerHTML = id; 
}
let card10 = (json) => {
    let name = json[9].name; 
    let id = json[9].id; 
    let name10 = document.getElementById("name10"); 
    let id10 = document.getElementById("id10"); 
    name10.innerHTML = name; 
    id10.innerHTML = id; 
}
let card11 = (json) => {
    let name = json[3].name; 
    let id = json[3].id; 
    let name11 = document.getElementById("name11"); 
    let id11 = document.getElementById("id11"); 
    name11.innerHTML = name; 
    id11.innerHTML = id; 
}



let load = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
            let responseText = xhttp.responseText; 
            let json = JSON.parse(responseText); 
            console.log(json);
            card1(json); 
            card2(json); 
            card3(json); 
            card4(json); 
            card5(json); 
            card6(json); 
            card7(json); 
            card8(json); 
            card9(json); 
            card10(json); 
            card11(json); 
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}



load(); 
