<!--

import: https://raw.githubusercontent.com/fjangfaragesh/liaVideoSpeach/master/makros.md
script: https://raw.githubusercontent.com/fjangfaragesh/liaVideoSpeach/master/ets.js

author:   Fabian Bär
language: en
narrator: US English Male

-->

# Nur ein Test

Nur ein Test von Entertaiment Manager

## YouTube Test

<div id="player1"></div>
<script>
@ets.reset()
@ets.newYTPlayer(player1,640,360,YOneAeBz8BQ)
@ets.seekYTV(player1,50)
@ets.playYTV(player1)
@ets.say(Hallo Welt. Ich zeige euch ein Video,Deutsch Male)
@ets.waitYTVTime(player1,55)
@ets.pauseYTV(player1)
@ets.say(Sekunde 55 erreicht. Video wurde Pausiert. Es wird 20 Sekunden gewartet und dann zurück zu Sekunde 52 gespult.,Deutsch Male)
@ets.wait(20000)
@ets.seekYTV(player1,52)
@ets.playYTV(player1)
@ets.wait(1000)
@ets.say(Schönes Video,Deutsch Male)
@ets.waitYTVTime(player1,60)
@ets.pauseYTV(player1)
@ets.say(Genug von diesem Video. Als nächstes schauen wir ein anderes,Deutsch Male)
@ets.changeYTV(player1,PD2XgQOyCCk)
@ets.wait(8000)
@ets.seekYTV(player1,8)
@ets.say(Wunderschön. Schaut hin. Schaut nicht weg! Bleibt konzentriert. Echt schönes Video! Wirklich gut!,Deutsch Male)
@ets.waitYTVTime(player1,20)
@ets.pauseYTV(player1)
@ets.say(Genug! Aufwiedersehen!,Deutsch Male)
@ets.run()
</script>
