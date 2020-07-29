"use strict"
const jogo = [];
var i = 1;
const win = (winner) => {
    $("#msg").removeClass("alert alert-warning").addClass("alert alert-success");
    $("#msg").text(`O jogador ${winner} ganhou!!!`);
    $(".bloco").unbind();
    var r= $('<input type="button" id="btn-restart" value="Jogar novamente"/>');
    $(".result").append(r);
    $("#btn-restart").click(function(){
        window.location.reload()
    });
};


const check = () => {
    i = (i == 1? 2:1); 
    $("#msg").text(`Vez do jogador ${i}`);
    if(jogo[0]==jogo[1]&&jogo[1]==jogo[2]&&jogo[0]!=undefined){
       return win(jogo[0]);
    };  
    if(jogo[0]==jogo[3]&&jogo[3]==jogo[6]&&jogo[0]!=undefined){
        return win(jogo[0]);
    };
    if(jogo[0]==jogo[4]&&jogo[4]==jogo[8]&&jogo[0]!=undefined){
        return win(jogo[0]);
    };
    if(jogo[2]==jogo[4]&&jogo[4]==jogo[6]&&jogo[2]!=undefined){
        return win(jogo[2]);
    };
    if(jogo[6]==jogo[7]&&jogo[7]==jogo[8]&&jogo[6]!=undefined){
        return win(jogo[6]);
     };
    if(jogo[2]==jogo[5]&&jogo[5]==jogo[8]&&jogo[2]!=undefined){
        return win(jogo[2]);
    };
    if(jogo[3]==jogo[4]&&jogo[4]==jogo[5]&&jogo[3]!=undefined){
        return win(jogo[3]);
    };
    if(jogo[1]==jogo[4]&&jogo[4]==jogo[7]&&jogo[1]!=undefined){
        return win(jogo[1]);
    };
};

$(function(){
    $(".bloco").click(function(){
        var bg = $(this).css("background-image");
        if(bg == "none" || bg == "")
        {          
            var fig = "url(" + i.toString() + ".jpg)";
            $(this).css("background", fig);
            let k = +this.id;
            jogo[k-1]=i;
            check();
        }
    });
    
    
});