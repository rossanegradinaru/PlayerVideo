window.onload = function(e) {
    var lista = ["media/dessert.mp4", "media/apple.mp4","media/food.mp4","media/vegetables.mp4"];
    var index = 0;
    var nrVideo = lista.length;
    var video = document.getElementById("video");



    function playVideo (videoPoz) {
        document.getElementById("video").setAttribute("src",lista[videoPoz]);
        document.getElementById("video").load();
        document.getElementById("video").play();
    }

    document.getElementById("video").addEventListener('ended',handler,false);
    playVideo(0);


    function handler(){
        index++;
        if(index == nrVideo){
            index=0;
            playVideo(index);
        }else{
            playVideo(index);
        }
    }

    let btn1 = document.getElementById("btnVideo1");
    let btn2 = document.getElementById("btnVideo2");
    let btn3 = document.getElementById("btnVideo3");
    let btn4 = document.getElementById("btnVideo4");

    btn1.addEventListener("click",function(){
        index=0;
        playVideo(0);
    });

    btn2.addEventListener("click",function(){
        index=1;
        playVideo(1);
    });

    btn3.addEventListener("click",function(){
        index=2;
        playVideo(2);
    });

    btn4.addEventListener("click",function(){
        index=3;
        playVideo(3);
    });

    var videoInput = document.getElementById("file");

    videoInput.addEventListener('change', (e) => {
        e.preventDefault();
       let path = window.URL.createObjectURL(e.target.files[0]);
       nrVideo++;
       lista.push(path);
       console.log(lista);
       video.src = path;
      
    });
   
};