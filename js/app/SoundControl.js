
window.objLib = window.objLib || {};
(function () {
    var SoundControl = function () {
        this.initialize();
    };
    var p = SoundControl.prototype

    p.initialize = function () {
        var This = this;
        var soundPath = "assets/sound/";
        this.cheering = new Howl({
            src: [soundPath +"previous_cheering.mp3", ],
        });
        this.batStroke = new Howl({
            src: [soundPath + "previous_batStroke.mp3", ],
        });
        this.groan = new Howl({
            src: [soundPath + "previous_groan.mp3", ],
        });
        this.ambience = new Howl({
            src: [soundPath + "crowd-ambience.mp3", ],
            loop: true,
            volume: 0.02,
        });
        //--------------------------
        /*this.cheering.play();
        this.cheering.pause();
        this.ambience.fade(0.02, 0, 1500) // from, to, duration
        */
        
    };

    objLib.SoundControl = SoundControl;
}());


