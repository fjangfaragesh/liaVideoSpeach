<!--

@ets.reset
console.log("ets.reset");
build_program = [];
@end

@ets.run
console.log("ets.run");
window.setTimeout(function() {emanager.runProgram(build_program)},1);
@end

@ets.wait
build_program.push(new WaitProgramLine(@0));
@end

@ets.newYTPlayer
build_program.push(new NewPlayerProgramLine( "@0" , @1, @2, "@3"));
@end

@ets.waitYTVTime
build_program.push(new WaitForPositionProgramLine("@0", @1));
@end

@ets.seekYTV
build_program.push(new SeekProgramLine("@0", @1));
@end

@ets.playYTV
build_program.push(new PlayProgramLine("@0"));
@end

@ets.pauseYTV
build_program.push(new PauseProgramLine("@0"));
@end

@ets.changeYTV
build_program.push(new LoadVideoProgramLine("@0","@1"));
@end

@ets.say
build_program.push(new TextToSpeachProgramLine("@0","@1",false));
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
