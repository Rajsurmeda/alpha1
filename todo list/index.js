let inputbx=document.querySelector('#inputbx');
let list = document.querySelector('#list');

inputbx:Element.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        addItem(this.value)
        this.value=""
    }
})

let addItem = (inputbx) =>{
    let listItem=Document.createElement("li");
    listItem.innerHTML=`${inputbx}<i><i>`;

        list.appendChild(listItem);
}