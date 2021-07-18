const content = document.getElementById('content')
const btn = document.getElementById('btn1')
const form1 = document.getElementById('uform')
const ul = document.createElement('ul')
//console.log(form1)
form1.onsubmit = (e)=>{
    e.preventDefault()
    const value=e.target[0].value
    const ele = document.createElement('li')
    content.appendChild(ul)
    ele.textContent = value
    ul.appendChild(ele)
    
}



btn.addEventListener('click',(e)=>{
    console.log(e.currentTarget.textContent)

})

const ele = document.createElement('p')
ele.textContent="This is a paragaraph element" 
const ele2 = document.createElement('h2')
ele2.innerText="This is a h2 element"
ele2.style.color='teal'
content.appendChild(ele2)
content.appendChild(ele)
console.log(content.children)