<!--

@ets.reset
console.log("ets.reset");
var build_program = [];
@end

@ets.run
console.log("ets.run");
window.setTimeout(function() {emanager.runProgram(build_program)},1);
@end

@ets.wait
build_program.push(new WaitProgramLine(@0));
@end

@ets.newYTPlayer
build_program.push(new NewPlayerProgramLine( "@0" , @1, @2));
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

@ets.sayAwait
build_program.push(new TextToSpeachProgramLine("@0","@1",true));
@end

@ets.muteYTV
build_program.push(new MuteVideoProgramLine("@0"));
@end

@ets.unMuteYTV
build_program.push(new UnMuteVideoProgramLine("@0"));
@end

@ets.setVolumneYTV
build_program.push(new SetVideoVolumneProgamLine("@0",@1));
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

`ets.newYTPlayer(playerId,width,height)`

## Warten bis Videozeitpunkt erreicht

`ets.waitYTVTime(playerId, timeSeconds)`

## Video vor/zurück spulem

`ets.seekYTV(playerId, timeSeconds)`

## Video pausieren

`ets.pauseYTV(playerId)`

## Video abspielen

Video abspielen (und warten, bis das Abspielen gestartet hat. Falls das abspielen nicht automatisch funktioniert, wird gewartet, bis manuell auf Play gedrückt wurde)

`ets.playYTV(playerId)`

## Video Stumm Schalten

`ets.muteYTV(playerId)`

## Video Stummschaltung aufheben

`ets.unMuteYTV(playerId)`

## Video Lautstärke ändern

Lautstärke: Ganzzahl zwischen 0 und 100

`ets.setVolumneYTV(playerId,vol)`

## Video Ändern

`ets.changeYTV(playerId,videoId)`

## Text zu sprache

Ohne Warten auf Beendung:

`ets.say(text, language)`

Mit Warten auf Beendung:

`ets.sayAwait(text, language)`
