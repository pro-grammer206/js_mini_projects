const ele = document.querySelector('.items')
const inventory = []
const para = document.createElement('p')
const paras = document.querySelectorAll('.cart-items')

function renderInventory(cart){

    const cartrender = document.querySelector('.cart')
    while(cartrender.hasChildNodes()){
        cartrender.removeChild(cartrender.firstChild)
    }
    const lim = JSON.parse(cart)
    lim.forEach((e)=>{
      const p1 = document.createElement('span')
      const p2 = document.createElement('span')
      const sec = document.createElement('section')
      const rem = document.createElement('button')
      rem.textContent = 'remove'
      sec.classList.add('list')
      p1.classList.add('cart-items')
      p2.classList.add('cart-price') 
      p1.textContent = e.name
      p2.textContent = e.price
      sec.appendChild(p1)
      sec.appendChild(p2)
      sec.appendChild(rem)
      cartrender.appendChild(sec)
    })
     
}

var products = []
fetch('./data.json')
.then(res=>res.json())
.then(({data})=>{
    let products = data.products
    products.forEach((prod,index,array)=>{
       const d =  document.createElement('div')
       const p1 =document.createElement('p')
       const p2 =document.createElement('p')
       const p3 =document.createElement('p')
       const buy =document.createElement('button')
       buy.innerText='Buy'
       buy.setAttribute('class','btn')
       p1.setAttribute('class','title')
       d.setAttribute('class','card')
       p1.textContent = prod.name
       p2.textContent = prod.price
       p3.textContent = prod.desc
       d.appendChild(p1)
       d.appendChild(p2)
       d.appendChild(p3)
       d.appendChild(buy)

       ele.appendChild(d)
       buy.addEventListener('click',(e)=>{
           const price=e.target.previousSibling.previousSibling;
           const name= e.target.previousSibling.previousSibling.previousSibling
           const product = {price:price.textContent,name:name.textContent}
           inventory.push(product)
           localStorage.setItem('inventory',JSON.stringify(inventory))
           renderInventory(localStorage.getItem('inventory'))
       })

    })
})
.catch(err=>console.log(err))

