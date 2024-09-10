const input = document.querySelector(".input")
const listitem = document.querySelector(".item")
let list = []
const todoApp = {
    addFun(){
     if(input.value){
      list.push(input.value)
      input.value=""
     }
     this.itzFun()
    },
    itzFun(){
        listitem.innerHTML=""
        list.forEach((value)=>{
            listitem.innerHTML += `<li>${value}</li>`
        })
    },
}