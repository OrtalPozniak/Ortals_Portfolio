console.log("into");

function CreateProduct() {

    var InputProduct = document.getElementById("newinput").value;
    console.log(InputProduct);
    if (InputProduct != "") {
        var NewItemList = document.createElement("li");
        NewItemList.innerHTML = InputProduct;
        document.getElementById("mylist").appendChild(NewItemList);
        document.getElementById("newinput").value = "";
        document.getElementById("newinput").style.borderBottom = "3px solid silver";
    } else {
        document.getElementById("newinput").style.borderBottom = "3px solid red";
    }
}

function DeleteProduct() {
    document.getElementById("mylist").innerHTML = "";
}