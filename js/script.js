
const banner = document.querySelector("#banner")
const bar = document.querySelector("#bar")
const btnSlider = document.querySelector(".btnSlider")
const interval = null;
let changeTime = 0
let images = []
let currentImage = 0
let time




const lazyLoading = ()=>{
let image = 1

    for(let i =0;i<=5;i++){
        images[i] = new Image()
        images[i].src = `img/image0${image}.png`
        image++
    }
}


const loadImage = (image)=>{

    banner.style.backgroundImage = `url(${images[image].src})`
    banner.style.backgroundRepeat = "no-repeat"
    banner.style.backgroundPosition = "center"
    banner.style.backgroundSize = "800px 450px"

    banner.addEventListener("click",(e)=>{
    
        const computedStyle = window.getComputedStyle(banner)
        const backImage = computedStyle.getPropertyValue("background-image")
        const article = backImage.substring(backImage.length - 8, backImage.length - 6)
        window.location.href = `pages/articles/article${article}.html`
    })
   



    
}

const changeImage = (dir)=>{

    btnSlider.addEventListener("click",(e)=>{
        console.log(e)
    })

    currentImage+=dir
    if(currentImage > images.length -1){
        currentImage = 0
    }

    if(currentImage<0){
        currentImage = images.length-1
    }
    changeTime = 0
    loadImage(currentImage)
}

const animate = ()=>{
    changeTime++

    if(changeTime >= 500){
        changeTime = 0
        changeImage(1)
    }


    time = changeTime / 5

    bar.style.width = `${time}%`

    requestAnimationFrame(animate)


}

const init = ()=>{
    lazyLoading() 
    loadImage(currentImage)
    animate()

   

}


init()

