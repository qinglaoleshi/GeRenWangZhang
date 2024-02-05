const box=document.getElementById('rainBox');
let boxHeinght=box.clientHeight;
let boxWidth=box.clientWidth;
// 页面大小随之只改变，无聊
window.onresize=function(){
    boxHeinght=box.clientHeight;
    boxWidth=box.clientWidth;
}
// 每隔一段时间，发生变化
setInterval(()=>{
    const rain=document.createElement('div');
    rain.classList.add('rain');
    rain.style.top=0
    // 随机雨点位置
    rain.style.left=Math.random()*boxWidth+'px';
    // 随机雨点透明度
    rain.style.opacity=Math.random();
    box.appendChild(rain);
    // 每隔一段时间，雨点下落
    let race=1;
    const timer=setInterval(()=>{
        if(parseInt(rain.style.top)>boxHeinght){
            clearInterval(timer);
            box.removeChild(rain);
        }
        race++;
        rain.style.top=parseInt(rain.style.top)+race+'px'

    }
    ,1)
}
, )