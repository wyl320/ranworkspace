window.onload = function(){
          if((screen.width == 1680) && (screen.height == 1050)){
              document.getElementById('medquie').href = 'static/style/bigscreen.css';
          }else if ((screen.width == 1280) && (screen.height == 800)){
              document.getElementById('medquie').href = 'static/style/small.css' ;
          }else if((screen.width == 1280) && (screen.height == 1024)){
              document.getElementById('medquie').href = 'static/style/small2.css' ;
          }else{
            console.log("ccc")
          }
}
