function showTab(e, tabId) {

	var tabContent = document.getElementsByClassName('tabcontent');
	var tablinks = document.getElementsByClassName('tabLink');

	var i;

	for (i= 0; i < tabContent.length; i++) {
	  	  tabContent[i].style.display = 'none';
	 	} 

	 for(var i=0;i<tabContent.length;i++){
		tablinks[i].className = tablinks[i].className.replace(" active", " inactive");
		}
	
	  tabContent[tabId].style.display = "block";
	  e.currentTarget.className = e.currentTarget.className.replace(" inactive", " active");
}
	
	hideEl();

	body.onload = function(){
		document.getElementById('defOpen').onclick().className += " active";
	}
	function hideEl(){
		document.getElementById('best').style.display = "none";
		document.getElementById('popular').style.display = "none";
	}