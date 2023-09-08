
const insert = document.getElementById("insert");

document.addEventListener('keydown',(elem)=>{
    insert.innerHTML = `
    <div class='key'>${elem.key}</div>
    <small>key</small>
    <div class='key'>${elem.keyCode}</div>
    <small>keyCode</small>
    <div class='key'>${elem.code}</div>
    <small>key</small>`
})