let darkmode = localStorage.getItem("darkmode")
const trocatema = document.getElementById("trocatema")

const ligadodarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const desligadodarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'inactive')
}

if(darkmode === "active"){
    ligadodarkmode()
}

trocatema.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    
    if(darkmode === "active"){
        desligadodarkmode()
    }
    
    else {
        ligadodarkmode()
    }
})
