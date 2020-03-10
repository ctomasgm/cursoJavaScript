var array=[];
ul=document.getElementById("list")

const getList = () => array.forEach((element)=> {

    let li = document.createElement("li");
    li.innerHTML +=element;
    ul.appendChild(li);
})

const addElement = () => {
    ul.innerHTML="";
    array.push(document.getElementById("text").value);
}





