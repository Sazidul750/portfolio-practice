export const scroollToSection=(goTo)=>{
    document.querySelector("#"+goTo).scrollIntoView({behavior:"smooth"})
}