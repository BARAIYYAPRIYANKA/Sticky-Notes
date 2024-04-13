let title = document.getElementById("title");
let color = document.getElementById("color");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let Notes = document.getElementById("notes")

btn.addEventListener("click",() =>{
   let inputTitle = title.value ;
   let inputColor = color.value ; 
   let inputText = text.value ; 
//    console.log(inputTitle,inputColor,inputText);

let div = document.createElement("div");
div.innerHTML =
` <p>${inputTitle}</p>
<textarea name="" id="text" class="note-text" cols="30" rows="10" style="background-color:${inputColor} ;">${inputText}</textarea>
<div>
<button class="edit-btn">✏️</button>
<button class="delete-btn">❌</button>
</div>

`
Notes.appendChild(div);
title.value = "";
color.value = "";
text.value = "";

let deleteBtn = div.querySelector('.delete-btn');
deleteBtn.addEventListener('click', () => {
    div.remove();
});

let editBtn = div.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
        let textArea = div.querySelector('.note-text');
        textArea.disabled = false;
        textArea.focus();
    });
})