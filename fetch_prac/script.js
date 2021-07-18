const getData = (url)=>{
    fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data[0].url))
        .catch(err=>console.log(err))
}

const url = "https://picsum.photos/v2/list"
const content = document.querySelector('#content')

const getDataUsingAsync = async (url)=>{
    
    try{
        const res = await fetch(url)
        const data = await res.json()
        const links = data.map(link=>link.download_url)
        for(let i=0;i<links.length;i++){
            let img = document.createElement("img")
            img.setAttribute("width","200px")
            img.setAttribute("height","200px")
            img.setAttribute("src",links[i])
            content.appendChild(img)
        }
    }catch(err){
        console.log(err)
        
    }
   
    }
getDataUsingAsync(url)



