window.objLib = window.objLib || {};
(function () {
    var CharacterAnim = function () {
        this.initialize();
    };
    var p = CharacterAnim.prototype

    p.initialize = function () {
        var This = this;
        this.leftShot = new SpriteSheetAnimator({
            spriteWidth: 1908,
            spriteHeight: 826,
            frames: 18,
            col: 9,
            row: 2,
            targetDiv:"#leftShot",
            paddingDiv:"#leftShot .padder",
            timeScale:1.3,
            repeat:0,
            onComplete:function(){This.commonComplete(This.leftShot);},
            onFrameChange:function(param){
                //if(param.curFrame==9){
                if(param.curFrame>=6){
                    This.base.tapControl.hitTheBall();
                }
            }
        })
        //---------------------------------------------- 
        this.rightShot = new SpriteSheetAnimator({
            spriteWidth: 1908,
            spriteHeight: 826,
            frames: 15,
            col: 9,
            row: 2,
            targetDiv:"#rightShot",
            paddingDiv:"#rightShot .padder",
            timeScale:1.3,
            repeat:0,
            onComplete:function(){This.commonComplete(This.rightShot);},
            onFrameChange:function(param){
                //if(param.curFrame==9){
                if(param.curFrame>=6){
                    This.base.tapControl.hitTheBall();
                }
            }
        })
        //----------------------------------------------        
        this.straightShot = new SpriteSheetAnimator({
            spriteWidth: 1908,
            spriteHeight: 826,
            frames: 18,
            col: 9,
            row: 2,
            targetDiv:"#straightShot",
            paddingDiv:"#straightShot .padder",
            timeScale:1.2,
            repeat:0,
            onComplete:function(){This.commonComplete(This.straightShot);},
            onFrameChange:function(param){
                //if(param.curFrame==7){
                if(param.curFrame>=4){
                    This.base.tapControl.hitTheBall();
                }
            }
        })
        //---------------------------------------------- 
        this.steadyPose = new SpriteSheetAnimator({
            spriteWidth: 636,
            spriteHeight: 413,
            frames: 3,
            col: 3,
            row: 1,
            targetDiv:"#steadyPose",
            paddingDiv:"#steadyPose .padder",
            timeScale:0.7,
            repeat:-1,
            onComplete:function(){},
            onFrameChange:function(){}
        })
    };
    p.commonComplete = function(spObj){
        var This = this;
        setTimeout(function(){  
            This.playAnimation({animName:"steadyPose"});
        }, 1500)
    }
    p.playAnimation = function(param){
        var anim = this[param.animName];
        if(anim){
            gsap.set(".player", {opacity:0});
            gsap.set("#"+param.animName, {opacity:1});
            anim.tween.restart();
        }
        if(param.pause && param.pause==true){
            anim.tween.pause();
        }
    }
    objLib.CharacterAnim = CharacterAnim;
}());
