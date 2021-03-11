let elements = [];

window.onload = function(){
    if(JSON.parse(localStorage.getItem("todo-elements")) !== null){
        elements = JSON.parse(localStorage.getItem("todo-elements"));
        display()
    }
}

function addElement(){
    if(document.querySelector(".addTxt").value.trim() !== ""){
        elements.push(document.querySelector(".addTxt").value)

        if(localStorage.getItem("todo-elements") == null){
            localStorage.setItem("todo-elements", JSON.stringify(elements));
        }else{
            localStorage.setItem("todo-elements", JSON.stringify(elements));
        }
        display();
    }
    document.querySelector(".addTxt").value = "";
}

function display(){
    document.querySelector(".list").innerHTML = "";
    for(let i = 0; i < elements.length; i++)

        document.querySelector(".list").innerHTML +=
        "<center><div class='element'>"+ elements[i]+
        "<img class='trick' src='img/ok.png' onclick='strike("+i+")'><img class='dustbin' src='img/lixo.png' onclick='del("+i+")'><div/><center/>";
}


function del(index) {
    elements.splice(index, 1);
    display();

    if(localStorage.getItem("todo-elements") == null){
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }else{
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }   
}

function strike(index){
        if(elements[index].includes("<strike>")){
            elements[index] = element[index].replace("<strike>", "");
            elements[index] = element[index].replace("</strike>", "");
            document.querySelector(".element").style.background = "#000000"
        }else
            elements[index] = "<strike class='strike'>" + elements[index] + "</strike>";
            display();
            console.log(elements)
}