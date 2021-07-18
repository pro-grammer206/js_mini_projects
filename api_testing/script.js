const hall = document.querySelector('.hall')
const btn  = document.querySelector('#btn')
btn.addEventListener('click',async ()=>{
    const getData = async ()=>{
        const url = 'https://randomuser.me/api/'
        const res = await fetch(url)
        const {results} = await res.json()
        const p = document.createElement('p')
        const pic = document.createElement('img')
        const card = document.createElement('div')
        card.setAttribute('class','cards')
        p.textContent = results[0].name.first
        pic.setAttribute('src',results[0].picture.large)
        pic.setAttribute('alt','image')
        card.appendChild(pic)
        card.appendChild(p)
        hall.appendChild(card)
    }
    getData()
})

