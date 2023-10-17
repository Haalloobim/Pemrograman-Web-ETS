let url = "http://159.223.51.203/api/bio"; 

let card1 = (json) => {
    let name = json[0].name; 
    let id = json[0].id; 
    let name1 = document.getElementById("name1"); 
    let id1 = document.getElementById("id1"); 
    name1.innerHTML = name; 
    id1.innerHTML = id; 
}


let load = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
            let responseText = xhttp.responseText; 
            let json = JSON.parse(responseText); 
            console.log(json);
            card1(json); 
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}



load(); 
