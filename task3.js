const btn = document.getElementById('btn')

let count = 1
btn.addEventListener('click', ()=>{
    btn.innerHTML = `${count} times clicked`
    count++
})