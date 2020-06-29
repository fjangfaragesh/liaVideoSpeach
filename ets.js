"use strict";
var emanager;
var build_program = [];// für die Makros
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
    }
    openNewPlayer(playerId,width,height,videoId) {
        let current = this;
        return new Promise(function (resolve, reject) {
            current.players[playerId] = new YT.Player(playerId,{width,height,videoId,events:{'onReady':()=>resolve()}});//TODO state Change
        });
    }
    onPlayerReady(event) {
        console.log("onplayerReady",event);
    }
    onPlayerStateChange(event) {
        console.log("onPlayerStateChange",event);
    }
    waitForPlayPosition(playerId,pos) {
        let current = this;
        return new Promise(async function(resolve, reject) {
            while (Math.random() > 0.1) {
                await sleep(250);
            }
            resolve();
        });
    }
    getPlayer(playerId) {
        return this.players[playerId];
    }
    async runProgram(lines) {
        for (let l of lines) {
            await l.execute(this);
        }
    }
        
    say(text,lang) {
        return new Promise(function(resolve, reject) {
            responsiveVoice.speak(text,lang);
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
}
class WaitProgramLine extends EntertaimentProgramLine {
    constructor(milliSeconds) {
        super();
        this.milliSeconds = milliSeconds;
    }
    execute(entertaimentManager) {
        return sleep(this.milliSeconds);
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
}
class NewPlayerProgramLine extends EntertaimentProgramLine {
    constructor(playerId,width,heigth,videoId) {
        super();
        this.playerId = playerId;
        this.width = width;
        this.heigth = heigth;
        this.videoId = videoId;
    }
    execute(entertaimentManager) {
        let current = this;
        return entertaimentManager.openNewPlayer(this.playerId,this.width, this.heigth, this.videoId);
    }
}
class WaitForPositionProgramLine extends EntertaimentProgramLine {
    constructor(playerId, time) {
        super();
        this.playerId = playerId;
        this.time = time;
    }
    execute(entertaimentManager) {
        let current = this;
        let p = entertaimentManager.getPlayer(this.playerId);
        return new Promise(async function(resolve, reject) {
            while (p.getCurrentTime() <= current.time) {
//              console.log(p.getCurrentTime() + " " + current.time);
                await sleep(100);
            }
            resolve();
        });
    }
}
    
    
    
    
    
class PlayerActionProgramLine extends EntertaimentProgramLine {
    constructor(playerId, action) {
        super();
        this.playerId = playerId;
    }
    execute(entertaimentManager) {
        if (this.action != undefined) this.action(entertaimentManager.getPlayer(this.playerId));
    }
    action(p) {
        throw new Error("PlayerActionPlayerProgramLine.action() is abstract!");
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
}
class PlayProgramLine extends PlayerActionProgramLine {
    constructor(playerId) {
        super(playerId);
    }
    action(p) {
        p.playVideo();
    }
}
class PauseProgramLine extends PlayerActionProgramLine {
    constructor(playerId) {
        super(playerId);
    }
    action(p) {
        p.pauseVideo();
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
            return entertaimentManager.say(this.text,this.lang,this.awaitEnable);
        } else {
            entertaimentManager.say(this.text,this.lang,this.awaitEnable);
            return;
        }
    }
}
    
    
    
    
function exampleProgram() {
    let ret = [];
    ret.push(new NewPlayerProgramLine("player",640,360,'YOneAeBz8BQ'));
    ret.push(new PlayProgramLine("player"));
    ret.push(new SeekProgramLine("player",50.0));
    ret.push(new WaitForPositionProgramLine("player",55.0));
    ret.push(new PauseProgramLine("player"));
    ret.push(new TextToSpeachProgramLine("8 sekunden pause und dann 3 Sekunden zurück spulen...","German Male",false));
    ret.push(new WaitProgramLine(8000));
    ret.push(new SeekProgramLine("player",52.0));
    ret.push(new PlayProgramLine("player"));
    ret.push(new WaitForPositionProgramLine("player",65.0));
    ret.push(new LoadVideoProgramLine("player","PD2XgQOyCCk"));
    ret.push(new PauseProgramLine("player"));
    ret.push(new TextToSpeachProgramLine("Neues Video, 8 Sekunden warten...","German Male",false));
    ret.push(new WaitProgramLine(8000));
    ret.push(new SeekProgramLine("player",8.0));
    ret.push(new PlayProgramLine("player"));
    ret.push(new WaitForPositionProgramLine("player",60.0));
    ret.push(new PauseProgramLine("player"));
    ret.push(new TextToSpeachProgramLine("dad wars","German Male",true));
    return ret;
}
    
init(); 
