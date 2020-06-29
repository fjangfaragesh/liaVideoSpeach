<!--

@ets.reset
<script>
build_program = [];
</script>
@end

@ets.run
<script>
window.setTimeout(function() {emanager.runProgram(build_program)},1);
</script>
@end

@ets.wait
<script>
build_program.push(new WaitProgramLine(@0));
</script>
@end

@ets.newYTPlayer
<script>
build_program.push(new NewPlayerProgramLine( "@0" , @1, @2, "@3"));
</script>
@end

@ets.waitYTVTime
<script>
build_program.push(new WaitForPositionProgramLine("@0", @1));
</script>
@end

@ets.seekYTV
<script>
build_program.push(new SeekProgramLine("@0", @1));
</script>
@end

@ets.playYTV
<script>
build_program.push(new PlayProgramLine("@0"));
</script>
@end

@ets.pauseYTV
<script>
build_program.push(new PauseProgramLine("@0"));
</script>
@end

@ets.changeYTV
<script>
build_program.push(new LoadVideoProgramLine("@0","@1"));
</script>
@end

@ets.say
<script>
build_program.push(new TextToSpeachProgramLine(`@0`,"@1",false));
</script>
@end

-->
# Makros
*** ACHTUNG! ***
Steuerzeichen oder falsche Zahlenformate können Script

Automatisches Starten von Videos funktioniert nur, wenn der Browsertab aktiv ist!
Sollte es nicht funktionieren, muss manuell auf play gedrückt werden.


## ETS vorbereiten:

`ets.reset()`

## ETS starten:

(Am ende)

`ets.run()`

## Warten:

`ets.wait(milliSeconds)`

## Neuer YT Player

Das div mit der Id playerId zum Video Player machen:

`ets.newYTPlayer(playerId,width,height,videoId)`

## Warten bis Videozeitpunkt erreicht

`ets.waitYTVTime(playerId, timeSeconds)`

## Video vor/zurück spulem

`ets.seekYTV(playerId, timeSeconds)`

## Video pausieren

`ets.pauseYTV(playerId)`

## Video abspielen

`ets.playYTV(playerId)`

## Video Ändern

`ets.changeYTV(playerId,videoId)`

## Text zu sprache

`ets.say(text, language)`
