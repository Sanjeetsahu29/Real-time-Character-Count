const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");
remainingCounter.innerText = textareaEl.getAttribute("maxlength")
textareaEl.addEventListener("keyup",()=>{
    updateCounter();
})

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounter.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}