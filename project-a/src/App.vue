<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    setsize(){
        let docEl = document.documentElement,    
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',    
            recalc = function () {    
            var clientWidth = docEl.clientWidth;    
            if (!clientWidth) return;    
            docEl.style.fontSize = clientWidth * (100 / 1280) + 'px';    
        };    
        if (!document.addEventListener) return;    
        window.addEventListener(resizeEvt, recalc, false);    
        document.addEventListener('DOMContentLoaded', recalc, false);   
    }
  },
  mounted(){
    this.setsize()
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@charset "utf-8";
/* reset */
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
  padding: 0;
  margin: 0;
  -webkit-text-size-adjust:none;/*chrome下9px字体问题*/
}
fieldset, img {
  border: 0;
  
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
ol, ul {
  list-style: none;
}
address, caption, cite, code, dfn, em, strong, th, var {
  font-weight: normal;
  font-style: normal;
}
caption, th {
  text-align: left;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-size: 100%;
}
q:before, q:after {
  content: '';
}
abbr, acronym {
  border: 0;
}
a {
  text-decoration: none;
  color: #000;
}
input, button, textarea, select, optgroup, option {
  font-family:inherit;
  font-size:inherit;
  font-style:inherit;
  font-weight:inherit;
}
button {
  border: none 0;
  cursor: pointer;
  vertical-align: middle
}
input[type=radio] {
  border: none 0
}
input:focus, textarea:focus {
  outline-width:0
}
button::-moz-focus-inner {
 border:0;
 padding:0;
 margin:0;
}/*ff下偏差一像素*/
button a {
  color: #FFF
}
textarea {
  resize: vertical;
  border: 1px solid #bababa;
}
input {
  /*border: 1px solid #bababa;*/
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  padding: 2px;
  color: #666;/*vertical-align: middle*/
}
.clearfix:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
/*input:focus, textarea:focus {
  border: 1px solid #77b2fb;
  box-shadow: 0px 0px 4px #77b2fb;
  -webkit-box-shadow: 0px 0px 4px #77b2fb;
  -moz-box-shadow: 0px 0px 4px #77b2fb;
}*/
select {
/*vertical-align:middle;*/
}
i {
  font-style: normal
}
html {
  font-family: '微软雅黑';
  background: #252c35;
  color:#fff;
  
}
body{font-size: 14px;}
.clearfix:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

</style>
