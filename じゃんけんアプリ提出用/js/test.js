// ここからコードを書きます🤗
$("#a").on("click", function () {
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");

//グー

if (random === 0){
    $("h2").html("guu");
    $("h3").html("あいこ");
    $('#enemychoice').html('<img src="ドクタープライス_グー.jpeg" " alt="グー">' );
 console.log("guu")
}
else if (random === 1){
    $("h2").html("chee");
    $("h3").html("かち");
    $('#enemychoice').html('<img src="テレプシコーラ_チー.jpeg" " alt="チー">' );
console.log("chee")
}
else if (random === 2){
    $("h2").html("paa");
    $("h3").html("まけ");
    $('#enemychoice').html('<img src="カイト_パー.jpeg" " alt="パー">' ); 

    console.log("paa")
}
    
});

// チー

$("#b").on("click", function () {
    //alert(111);
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");

if (random === 0){
    $("h2").html("guu");
    $("h3").html("まけ");
    $('#enemychoice').html('<img src="ドクタープライス_グー.jpeg" " alt="グー">' );

    console.log("guu")
}else if (random === 1){
    $("h2").html("chee");
    $("h3").html("あいこ");
    $('#enemychoice').html('<img src="テレプシコーラ_チー.jpeg" " alt="チー">' );

    console.log("chee")
}else if (random === 2){
    $("h2").html("paa");
    $("h3").html("かち");
    $('enemychoice').html('<img src="カイト_パー.jpeg" " alt="パー">' );

    console.log("paa")
}
    
});

// パー

$("#c").on("click", function () {
    //alert(111);
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");

if (random === 0){
    $("h2").html("guu");
    $("h3").html("かち");
    $('#enemychoice').html('<img src="ドクタープライス_グー.jpeg" " alt="グー">' );

    console.log("guu")
}else if (random === 1){
    $("h2").html("chee");
    $("h3").html("まけ");
    $('#enemychoice').html('<img src="テレプシコーラ_チー.jpeg" " alt="チー">' );


    console.log("chee")
}else if (random === 2){
    $("h2").html("paa");
    $("h3").html("あいこ");
    $('#enemychoice').html('<img src="カイト_パー.jpeg" " alt="パー">' );

    console.log("paa")
}
    
});