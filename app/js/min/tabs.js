function showTab(e,t){var a=document.getElementsByClassName("tabcontent"),n=document.getElementsByClassName("tabLink");for(l=0;l<a.length;l++)a[l].style.display="none";for(var l=0;l<a.length;l++)n[l].className=n[l].className.replace(" active"," inactive");a[t].style.display="block",e.currentTarget.className=e.currentTarget.className.replace(" inactive"," active")}function hideEl(){document.getElementById("best").style.display="none",document.getElementById("popular").style.display="none"}hideEl(),body.onload=function(){document.getElementById("defOpen").onclick().className+=" active"};