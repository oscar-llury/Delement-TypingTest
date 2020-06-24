window.onload=function(){
    this.main();
}
function restart(){
    document.getElementById('score').style.display="none";
    document.getElementById("txt").disabled = false;
    document.getElementById('timer').style.display="none";
    document.getElementById('txt').value="";
    var text = document.getElementById('dis');
    text.style.display="none";
    var max = text.children.length;
    for(i=0;i<max;i++){
        text.removeChild(document.getElementById(i));
    }
    text.style.display="block";
    main();
}
function main(){
    var init = true;
    var wpm=0;
    var correct=0;
    var wrong = 0;
    var tst=0;
    var contWords=0;
    var newWords=50;
    var msg="de la que el en y a los se del las un por con no una su para es al lo como más o pero sus le ha me si sin sobre este ya entre cuando todo está ser son dos también fue había era muy años hasta desde está mi porque qué sólo han yo hay vez puede todos así nos ni parte tiene él uno donde bien tiempo mismo ese ahora cada vida otro después te otros aunque esa eso hace otra gobierno tan durante siempre día tanto ella tres sí dijo sido gran país según menos mundo año antes estado contra sino forma caso nada hacer general estaba poco estos presidente mayor ante unos les algo hacia casa ellos ayer hecho primera mucho mientras además quien momento millones esto España hombre están pues hoy lugar Madrid nacional trabajo otras mejor nuevo decir algunos entonces todas días debe política cómo casi toda tal luego pasado primer medio va estas sea tenía nunca poder aquí ver veces embargo partido personas grupo cuenta pueden tienen misma nueva cual fueron mujer frente José tras cosas fin ciudad he social manera tener sistema será historia muchos juan tipo cuatro dentro nuestro delement";
    var arr = msg.split(' ');
function addWord(numWord,numChild){
    var sp = document.createElement("span");
    sp.setAttribute("id",numChild);
    sp.innerHTML=arr[numWord]+" ";
    document.getElementById('dis').appendChild(sp);
}
function lu_dis(bool){
    var rand = Math.floor((Math.random() * 200));
    if(bool){
        for(i=0;i<50;i++){
            addWord(rand,i);
            rand = Math.floor((Math.random() * 200));
        }
    }else{
        addWord(rand,newWords);
        newWords = newWords+1;
    }
}
lu_dis(true);
document.getElementById('txt').onkeydown = function(){
    if(init){
       document.getElementById('timer').style.display="inline-block";
       timer();
       init = false;
    }
    var key = event.keyCode;
    if (key==32) {
        lu_tst();
        percentage();
        if(contWords>=40){
            lu_dis(false);
        }
    } 
}
function lu_high(tst){
    document.getElementById(tst).setAttribute("class","highlete");
}
function lu_tst(){
    var msg=document.getElementById('dis').innerText;
    var arr1 = msg.split(' ');
    var chk=document.getElementById('txt').value;
    var chk=chk.trim();
    console.log(chk.length);
    var key = event.keyCode;
    if(arr1[tst]==chk){
        document.getElementById('txt').value = ""; 
        document.getElementById(tst).setAttribute("class","crt");
        correct=correct+1;
        wpm=wpm+1;
        tst=tst+1;
        contWords=contWords+1;
    }else{
        if(chk.length>1){
            document.getElementById('txt').value = "";
            document.getElementById(tst).setAttribute("class","wrg");
            wrong=wrong+1;
            tst=tst+1;
            contWords=contWords+1;
            //wpm=wpm+1;
        }
    }
    lu_high(tst);
}
function percentage(){
    var ep=(correct*100/(correct+wrong));
    //var per=100-ep;
    ep =  ep.toFixed(2);
    document.getElementById('wpm').innerHTML=wpm;
    if((correct+wrong)>0){
        document.getElementById('acc').innerHTML=ep;
    }else{
        document.getElementById('acc').innerHTML=0;
    }
}
function timer(){
    var timer=60;
    var tim= setInterval( function(){
        if(timer==1){
            clearInterval(tim);
            document.getElementById('score').style.display="block";
            document.getElementById("txt").disabled = true;
            document.getElementById('dis').style.display="none";
            document.getElementById('cw').innerHTML=correct;
            document.getElementById('ww').innerHTML=wrong;
        }
        timer=timer-1;
        document.getElementById('timer').innerHTML=timer;
    },1000);
}
}