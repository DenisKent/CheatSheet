function hideId(id){
  document.getElementById(id).style.display='none';
}

function hideClassExceptId(clss,id){
  let elem = document.getElementsByClassName(clss);
  for(let i=0;i < elem.length;i++)
  {
    elem[i].style.display='none';
    if (elem[i] == document.getElementById(id)){
      elem[i].style.display='block';
    }
    // window.alert(elem[i]);
  }
}
