'use strict';
(function(){ 
	// Zapiszemy sobei w zmiennej odwołanie do elementu z id="infos", w którym będziemy wyświetlać komunikaty po kliknięciu markera. 
	
	var infos = document.getElementById('infos');
	
	// Definiujemy funkcję initMap tak samo jak wcześniej. 
	
  	window.initMap = function() {
		// Zdefiniujemy parę dodatkowych współrzędnych dla dodatkowych markerów. 
		var uluru = {lat: 54.4638349, lng: 16.9815319};
		var coords2 = {lat: 54.4482773, lng: 16.9760142};
		var coords3 = {lat: 54.4535139, lng: 17.0571890};
		
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 12,
			center: uluru
		});
		
		var markerOne = new google.maps.Marker({
			position: uluru,
			map: map
		});
		
		// Po dodaniu markera możemy użyć jego metody addListener:
		
		markerOne.addListener('click', function(){
			// Wewnątrz funcji wpisujemy kod, który ma się wykonać po kliknięciu markera. W tym przykładzie wyświetlimy tekst na stronie. 
			infos.innerHTML = 'You clicked markerOne';
		});		
		
		// Dodajemy jeszcze dwa markery, aby sprawdzić czy na pewno kliknięcie każdego z nich wyświetli inny tekst. 
		
		var markerTwo = new google.maps.Marker({
			position: coords2,
			map: map
		});

		markerTwo.addListener('click', function(){
			infos.innerHTML = 'You clicked markerTwo';
		});		
		
		var markerThree = new google.maps.Marker({
			position: coords3,
			map: map
		});
		
		markerThree.addListener('click', function(){
			infos.innerHTML = 'You clicked markerThree';
		});	
		
		// Oczywiście, w takim przypadku dużo lepiej by było zastosować pętlę do zdefiniowania wielu markerów, niż powtarzać prawie identyczny kod. To jednak będzie już za chwilę częścią Twojego zadania!
		
	}; 
	
})();