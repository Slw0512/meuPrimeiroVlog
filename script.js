//botão curtidas 
document.addEventListener("DOMcontentLoaded", () => {
    const LikeBtn = document.querySelector ("left.actions.action.btn:first.child");
    if (LikeBtn) return;
    const LikeSvg = LikeBtn.querySelector("svg");


    //localiza o contador 

    let textNode = array.from(LikeBtn.childNodes).find(node) => node.nodeType
    === node.TEXT_NODE&& node.textContent.trim() !==""
});

//zera o contador 
let cont = 0; 

//atualiza
if(textNode){
    textNode.textContent = `0`
}

//coração
function appLykedStyle (){
likeSvg.style.fill = "#ef4444";
likeSvg.style.stroke = "#ef4444"
likeSvg.style.color = "#ef4444"

    
//efeito curtida
likeSvg.style.transform = "scale(1.3)";
setTimeout(() => (likeSvg.style.transform = "scale(1)")150);




}