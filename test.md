<!--

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
console.log("script loaded");
function exampleProgram2() {
    let ret = [];
    ret.push(new NewPlayerProgramLine("player1",640,360,'YOneAeBz8BQ'));
    ret.push(new PlayProgramLine("player1"));
    ret.push(new SeekProgramLine("player1",50.0));
    ret.push(new WaitForPositionProgramLine("player1",55.0));
    ret.push(new PauseProgramLine("player1"));
    ret.push(new TextToSpeachProgramLine("8 sekunden pause und dann 3 Sekunden zurück spulen...","German Male",false));
    ret.push(new WaitProgramLine(8000));
    ret.push(new SeekProgramLine("player1",52.0));
    ret.push(new PlayProgramLine("player1"));
    ret.push(new WaitForPositionProgramLine("player1",65.0));
    ret.push(new LoadVideoProgramLine("player1","PD2XgQOyCCk"));
    ret.push(new PauseProgramLine("player1"));
    ret.push(new TextToSpeachProgramLine("Neues Video, 8 Sekunden warten...","German Male",false));
    ret.push(new WaitProgramLine(8000));
    ret.push(new SeekProgramLine("player1",8.0));
    ret.push(new PlayProgramLine("player1"));
    ret.push(new WaitForPositionProgramLine("player1",60.0));
    ret.push(new PauseProgramLine("player1"));
    ret.push(new TextToSpeachProgramLine("dad wars","German Male",true));
    return ret;
}
setTimeout(exampleProgram2,250);

</script>
