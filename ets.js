"use strict";
var emanager;
var apiLoaded = false;
async function init() {
    await loadYTAPI();
}
        
        
        
        
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
        
        
async function loadYTAPI() {
    console.log("loading yt api...");
    await new Promise(function (resolve, reject) {
        onYouTubeIframeAPIReady = function() {
            console.log("yt api loaded");
            resolve();
        }
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
}


var onYouTubeIframeAPIReady = function () {
    throw new Error("overwriting function for promise has not worked");
};


class EntertainmentManager {
    constructor() {
        this.players = {};
        this.programRunning = false;
    }
    openNewPlayer(playerId,width,height) {
        let current = this;
        return new Promise(function (resolve, reject) {
            current.players[playerId] = new YT.Player(playerId,{width,height,undefined,events:{'rel':0,'onReady':()=>resolve()}});//TODO state Change
        });
    }
    getPlayer(playerId) {
        return this.players[playerId];
    }
    async runProgram(lines) {
        if (this.programRunning) throw new Error("EntertainmentManager can't run 2 Programs at the same time!");
        this.programRunning = true;
        this.say("start","US English Female");//Vermitlich gibt es einen Bug in der Voice API, bei welchem beim ersten mal ausführen onend nicht aufgerufen wird. Deshalb diese Dummy Ausgabe
        for (let l of lines) {
            console.log("EntertainmentManager.runProgram: running " + l.toString());
            await l.execute(this);
            console.log("EntertainmentManager.runProgram: commandline done!");
        }
        this.programRunning = false;
    }
        
    say(text,lang) {        
        return new Promise(function(resolve, reject) {
            responsiveVoice.speak(text,lang,{onend: function() {
                    console.log("TTS resolved");
                    resolve();
                }
            });
        });
        
    }
}
emanager = new EntertainmentManager();



class EntertaimentProgramLine {
    constructor() {
        
    }
    execute(entertaimentManager) {
        throw new Error("PlayerProgramLine.execute is abstract");
    }
    toString() {
        throw new Error("PlayerProgramLine.toString is abstract");
    }
}
class WaitProgramLine extends EntertaimentProgramLine {
    constructor(milliSeconds) {
        super();
        this.milliSeconds = milliSeconds;
    }
    execute(entertaimentManager) {
        return sleep(this.milliSeconds);
    }
    toString() {
        return "WaitProgramLine(" + this.milliSeconds + ")";
    }
}
class LogProgramLine extends EntertaimentProgramLine {
    constructor(message) {
        super();
        this.message = message;
    }
    execute(entertaimentManager) {
        console.log(this.message);
    }
    toString() {
        return "LogProgramLine";
    }
}
class NewPlayerProgramLine extends EntertaimentProgramLine {
    constructor(playerId,width,heigth) {
        super();
        this.playerId = playerId;
        this.width = width;
        this.heigth = heigth;
    }
    execute(entertaimentManager) {
        let current = this;
        return entertaimentManager.openNewPlayer(this.playerId,this.width, this.heigth);
    }
    toString() {
        return "NewPlayerProgramLine(" + this.playerId + ")";
    }
}
    
class PlayerActionProgramLine extends EntertaimentProgramLine {
    constructor(playerId, action) {
        super();
        this.playerId = playerId;
    }
    execute(entertaimentManager) {
        let p = entertaimentManager.getPlayer(this.playerId);
        if (this.action != undefined && p != undefined) return this.action(p);
    }
    action(p) {
        throw new Error("PlayerActionPlayerProgramLine.action() is abstract!");
    }
}

class WaitForPositionProgramLine extends PlayerActionProgramLine {
    constructor(playerId, time) {
        super(playerId);
        this.time = time;
    }
    action(p) {
        let current = this;
        return new Promise(async function(resolve, reject) {
            while (p.getCurrentTime() <= current.time) {
//                console.log(p.getCurrentTime() + " " + current.time);
                await sleep(100);
            }
            resolve();
        });
    }
    toString() {
        return "WaitForPositionProgramLine(" + this.playerId + "," + this.time + ")";
    }
}
    
    
    
class SeekProgramLine extends PlayerActionProgramLine {
    constructor(playerId, time) {
        super(playerId);
        this.time = time;
    }
    action(p) {
        p.seekTo(this.time);
    }
    toString() {
        return "SeekProgramLine(" + this.playerId + "," + this.time + ")";
    }
}
class PlayProgramLine extends PlayerActionProgramLine {
    constructor(playerId) {
        super(playerId);
    }
    action(p) {
        p.playVideo();
        // p.addEventListener(...) ???
        let pr = new Promise(async function(resolve, reject) {
            while (p.getPlayerState() != YT.PlayerState.PLAYING) {
//                console.log("state:" + p.getPlayerState());
                await sleep(100);
            }
            resolve();
        });
        if (!p.getPlayerState() != YT.PlayerState.PLAYING) return pr;
    }
    toString() {
        return "PlayProgramLine(" + this.playerId + ")";
    }
}
class PauseProgramLine extends PlayerActionProgramLine {
    constructor(playerId) {
        super(playerId);
    }
    action(p) {
        p.pauseVideo();
    }
    toString() {
        return "PauseProgramLine(" + this.playerId + ")";
    }
}
class LoadVideoProgramLine extends PlayerActionProgramLine {
    constructor(playerId, videoId) {
        super(playerId);
        this.videoId = videoId;
    }
    action(p) {
        p.loadVideoById(this.videoId);
    }
    toString() {
        return "LoadVideoProgramLine(" + this.playerId + "," + this.videoId + ")";
    }
}
class MuteVideoProgramLine extends PlayerActionProgramLine {
    constructor(playerId) {
        super(playerId);
    }
    action(p) {
        p.mute();
    }
    toString() {
        return "MuteVideoProgramLine(" + this.playerId + ")";
    }
}
class UnMuteVideoProgramLine extends PlayerActionProgramLine {
    constructor(playerId) {
        super(playerId);
    }
    action(p) {
        p.unMute();
    }
    toString() {
        return "UnMuteVideoProgramLine(" + this.playerId + ")";
    }
}
class SetVideoVolumneProgamLine extends PlayerActionProgramLine {
    constructor(playerId,vol) {
        super(playerId);
        this.volumne = vol;
    }
    action(p) {
        p.setVolume(this.volumne);
    }
    toString() {
        return "SetVideoVolumneProgamLine(" + this.playerId + "," + this.volumne + ")";
    }
}



    
class TextToSpeachProgramLine extends EntertaimentProgramLine {
    constructor(text, lang, awaitEnable) {
        super();
        this.text = text;
        this.lang = lang;
        this.awaitEnable = awaitEnable;
    }
    execute(entertaimentManager) {
        if (this.awaitEnable) {
            return entertaimentManager.say(this.text,this.lang);
        } else {
            entertaimentManager.say(this.text,this.lang);
            return;
        }
    }
    toString() {
        return "TextToSpeachProgramLine(" + this.text + "," + this.lang + "," + this.awaitEnable + ")";
    }
}
    

init(); 
