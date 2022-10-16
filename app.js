const img = document.querySelectorAll("img")

img.forEach(element => element.addEventListener("click", ()=> {
    open(element.src,'_self')
}));