
function show_content(content,btn){

  content_all = document.getElementsByClassName('content-show')
  btn_all = document.getElementsByClassName('btn-show')
  content_display = document.getElementById(content)
  for (i=0;i<content_all.length;i++){
    content_all[i].style.display='none';
    btn_all[i].style.opacity="50%";
  }
content_display.style.display='block';
btn.style.opacity='100%'
}
show_content("content-a",document.getElementById('btn-a'))
