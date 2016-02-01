(function( $, undefined ) {

	// important variables

	var localStorage = window.localStorage,
			elementId = "cards",
			listChildren = "div",
			numOfCards = $("#" + elementId).children().length,
			boxopened = firstOpened = "",
			found = 0,
			tierdaten = {
				'adler' : {
					'name'								: 'Adler',
					'plainName'						: 'Adler',
					'familie'							: 'Habichtartige',
					'lateinischer_name'		: 'Hieraaetus spilogaster',
					'bestand'							: 'ungefährdet, keine konkreten Zahlen',
					'groesse'							: 'Körperlänge bis zu 60 Zentimeter, Flügelspannweite bis zu 1,5 Meter',
					'gewicht'							: '1 bis 2 Kilogramm',
					'lebensalter'					: '20 bis 40 Jahre',
					'ernaehrung'					: 'Fleischfresser',
					'besondere_merkmale'	: 'lange kräftige Beine, langer Schwanz, brüten in über 3000 Meter Höhe'
				},
				'antilope' : {
					'name'								: 'Antilope',
					'plainName'						: 'Antilope',
					'familie'							: 'Gazellen',
					'lateinischer_name'		: 'Gazella',
					'bestand'							: 'leicht bis nicht gefährdet',
					'groesse'							: '0,85 bis 1,7 Meter lang, 0,5 bis 1,1 Meter groß',
					'gewicht'							: '12 bis 85 Kilogramm',
					'lebensalter'					: 'bis zu 10 Jahre',
					'ernaehrung'					: 'Gräser und Kräuter (Vegetarier)',
					'besondere_merkmale'	: 'schlank, langbeinig, Fellunterseite weiß, oben braun bis gelblich-grau, spitze Hörner'
				},
				'bueffel' : {
					'name'								: 'Büffel',
					'plainName'						: 'Bueffel',
					'familie'							: 'Hornträger',
					'lateinischer_name'		: 'Syncerus caffer',
					'bestand'							: 'in vielen Ländern ausgedünnt durch die Rinderpest und Einschränkung des Lebensraum wegen dichter Besiedelung durch Menschen',
					'groesse'							: 'bis zu 1,7 Meter hoch, Körperlänge bis zu 3,4 Meter',
					'gewicht'							: 'bis zu 1 Tonne',
					'lebensalter'					: '20 bis 30 Jahre',
					'ernaehrung'					: 'Grasfresser',
					'besondere_merkmale'	: 'Hörner'
				},
				'dromedar' : {
					'name'								: 'Dromedar',
					'plainName'						: 'Dromedar',
					'familie'							: 'Kamele',
					'lateinischer_name'		: 'Camelus dromedarius',
					'bestand'							: 'mehr als 1 Million',
					'groesse'							: 'Körperlänge 2,4 bis 3,2 Meter, Höhe 1,8 bis 2,3 Meter',
					'gewicht'							: '300 bis 700 Kilogramm',
					'lebensalter'					: '35 bis 40 Jahre',
					'ernaehrung'					: 'Pflanzenfresser',
					'besondere_merkmale'	: 'langer Hals, Höcker als Fettspeicher für Energie und Flüssigkeit, können bis zu 17 Tage ohne Wasser auskommen'
				},
				'elefant' : {
					'name'								: 'Elefant',
					'plainName'						: 'Elefant',
					'familie'							: 'Elefanten',
					'lateinischer_name'		: 'Loxodonta africana',
					'bestand'							: 'ungefähr 470.000',
					'groesse'							: 'Höhe bis zu 4 Meter, Körperlänge bis zu 7 Meter',
					'gewicht'							: 'bis zu 7,5 Tonnen',
					'lebensalter'					: 'bis zu 70 Jahre',
					'ernaehrung'					: 'Pflanzenfresser',
					'besondere_merkmale'	: 'größtes an Land lebendes Säugetier, Rüssel, große Ohren, zwei Stoßzähne'
				},
				'erdmaennchen' : {
					'name'								: 'Erdmännchen',
					'plainName'						: 'Erdmaennchen',
					'familie'							: 'Mangusten',
					'lateinischer_name'		: 'Suricata suricatta',
					'bestand'							: 'keine zuverlässigen Schätzungen über Populationsgröße',
					'groesse'							: '24 bis 29 Zentimeter, Schwanzlänge 19 bis 24 Zentimeter',
					'gewicht'							: 'bis zu 1 Kilogramm',
					'lebensalter'					: '5 bis 12 Jahre',
					'ernaehrung'					: 'Fleischfresser',
					'besondere_merkmale'	: 'Kolonie besitzt eigenen Bau'
				},
				'geier' : {
					'name'								: 'Geier',
					'plainName'						: 'Geier',
					'familie'							: 'Habichtartige',
					'lateinischer_name'		: 'Gyps africanus',
					'bestand'							: 'ungefähr 270.000',
					'groesse'							: 'Körperlänge 78 bis 90 Zentimeter, Flügelspannweite 2 bis 2,3 Meter',
					'gewicht'							: '4 bis 7 Kilogramm',
					'lebensalter'					: '25 bis 30 Jahre',
					'ernaehrung'					: 'Aasfresser',
					'besondere_merkmale'	: 'lange Flügel, kreisen in Höhen von 200 bis 500 Meter'
				},
				'giraffe' : {
					'name'								: 'Giraffe',
					'plainName'						: 'Giraffe',
					'familie'							: 'Giraffenartige',
					'lateinischer_name'		: 'Giraffa camelopardalis',
					'bestand'							: 'manche Unterarten vom Aussterben bedroht',
					'groesse'							: 'bis zu 6 Meter hoch',
					'lebensalter'					: '25 bis 35 Jahre',
					'gewicht'							: '500 bis 800 Kilogramm',
					'ernaehrung'					: 'Zweige und Blätter (Pflanzenfresser)',
					'besondere_merkmale'	: 'langer Hals, geflecktes Fell, 2 Hörner am Kopf'
				},
				'gorilla' : {
					'name'								: 'Gorilla',
					'plainName'						: 'Gorilla',
					'familie'							: 'Menschenaffen',
					'lateinischer_name'		: 'Gorilla gorilla',
					'bestand'							: '100.000',
					'groesse'							: '1,25 bis 1,75 Meter',
					'gewicht'							: 'Weibchen 70 is 90, Männchen bis zu 200 Kilogramm',
					'lebensalter'					: '35 bis 40 Jahre',
					'ernaehrung'					: 'Pflanzenfresser',
					'besondere_merkmale'	: 'größte lebende Primaten, kein Schwanz, unverwechselbarer Fingerabdruck, Werkzeuggebrauch mit Hilfe eines Stocks um Tiefe von Gewässern zu bestimmen'
				},
				'hyaene' : {
					'name'								: 'Hyäne',
					'plainName'						: 'Hyaene',
					'familie'							: 'Hyänen',
					'lateinischer_name'		: 'Hyaenida',
					'bestand'							: 'rückläufig, nicht gefährdet, Gesamtpopulation ca. 50.000',
					'groesse'							: '55 bis 160 Zentimeter lang, 45 bis 81 Zentimeter groß',
					'gewicht'							: '26 bis 55 Kilogramm',
					'lebensalter'					: 'bis zu 10 Jahre',
					'ernaehrung'					: 'Fleisch (selbst gejagt und geklaut), Aas',
					'besondere_merkmale'	: 'gestreiftes, geflecktes oder einfarbiges Fell, buschiger Schwanz, spitze Ohren'
				},
				'loewe' : {
					'name'								: 'Löwe',
					'plainName'						: 'Loewe',
					'familie'							: 'Katze',
					'lateinischer_name'		: 'Panthera leo',
					'bestand'							: '16.000 bis 30.000',
					'groesse'							: 'Kopf-Rumpf-Länge 1,7 bis 2,5 Meter, Schulterhöhe bis zu 1,2 Meter, Schwanzlänge bis zu 1 Meter',
					'gewicht'							: '150 bis 225 Kilogramm',
					'lebensalter'					: '12 bis 15 Jahre',
					'ernaehrung'					: 'Fleischfresser',
					'besondere_merkmale'	: 'markante Mähne, größtes Landraubtier Afrikas'
				},
				'nashorn' : {
					'name'								: 'Nashorn',
					'plainName'						: 'Nashorn',
					'familie'							: 'Nashörner',
					'lateinischer_name'		: 'Rhinocerotidae',
					'bestand'							: 'vom Aussterben bedroht',
					'groesse'							: 'bis zu 3,8 Meter lang, bis zu 1,8 Meter groß',
					'gewicht'							: '0,5 bis 3,6 Tonnen',
					'lebensalter'					: '30 bis 50 Jahre',
					'ernaehrung'					: 'Blätter, Äste, Knospen und Früchte (Vegetarier)',
					'besondere_merkmale'	: 'großer Schädel, nach vorn gewölbtes Nasenbein mit 2 Hörnern, kurze Beine'
				},
				'schimpanse' : {
					'name'								: 'Schimpanse',
					'plainName'						: 'Schimpanse',
					'familie'							: 'Menschenaffen',
					'lateinischer_name'		: 'Pan',
					'bestand'							: 'keine zuverlässigen Schätzungen über Populationsgröße',
					'groesse'							: 'Kopf-Rumpf-Länge 64 bis 94 Zentimeter, Höhe aufrechtstehend 1 bis 1,7 Meter',
					'gewicht'							: 'Weibchen 25 bis 50, Männchen 35 bis 70 Kilogramm',
					'lebensalter'					: 'bis zu 50 Jahre in menschlicher Obhut',
					'ernaehrung'					: 'Allesfresser, überwiegend Pflanzen',
					'besondere_merkmale'	: 'kein Schwanz, benutzen Steine oder Holzstücke als Hammer'
				},
				'skorpion' : {
					'name'								: 'Skorpion',
					'plainName'						: 'Skorpion',
					'familie'							: 'Buthidae',
					'lateinischer_name'		: 'Androctonus australis',
					'bestand'							: 'keine zuverlässigen Schätzungen über Populationsgröße',
					'groesse'							: '6 bis 8 Zentimeter',
					'gewicht'							: 'bis zu 60 Gramm',
					'lebensalter'					: '3 bis 8 Jahre',
					'ernaehrung'					: 'Fleischfresser',
					'besondere_merkmale'	: 'zählt zu den giftigsten Tieren der Welt, sehr aggressiv, stroh- bis ockergelb'
				},
				'wuestenfuchs' : {
					'name'								: 'Wüstenfuchs',
					'plainName'						: 'Wuestenfuchs',
					'familie'							: 'Wüstenfüchse',
					'lateinischer_name'		: 'Vulpes Zerda',
					'bestand'							: 'keine zuverlässigen Schätzungen',
					'groesse'							: 'Kopf-Rumpf-Länge bis zu 40 Zentimeter, Schwanz bis zu 25 Zentimeter lang',
					'gewicht'							: 'bis zu 1,5 Kilogramm',
					'lebensalter'					: 'in Gefangenschaft bis zu 14 Jahre, freilebend unbekannt',
					'ernaehrung'					: 'Allesfresser',
					'besondere_merkmale'	: 'nacht- und dämmerungsaktiv, große Ohren'
				},
				'zebra' : {
					'name'								: 'Zebra',
					'plainName'						: 'Zebra',
					'familie'							: 'Pferde',
					'lateinischer_name'		: 'Equus Quagga',
					'bestand'							: 'Grevy- und Bergzebra stark gefährdet, Steppenzebra nicht gefährdet',
					'groesse'							: '2 bis 3 Meter lang, 1 bis 1,6 Meter groß',
					'gewicht'							: '180 bis 450 Kilogramm',
					'lebensalter'					: 'bis zu 20 Jahre',
					'ernaehrung'					: 'Pflanzen und Gräser',
					'besondere_merkmale'	: 'schwarz-weiße Streifen'
				}
			};

			if (localStorage.getItem("numberOfWins") === null) {
				localStorage.setItem("numberOfWins", 0);
			}

	// helper functions

	// removes array elements from a specific range
	// @see: http://ejohn.org/blog/javascript-array-remove/

	Array.prototype.remove = function(from, to) {
		var rest = this.slice((to || from) + 1 || this.length);
		this.length = from < 0 ? this.length + from : from;
		return this.push.apply(this, rest);
	}

	// returns random number between to integers
	// @see: http://www.admixweb.com/2010/08/24/javascript-tip-get-a-random-number-between-two-integers/

	function randomFromTo(from, to, even) {
		var randomNumber = Math.floor(Math.random() * (to - from + 1) + from);
		if (even) {
			return ((randomNumber % 2) === 0) ? randomNumber : randomNumber - 1 ;
		} else {
			return randomNumber;
		}
	}

	// shuffle memory cards

	function shuffle() {

		var numOfCardsArray = [],
			result = [],
			element = $("#" + elementId + " > :nth-child(1)");

		var dataArray = [
			["1", "1a"],["1", "1b"],["2", "2a"],["2", "2b"],["3", "3a"],["3", "3b"],["4", "4a"],["4", "4b"],
			["5", "5a"],["5", "5b"],["6", "6a"],["6", "6b"],["7", "7a"],["7", "7b"],["8", "8a"],["8", "8b"],
			["9", "9a"],["9", "9b"],["10", "10a"],["10", "10b"],["11", "11a"],["11", "11b"],["12", "12a"],["12", "12b"],
			["13", "13a"],["13", "13b"],["14", "14a"],["14", "14b"],["15", "15a"],["15", "15b"],["16", "16a"],["16", "16b"]
		];

		// fill array with image sources
		for (var i = 0; i < numOfCards; i++) {
			numOfCardsArray.push(dataArray[i]);
		}

		for (var i = 0; i < numOfCards; i++) {
			var x = randomFromTo(0, numOfCardsArray.length - 1, true);
			result.push(numOfCardsArray[x], numOfCardsArray[x + 1]);
			numOfCardsArray.remove(x, x + 1);
			// set id on elements
			$(element).attr("id", i);
			element = element.next();
		}

		result.remove(12, result.length - 1);

		// random shuffle for array items
		result = result.sort(function() { return 0.5 - Math.random() });

		for (var i = 0; i < result.length; i++) {
			// set classes and data ids
			$("#" + i + " " + listChildren).attr("class", result[i][0]);
			$("#" + i + " " + listChildren).attr("data-id", result[i][1]);
		}

		$("#cards li:gt(11)").hide();

	}

	function resetGame() {
		shuffle();
		$("#" + elementId + " " + listChildren).hide();
		$("#" + elementId + " " + listChildren).removeClass("opacity");
		found = 0;
		$("#found").html("");
		boxopened = firstOpened = "";
		return false;
	}

	function openCard() {

		var id = $(this).attr("id");

		if ($("#" + id + " " + listChildren).is(":hidden")) {
			$("#" + elementId + " li").unbind("click", openCard);

			$("#" + id + " " + listChildren).slideDown('slow', 'linear');

			// first choice

			if (firstOpened == "") {
				boxopened = id;
				firstOpened = $("#" + id + " " + listChildren).attr("class");
				setTimeout(function() {
					$("#" + elementId).children().bind("click", openCard)
				}, 300);
			}

			// second choice

			else {

				secondOpened = $("#" + id + " " + listChildren).attr("class");

				// if they’re not the same: error!

				if (firstOpened != secondOpened) {
					setTimeout(function() {
						$("#" + id + " " + listChildren).slideUp('normal');
						$("#" + boxopened + " " + listChildren).slideUp('normal');
						boxopened = firstOpened = "";
					}, 400);
				}

				// if they’re same: success!

				else {
					$("#" + id + " " + listChildren).addClass("opacity");
					$("#" + boxopened + " " + listChildren).addClass("opacity");
					found++;
					boxopened = firstOpened = "";
				}

				setTimeout(function() {
					$("#" + elementId + " li").bind("click", openCard);
				}, 400);

			}

			if (found == 6) {
				localStorage.setItem("numberOfWins", (+localStorage.getItem("numberOfWins") + 1));
				$('.giraffeMain').attr('data-length', +localStorage.getItem("numberOfWins"));
				soundManager.play('tada',{volume:50});
				if (+localStorage.getItem("numberOfWins") === 10) {
					$(".zweig").attr("data-length", 1);
					localStorage.setItem("numberOfWins", 0);
					soundManager.play('cheering',{volume:50});
					setTimeout(function() { $('.giraffeMain').attr('data-length', 0); }, 5000);
					setTimeout(function() { $(".zweig").attr("data-length", 0); }, 4000);
				}
			}

		}

	}

	$(document).ready(function() {

		// Geräusche zuordnen

		$.fn.shuffle = function() {

		    var allElems = this.get(),
		        getRandom = function(max) {
		            return Math.floor(Math.random() * max);
		        },
		        shuffled = $.map(allElems, function(){
		            var random = getRandom(allElems.length),
		                randEl = $(allElems[random]).clone(true)[0];
		            allElems.splice(random, 1);
		            return randEl;
		       });

		    this.each(function(i){
		        $(this).replaceWith($(shuffled[i]));
		    });

		    return $(shuffled);

		};

		function geraeusche() {

			$("#geraeusche-zuordnen input:radio").attr({'disabled':false, 'checked': false});
			$("#geraeusche-zuordnen li").removeClass("success").removeClass("error");
			var animalNamesArray =
				[
					["Gorilla", "Gorilla"],
					["Giraffe", "Giraffe"],
					["Wüstenfuchs", "Wuestenfuchs"],
					["Zebra", "Zebra"],
					["Büffel", "Bueffel"],
					["Hyäne", "Hyaene"],
					["Antilope", "Antilope"],
					["Nashorn", "Nashorn"],
					["Adler", "Adler"],
					//["Skorpion", "Skorpion"],
					["Erdmännchen", "Erdmaennchen"],
					["Geier", "Geier"],
					["Schimpanse", "Schimpanse"],
					["Dromedar", "Dromedar"],
					["Elefant", "Elefant"],
					["Löwe", "Loewe"]
				],
				headAnimal,
				animal1,
				animal2,
				animal2Plain,
				animal3,
				animal3Plain;

			var x = randomFromTo(0, animalNamesArray.length - 1);
			headAnimal = animalNamesArray[x][0];
			animal1 = animalNamesArray[x][1];
			animalNamesArray.remove(x, x);

			var y = randomFromTo(0, animalNamesArray.length - 1);
			animal2Plain = animalNamesArray[y][0];
			animal2 = animalNamesArray[y][1];
			animalNamesArray.remove(y, y);

			var z = randomFromTo(0, animalNamesArray.length - 1);
			animal3Plain = animalNamesArray[z][0];
			animal3 = animalNamesArray[z][1];
			animalNamesArray.remove(z, z);

			if (headAnimal === "Giraffe" || headAnimal === "Hyäne" || headAnimal === "Antilope") {
				var artikel = "eine";
			} else {
				var artikel = "ein";
			}

			var questions = [
				"Wir hört sich " + artikel + " <span>" + headAnimal + "</span> an?",
				"Wie klingt " + artikel + " <span>" + headAnimal + "</span>?",
				"Was für ein Geräusch macht " + artikel + " <span>" + headAnimal + "</span>?",
				"Welches Geräusch macht " + artikel + " <span>" + headAnimal + "</span>?"
			];

			$('#geraeusche-zuordnen h3').html(questions[randomFromTo(0, questions.length - 1)]);
			$('#geraeusche-zuordnen li:nth-child(1) a').html(animal1).attr("data-animal", headAnimal);
			$('#geraeusche-zuordnen li:nth-child(2) a').html(animal2).attr("data-animal", animal2Plain);
			$('#geraeusche-zuordnen li:nth-child(3) a').html(animal3).attr("data-animal", animal3Plain);

			$('#geraeusche-zuordnen li').shuffle();

			return false;
		}

		geraeusche();

		$('#geraeusche-zuordnen a[href="#reload"]').click(function() {
			if($("#geraeusche-zuordnen ul a").hasClass("shakeIt")) {
				$("#geraeusche-zuordnen ul a").removeClass("shakeIt");
			}
			geraeusche();
			$("#geraeusche-zuordnen ul a").addClass("shakeIt");
			return false;
		});

		$("#geraeusche-zuordnen input:radio").change(function() {
			$("#geraeusche-zuordnen input:radio").attr('disabled',true);
			if ($(this).next().attr("data-animal") == $('#geraeusche-zuordnen h3 span').html()) {
				localStorage.setItem("numberOfWins", (+localStorage.getItem("numberOfWins") + 1));
				$('.giraffeMain').attr('data-length', +localStorage.getItem("numberOfWins"));
				soundManager.play('tada',{volume:50});
				if (+localStorage.getItem("numberOfWins") === 10) {
					$(".zweig").attr("data-length", 1);
					localStorage.setItem("numberOfWins", 0);
					soundManager.play('cheering',{volume:50});
					setTimeout(function() { $('.giraffeMain').attr('data-length', 0); }, 5000);
					setTimeout(function() { $(".zweig").attr("data-length", 0); }, 4000);
				}
				$(this).parent().addClass("success");
			} else {
				soundManager.play('error',{volume:50});
				$(this).parent().addClass("error");
			}
		});

		// Schattenspiel

		function formenErkennen() {

			$("#formen-erkennen input:radio").attr({'disabled':false, 'checked': false});
			$("#formen-erkennen li").removeClass("success").removeClass("error");
			var animalNamesArray =
				[
					["Gorilla", "Gorilla"],
					["Giraffe", "Giraffe"],
					["Wüstenfuchs", "Wuestenfuchs"],
					["Zebra", "Zebra"],
					["Büffel", "Bueffel"],
					["Hyäne", "Hyaene"],
					["Antilope", "Antilope"],
					["Nashorn", "Nashorn"],
					["Adler", "Adler"],
					["Skorpion", "Skorpion"],
					["Erdmännchen", "Erdmaennchen"],
					["Geier", "Geier"],
					["Schimpanse", "Schimpanse"],
					["Dromedar", "Dromedar"],
					["Elefant", "Elefant"],
					["Löwe", "Loewe"]
				],
				headAnimal,
				animal1,
				animal2,
				animal2Plain,
				animal3,
				animal3Plain;

			var x = randomFromTo(0, animalNamesArray.length - 1);
			headAnimal = animalNamesArray[x][0];
			animal1 = animalNamesArray[x][1];
			animalNamesArray.remove(x, x);

			var y = randomFromTo(0, animalNamesArray.length - 1);
			animal2Plain = animalNamesArray[y][0];
			animal2 = animalNamesArray[y][1];
			animalNamesArray.remove(y, y);

			var z = randomFromTo(0, animalNamesArray.length - 1);
			animal3Plain = animalNamesArray[z][0];
			animal3 = animalNamesArray[z][1];
			animalNamesArray.remove(z, z);

			if (headAnimal === "Giraffe" || headAnimal === "Hyäne" || headAnimal === "Antilope") {
				var artikel = "eine";
			} else {
				var artikel = "ein";
			}

			var questions = [
				"Erkennst du dieses Tier?",
				"Was für ein Tier ist das?",
				"Welches Tier hat diese Form?"
			];

			$('#formen-erkennen h3').html(questions[randomFromTo(0, questions.length - 1)]);

			$('#formen-erkennen img').attr({"src": "setup/img/tiere/" + animal1.toLowerCase() + "-schatten.png", "alt": headAnimal});

			$('#formen-erkennen li:nth-child(1) span').html(headAnimal).attr("data-animal", headAnimal);
			$('#formen-erkennen li:nth-child(2) span').html(animal2Plain).attr("data-animal", animal2Plain);
			$('#formen-erkennen li:nth-child(3) span').html(animal3Plain).attr("data-animal", animal3Plain);

			$('#formen-erkennen li').shuffle();

			return false;
		}

		formenErkennen();

		$('#formen-erkennen a[href="#reload"]').click(function() {
			if($("#formen-erkennen ul span").hasClass("shakeIt")) {
				$("#formen-erkennen ul span").removeClass("shakeIt");
			}
			formenErkennen();
			$("#formen-erkennen ul span").addClass("shakeIt");
			return false;
		});

		$("#formen-erkennen input:radio").change(function() {
			$("#formen-erkennen input:radio").attr('disabled',true);
			if ($(this).next().attr("data-animal") == $('#formen-erkennen img').attr("alt")) {
				localStorage.setItem("numberOfWins", (+localStorage.getItem("numberOfWins") + 1));
				$('.giraffeMain').attr('data-length', +localStorage.getItem("numberOfWins"));
				soundManager.play('tada',{volume:50});
				if (+localStorage.getItem("numberOfWins") === 10) {
					$(".zweig").attr("data-length", 1);
					localStorage.setItem("numberOfWins", 0);
					soundManager.play('cheering',{volume:50});
					setTimeout(function() { $('.giraffeMain').attr('data-length', 0); }, 5000);
					setTimeout(function() { $(".zweig").attr("data-length", 0); }, 4000);
				}
				$(this).parent().addClass("success");
			} else {
				soundManager.play('error',{volume:50});
				$(this).parent().addClass("error");
			}
		});

		// Input-Spiel

		function inputSpiel() {

			$("#input input").attr('disabled',false);
			$("#input form").removeClass("success");
			 $('#input input').val("");
			var animalNamesArray =
				[
					["Gorilla", "Gorilla"],
					["Giraffe", "Giraffe"],
					["Wüstenfuchs", "Wuestenfuchs"],
					["Zebra", "Zebra"],
					["Büffel", "Bueffel"],
					["Hyäne", "Hyaene"],
					["Antilope", "Antilope"],
					["Nashorn", "Nashorn"],
					["Adler", "Adler"],
					["Skorpion", "Skorpion"],
					["Erdmännchen", "Erdmaennchen"],
					["Geier", "Geier"],
					["Schimpanse", "Schimpanse"],
					["Dromedar", "Dromedar"],
					["Elefant", "Elefant"],
					["Löwe", "Loewe"]
				],
				gameArray =
				[
					"img",
					"eigenschaften",
					"schatten",
					"sound"
				],
				headAnimal,
				animal1,
				game;

			var x = randomFromTo(0, animalNamesArray.length - 1);
			headAnimal = animalNamesArray[x][0].toLowerCase();
			animal1 = animalNamesArray[x][1].toLowerCase();
			animalNamesArray.remove(x, x);

			var y = randomFromTo(0, gameArray.length - 1);
			game = gameArray[y];

			if (game === "img") {
				$(".game").html("<img src='setup/img/tiere/" + animal1 + ".jpg' data-animal='" + headAnimal + "'>");
			} else if (game === "eigenschaften") {
				$(".game").html("<img src='setup/img/tiere/" + animal1 + "-eigenschaften.png' data-animal='" + headAnimal + "'>");
			} else if (game === "schatten") {
				$(".game").html("<img src='setup/img/tiere/" + animal1 + "-schatten.png' data-animal='" + headAnimal + "'>");
			} else if (game === "sound" && animal1 !== "Skorpion") {
				$(".game").html("<a class='icon sound' href='#sound' data-animal='" + headAnimal + "'>" + animal1 + "</a>");
			} else {
				inputSpiel();
			}



			return false;
		}

		inputSpiel();

		$('#input a[href="#reload"]').click(function() {

			inputSpiel();

			return false;
		});

		$("#input input").bind("keyup webkitspeechchange", function() {
		  if($(this).val().toLowerCase() === $('#input .game *').attr("data-animal").toLowerCase()) {
		  	$("#input input").attr('disabled',true);
			localStorage.setItem("numberOfWins", (+localStorage.getItem("numberOfWins") + 1));
				$('.giraffeMain').attr('data-length', +localStorage.getItem("numberOfWins"));
				soundManager.play('tada',{volume:50});
				if (+localStorage.getItem("numberOfWins") === 10) {
					$(".zweig").attr("data-length", 1);
					localStorage.setItem("numberOfWins", 0);
					soundManager.play('cheering',{volume:50});
					setTimeout(function() { $('.giraffeMain').attr('data-length', 0); }, 5000);
					setTimeout(function() { $(".zweig").attr("data-length", 0); }, 4000);
				}
				$(this).parent().addClass("success");
	      }

		});




		impress().init();
		$('.giraffeMain').attr('data-length', +localStorage.getItem("numberOfWins"));

		resetGame();

		$("#" + elementId).children().click(openCard);

		$("#reset").click(function() {
			if($("#cards li").hasClass("shakeIt")) {
				$("#cards li").removeClass("shakeIt");
			}
			resetGame();
			$("#cards li").addClass("shakeIt");
			return false;
		});

		soundManager.onready(function() {

			var s = soundManager.createSound({
				id:'backgroundMusic',
				url:'setup/mp3/musik.mp3'
			}),

			gorilla = soundManager.createSound({
				id:'gorilla',
				url:'setup/mp3/gorilla.mp3'
			}),

			schimpanse = soundManager.createSound({
				id:'schimpanse',
				url:'setup/mp3/schimpanse.mp3'
			}),

			dromedar = soundManager.createSound({
				id:'dromedar',
				url:'setup/mp3/dromedar.mp3'
			}),

			hyaene = soundManager.createSound({
				id:'hyaene',
				url:'setup/mp3/hyaene.mp3'
			}),

			adler = soundManager.createSound({
				id:'adler',
				url:'setup/mp3/adler.mp3'
			}),

			nashorn = soundManager.createSound({
				id:'nashorn',
				url:'setup/mp3/nashorn.mp3'
			}),

			zebra = soundManager.createSound({
				id:'zebra',
				url:'setup/mp3/zebra.mp3'
			}),

			loewe = soundManager.createSound({
				id:'loewe',
				url:'setup/mp3/loewe.mp3'
			}),

			geier = soundManager.createSound({
				id:'geier',
				url:'setup/mp3/geier.mp3'
			}),

			erdmaennchen = soundManager.createSound({
				id:'erdmaennchen',
				url:'setup/mp3/erdmaennchen.mp3'
			}),

			elefant = soundManager.createSound({
				id:'elefant',
				url:'setup/mp3/elefant.mp3'
			}),

			bueffel = soundManager.createSound({
				id:'bueffel',
				url:'setup/mp3/bueffel.mp3'
			}),

			antilope = soundManager.createSound({
				id:'antilope',
				url:'setup/mp3/antilope.mp3'
			}),
			wuestenfuchs = soundManager.createSound({
				id:'wuestenfuchs',
				url:'setup/mp3/wuestenfuchs.mp3'
			}),
			giraffe = soundManager.createSound({
				id:'giraffe',
				url:'setup/mp3/giraffe.mp3'
			}),
			tada = soundManager.createSound({
				id:'tada',
				url:'setup/mp3/tada.mp3'
			}),
			error = soundManager.createSound({
				id:'error',
				url:'setup/mp3/error.mp3'
			}),
			cheering = soundManager.createSound({
				id:'cheering',
				url:'setup/mp3/cheering.mp3'
			});

			function loopSound(sound) {
				sound.play({
					onfinish: function() {
						loopSound(sound);
					}
				});
			}

			loopSound(s);

			$('body').on("click", "a.video", function() {
				soundManager.setVolume('backgroundMusic', 10);
			});

			$('body').on("click", "a.closeVideo", function() {
				soundManager.setVolume('backgroundMusic', 100);
			});

			$('body').on("click", "a[href='#sound']", function() {
				var animal = tierdaten[$(this).html().toLowerCase()].plainName.toLowerCase();

				soundManager.setVolume('backgroundMusic', 10);
				soundManager.play( animal, {
					multiShotEvents: true,
					onfinish: function() {
						soundManager.setVolume('backgroundMusic', 100);
					}
				} );
				return false;
			});

			$( '#mainSound a.music' ).click(function(){
				soundManager.togglePause( 'backgroundMusic' );
				$( this )
					.toggleClass( 'paused' )
					.html( ($(this).html() === 'Audio pausieren') ? 'Audio abspielen' : 'Audio pausieren' );
				return false;
			});

		});

		$('.aux-breadcrumb a').click(function() {
			window.history.back();
			soundManager.setVolume('backgroundMusic', 100);
			$('.tierdaten div.videothings').remove();

			$('.tiersteckbrief, .giraffeHelp').removeClass("show");
			$('.giraffeMain').removeClass("showGiraffeOnHelp");

			return false;
		});

		$('body').on("hover", ".giraffeHelp.show ul", function() {
		       $(".showGiraffeOnHelp").toggleClass('giraffeAnimation');
		       $(".showZweigOnHelp").toggleClass('showZweig');
		});

		$("body").on("click", "a[href='#help']", function() {
			$(".giraffeHelp").toggleClass("show");
			$(".giraffeMain").toggleClass("showGiraffeOnHelp");
			$(".zweig").toggleClass("showZweigOnHelp");

			$(this).toggleClass('help').toggleClass('close');

			$(".giraffeHelp.show li").html("Dein Spielstand: <strong>" + localStorage.getItem("numberOfWins") + " von 10</strong><br><i>Nur noch " + (10 - (+localStorage.getItem("numberOfWins"))) + " Mal gewinnen, dann kriegt Gerald sein Essen!</i>");

			$(".impress-on-intro .giraffeHelp.show .bubble p").html("Kommst du nicht weiter? Kleiner Tipp: Hast du deine Reise überhaupt schon <strong>gestartet</strong>? Versuch’s mal mit dem großen Knopf in der Mitte.");
			$(".impress-on-mainMenu .giraffeHelp.show .bubble p").html("<strong>Entdecke</strong> die exotischen Tiere Afrikas, oder stelle dein Wissen beim <strong>Spielen</strong> unter Beweis. Egal wie du dich entscheidest, du kannst jederzeit hierher zurückkehren.");
			$(".impress-on-entdecken .giraffeHelp.show .bubble p").html("Klicke auf eine der drei Regionen, deren Bewohner du kennen lernen möchtest.");
			$(".impress-on-wueste .giraffeHelp.show .bubble p,.impress-on-savanne .giraffeHelp.show .bubble p,.impress-on-dschungel .giraffeHelp.show .bubble p").html("Erfahre Wissenswertes über ein Tier und seine Artgenossen und hör’ dir seine Stimme an, indem du es anklickst. Keine Angst, die beißen nicht!");
			$(".impress-on-spielen .giraffeHelp.show .bubble p").html("Mmmh … die Blätter da oben sehen aber lecker aus! Bring’ meinen Hals zum Wachsen, indem du die Spiele erfolgreich absolvierst. Ich habe großen Hunger!");
			$(".impress-on-bilder-erraten .giraffeHelp.show .bubble p").html("Kennst du schon alle Merkmale der Tiere? Teste hier dein Wissen, indem du die Tiere ihren Eigenschaften zuordnest.");
			$(".impress-on-formen-erkennen .giraffeHelp.show .bubble p").html("Erkennst du die Tiere auch an ihrem Schatten? Klicke einfach den richtigen Namen des Tieres an.");
			$(".impress-on-geraeusche-zuordnen .giraffeHelp.show .bubble p").html("Weißt du wie sich ein Löwe oder ein Gorilla anhört? Finde hier das richtige Geräusch. Hör’ genau hin!");
			$(".impress-on-input .giraffeHelp.show .bubble p").html("Kombiere alles was du bisher gelernt hast und finde die richtige Antwort. Trage den Namen des Tieres ein, wenn du es erkennst.");

			return false;
		});

		/* Tiersteckbriefe */

		$('.tiersteckbriefe a').click(function() {

			var tier = $(this).attr('class');

			$('.tiersteckbrief')
				.addClass("show")
				.html(
					'<div class="inner">' +
						'<a href="#video" class="video">' + tierdaten[tier].plainName + '</a>' +
						'<a href="#landkarte" class="landkarte">' + tierdaten[tier].plainName.toLowerCase() + '</a>' +
						'<div class="tierdaten">' +
						'<div class="sound"><img src="setup/img/tiere/' + tierdaten[tier].plainName.toLowerCase() + '.jpg"><a class="icon sound" href="#sound">' + tierdaten[tier].plainName + '</a></div>' +

						'<h1>' + tierdaten[tier].name + '</h1>' +
						'<ul>' +
							'<li><strong>Familie:</strong> ' + tierdaten[tier].familie + '</li>' +
							'<li><strong>Lateinischer Name:</strong> ' + tierdaten[tier].lateinischer_name + '</li>' +
							'<li><strong>Bestand:</strong> ' + tierdaten[tier].bestand + '</li>' +
							'<li><strong>Größe:</strong> ' + tierdaten[tier].groesse + '</li>' +
							'<li><strong>Gewicht:</strong> ' + tierdaten[tier].gewicht + '</li>' +
							'<li><strong>Lebensalter:</strong> ' + tierdaten[tier].lebensalter + '</li>' +
							'<li><strong>Ernährung:</strong> ' + tierdaten[tier].ernaehrung + '</li>' +
							'<li><strong>Besondere Merkmale:</strong> ' + tierdaten[tier].besondere_merkmale + '</li>' +
						'</ul>' +
					'</div>'
				);
			$('.tiersteckbrief').append('<img style="z-index: 10002; position: absolute;right: .5em;bottom: .5em;" src="setup/img/tiere/' + tierdaten[tier].plainName.toLowerCase() + '-groessenvergleich.png">');

		});


		// video

		$('body').on("click", ".video", function() {
			$('.tierdaten').append('<div class="videothings"><a class="icon close closeVideo" href="#closevideo">Video schließen</a><video controls><source src="setup/video/' + $(this).html() + '.ogg" type="video/ogg"><source src="setup/video/' + $(this).html() + '.mp4" type="video/mp4"></video></div>');
			$('.landkarte, .video').hide();
			$('.tierdaten').css('background-image', 'none');
			return false;
		});

		//landkarte

		$('body').on("click", ".landkarte", function() {
			$('.tierdaten').append('<div class="videothings2"><a class="icon close closeVideo" href="#closevideo">Video schließen</a><img src="setup/img/tiere/' + $(this).html() + '-landkarte.jpg"></div>');
			$('.landkarte, .video').hide();
			$('.tierdaten').css('background-image', 'none');
			return false;
		});


		$('body').on("click", ".closeVideo", function() {
			$('.tierdaten div.videothings, .tierdaten div.videothings2').remove();
			$('.landkarte, .video').show();
			$('.tierdaten').css('background-image', 'url(setup/img/zettel_quer.png)');
			return false;
		});

		// Mahlzeit ändert sich je nach Uhrzeit

		var currentHour = new Date().getHours();

		if ( currentHour >= 18 || currentHour <= 3 ) {
			$('.bubble span').html('Abendessen');
		} else if ( currentHour >= 3 && currentHour <= 10 ) {
			$('.bubble span').html('Frühstück');
		} else if ( currentHour >= 10 && currentHour <= 14 ) {
			$('.bubble span').html('Mittagessen');
		} else if ( currentHour >= 14 && currentHour <= 18 ) {
			$('.bubble span').html('Snack');
		}

	}); // ready-Event

})( jQuery );