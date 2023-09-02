// create an empty array
var bucketList = []

//create variable to select the list tag
var listContainer = document.querySelector("#list-container")

function addValues(){
    // taking input from input field
    var value = document.querySelector("#input-field").value
    //pushing it inside the array
    bucketList.push(value)
    //display the list
    displayList()
}

function displayList(){

    listContainer.innerHTML = ""

    for(let i=0;i<bucketList.length;i++){
        var li = document.createElement("li")
        //inserting li elements
        li.innerHTML= bucketList[i] + `<span><img onclick="remove(`+i+`)" src = "https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"></span>`

        listContainer.append(li)
    }
}

function reset(){
    bucketList=[]
    
    alert("List Is Cleared")
    
    displayList()
}

function remove(i){
    alert(
        bucketList[i] +
        " Task is Done🚀 " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        " " +
        new Date().getDate() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getFullYear()
        );
    
    bucketList.splice(i,1)

    displayList()
}