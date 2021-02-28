function updateChampions(){
	var gameWrapper = document.getElementsByClassName("GameItemWrap");
	for(var i = 0; i < gameWrapper.length; i++){
		var championImage = gameWrapper[i].getElementsByClassName("Image16 __sprite tip");
		var summonerName = gameWrapper[i].getElementsByClassName("SummonerName")
		for(var j = 0; j < championImage.length; j++){
			var ele = document.createElement("span")
			ele.innerHTML = championImage[j].innerHTML
			ele.style.position = "absolute"
			ele.style.fontSize = "8px"
			ele.style.color = "rgba(0,0,0,0)"
			summonerName[j].appendChild(ele)
			championImage[j].innerHTML = ""
		}
	}
}

function updateButtons(){
	var button = document.getElementsByClassName("GameMoreButton Box")
	for(var i = 0; i < button.length; i++){
		button[i].children[0].addEventListener("click", function(){
			//problem that this runs before opgg has had time to generate new button
			//cheap workaround using delay
			setTimeout(() => {updateButtons(), updateChampions()},2000)
		})
	}
}
updateButtons()
updateChampions()
