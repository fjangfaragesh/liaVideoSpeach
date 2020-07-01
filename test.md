<!--

import: https://raw.githubusercontent.com/fjangfaragesh/liaVideoSpeach/dev/makros.md
script: https://raw.githubusercontent.com/fjangfaragesh/liaVideoSpeach/dev/ets.js

author:   Fabian Bär
language: en
narrator: US English Male

-->

# Nur ein Test

Nur ein Test von Entertaiment Manager

## YouTube Test

<div id="player1"></div>

<!-- id="etsCode" style="display:none" -->
@ets.reset()
@ets.newYTPlayer(player1,640,360)
@ets.changeYTV(player1,YOneAeBz8BQ)
@ets.wait(4000)
@ets.pauseYTV(player1)
@ets.seekYTV(player1,50)
@ets.sayAwait(Falls das Video nicht automatisch startet bitte manuell auf Play klicken.,Deutsch Male)
@ets.playYTV(player1)
@ets.say(Hallo Welt. Ich zeige euch ein Video,Deutsch Male)
@ets.waitYTVTime(player1,55)
@ets.pauseYTV(player1)
@ets.say(Sekunde 55 erreicht. Video wurde Pausiert. Es wird 12 Sekunden gewartet und dann zurück zu Sekunde 52 gespult.,Deutsch Male)
@ets.wait(12000)
@ets.seekYTV(player1,52)
@ets.playYTV(player1)
@ets.wait(1000)
@ets.sayAwait(Schönes Video. Genießte es bitte. Das Video läuft solange weiter wie ich hier Rede. Wegen dem Makto Syntax sind keine Kommas in dem Text erlaubt den ich vorlese. Aber das wird hoffentlich bald irgendwie anders gelöst. Aber jetzt ist mal schluss! ,Deutsch Male)
@ets.pauseYTV(player1)
@ets.say(Genug von diesem Video. Als nächstes schauen wir ein anderes,Deutsch Male)
@ets.changeYTV(player1,PD2XgQOyCCk)
@ets.pauseYTV(player1)
@ets.wait(8000)
@ets.playYTV(player1)
@ets.seekYTV(player1,8)
@ets.say(Wunderschön. Schaut hin. Schaut nicht weg! Bleibt konzentriert. Echt schönes Video! Wirklich gut!,Deutsch Male)
@ets.waitYTVTime(player1,30)
@ets.say(Wunderschöne Spiralen,Deutsch Male)
@ets.waitYTVTime(player1,50)
@ets.say(So viele Details. Bitte weiter schauen!,Deutsch Male)
@ets.waitYTVTime(player1,60)
@ets.pauseYTV(player1)
@ets.changeYTV(player1,79EvGkXHF9I)
@ets.sayAwait(So jetzt schauen wir uns Katzenvideos an. Katzen sind verückte Wesen die dumm tun aber in Wirklichkeit schlauer und unterhaltsamer als handelsübliche Staubsaugroboter sind.,Deutsch Male)
@ets.seekYTV(player1,24)
@ets.playYTV()
@ets.sayAwait(naja manchmal machen sie nicht das was sie sollen,Deutsch Male)
@ets.waitYTVTime(player1,30)
@ets.seekYTV(player1,36)
@ets.sayAwait(Katzen sind sehr geschickte Tierchen. Sie sind perfekte kletterer.,Deutsch Male)
@ets.waitYTVTime(player1,64)
@ets.sayAwait(Und sie behalten immer einen kühlen Kopf.,Deutsch Male)
@ets.waitYTVTime(player1,68)
@ets.seekYTV(player1,88)
@ets.sayAwait(Und sie sind immer freundlich.,Deutsch Male)
@ets.waitYTVTime(player1,93)
@ets.seekYTV(player1,100)
@ets.waitYTVTime(player1,118)
@ets.muteYTV(player1)
@ets.seekYTV(player1,190)
@ets.sayAwait(Genug für heute! Danke für Ihre Aufmerksamkeit. Aufwiedersehen!,Deutsch Male)
@ets.pauseYTV(player1)
@ets.run()

<input type="button" value="START" onclick="eval(document.getElementById('etsCode').innerHTML)">
