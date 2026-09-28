let element = document.getElementById("searchbutton");

element.addEventListener("click", search);

function addelement(querystring){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "result");
    
    const newContent = document.createTextNode("The input value is: " + querystring);
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

function search(){
    // remove previous search result
    const element = document.getElementById("result");
    if (element){
      element.remove();
    }
    // new search
    let querystring = document.getElementById("searchbar").value;
    console.log("The input value is: " + querystring);
    addelement(querystring)
}
