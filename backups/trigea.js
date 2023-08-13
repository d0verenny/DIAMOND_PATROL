"use strict";

function masterMuteHandler() {
        SimpleAudio.mute(settings.masterMute)
}
function masterVolumeHandler() {
        SimpleAudio.volume(settings.masterVolume / 10)
}
function bgmVolumeInitHandler() {
        try {
                bgmVolumeHandler()
        } catch (e) {
                setTimeout(bgmVolumeInitHandler, 50)
        }
}
function bgmVolumeHandler() {
        SimpleAudio.select(":bgm").volume(settings.bgmVolume / 10)
}
function soundVolumeInitHandler() {
        try {
                soundVolumeHandler()
        } catch (e) {
                setTimeout(soundVolumeInitHandler, 50)
        }
}
function soundVolumeHandler() {
        SimpleAudio.select(":sound").volume(settings.soundVolume / 10)
}
function fullscreenchange(e) {
        setup.Fullscreen.isFullscreen() != setup.Fullscreen.wasFullscreen && (setup.Fullscreen.wasFullscreen = setup.Fullscreen.isFullscreen(), setup.Fullscreen.onfullscreenchangeHandler && setup.Fullscreen.onfullscreenchangeHandler(e))
}
Config.history.maxStates = 2,


function () {
        function n(e, t) {
                var r = 0,
                        o = e.length;
                e.forEach(function (e) {
                        var s, n;
                        s = e,
                        n = function () {
                                ++r === o && t()
                        },
                        (e = new Image).onload = n,
                        e.onerror = n,
                        e.src = s
                })
        }
        function t() {
                return State.length <= 0
        }
        function e() {
                var e = [].slice.call(arguments).flatten(),
                        s = !! t() && LoadScreen.lock();
                return n(e, function () {
                        s && LoadScreen.unlock(s)
                }),
                s
        }
        setup.preload = e,
        setup.preload.force = !1,
        Macro.add("preload", {
                handler: function () {
                        if (!t() && !setup.preload.force) return this.error("Attempting to preload images outside of `StoryInit` or similar can cause performance issues. Set `setup.preload.force` to `true` if you want to do it anyway.");
                        e(this.args.flatten().filter(function (e) {
                                return "string" == typeof e
                        }))
                }
        })
}(),
setup.preload("assets/backgrounds/splashscreen.jpg", "assets/trigaea.png", "assets/backgrounds/tank.jpg", "assets/backgrounds/progenitor.jpg", "assets/backgrounds/progenitornight.jpg", "assets/backgrounds/maincamp.jpg", "assets/backgrounds/maincampnight.jpg", "assets/backgrounds/maincampnightspiral.jpg", "assets/backgrounds/ruins2.jpg", "assets/backgrounds/dna.jpg", "assets/backgrounds/trigaea.jpg", "assets/icons/endings/endingLocked.png", "assets/icons/lockedtrophy.png"),
$(document).one(":passageready", function () {
        setup.preload.force = !0,
        setup.preload("assets/backgrounds/academy.jpg", "assets/backgrounds/academydorms.jpg", "assets/backgrounds/academydormsnight.jpg", "assets/backgrounds/academynight.jpg", "assets/backgrounds/aeye.jpg", "assets/backgrounds/Aeye2.jpg", "assets/backgrounds/anewdawn.jpg", "assets/backgrounds/asteria.jpg", "assets/backgrounds/asteria1.jpg", "assets/backgrounds/asteria1blur.jpg", "assets/backgrounds/asteria2.jpg", "assets/backgrounds/asteria2blur.jpg", "assets/backgrounds/asteriaoutside.jpg", "assets/backgrounds/asteriaoutsideblur.jpg", "assets/backgrounds/bookdune.jpg", "assets/backgrounds/bookrobot.jpg", "assets/backgrounds/bookshipwhosang.jpg", "assets/backgrounds/bookvalentine.jpg", "assets/backgrounds/bookwonderland.jpg", "assets/backgrounds/cockpit.jpg", "assets/backgrounds/cockpitboom.jpg", "assets/backgrounds/cockpitboommemory.jpg", "assets/backgrounds/cockpitcrash1.jpg", "assets/backgrounds/cockpitcrash2.jpg", "assets/backgrounds/cockpitmemory.jpg", "assets/backgrounds/code.jpg", "assets/backgrounds/correctormeeting.jpg", "assets/backgrounds/corridor.jpg", "assets/backgrounds/delta.jpg", "assets/backgrounds/deltacolony.jpg", "assets/backgrounds/deltacolony2.jpg", "assets/backgrounds/deltacolonydefeat.jpg", "assets/backgrounds/deltacolonynarrowcorridor.jpg", "assets/backgrounds/deltacolonyquarters.jpg", "assets/backgrounds/deltacolonysmoke.jpg", "assets/backgrounds/deltacolonyshaft.jpg", "assets/backgrounds/deltacolonysmoke.jpg", "assets/backgrounds/deltacrash.jpg", "assets/backgrounds/desert.jpg", "assets/backgrounds/desert2.jpg", "assets/backgrounds/desert2blur.jpg", "assets/backgrounds/desertblur.jpg", "assets/backgrounds/desertstorm.jpg", "assets/backgrounds/diner.jpg", "assets/backgrounds/dna.jpg", "assets/backgrounds/elevator.jpg", "assets/backgrounds/engineroom.jpg", "assets/backgrounds/fantasyruins.jpg", "assets/backgrounds/firsthome.jpg", "assets/backgrounds/forest.jpg", "assets/backgrounds/forestblur.jpg", "assets/backgrounds/forestcamp.jpg", "assets/backgrounds/forestcamp2.jpg", "assets/backgrounds/forestcamp3.jpg", "assets/backgrounds/forestnight.jpg", "assets/backgrounds/forestruins.jpg", "assets/backgrounds/forestruins2.jpg", "assets/backgrounds/forestruinsblur.jpg", "assets/backgrounds/forestruinsinside.jpg", "assets/backgrounds/forestruinsinside2.jpg", "assets/backgrounds/forestruinsinside2dark.jpg", "assets/backgrounds/forestruinsinside2shot.jpg", "assets/backgrounds/forestruinsinside3.jpg", "assets/backgrounds/forestruinsinsidecollapse.jpg", "assets/backgrounds/forestruinssick.jpg", "assets/backgrounds/forestrun.jpg", "assets/backgrounds/foreststatic.jpg", "assets/backgrounds/foreststorm.jpg", "assets/backgrounds/foresttrap.jpg", "assets/backgrounds/gabriel.jpg", "assets/backgrounds/genes.jpg", "assets/backgrounds/glitch.jpg", "assets/backgrounds/grove.jpg", "assets/backgrounds/grove2.jpg", "assets/backgrounds/grove2day.jpg", "assets/backgrounds/grove2spring.jpg", "assets/backgrounds/groveAction.jpg", "assets/backgrounds/groveDark.jpg", "assets/backgrounds/hermitland.jpg", "assets/backgrounds/humanwar.jpg", "assets/backgrounds/humanwar2.jpg", "assets/backgrounds/humanwar3.jpg", "assets/backgrounds/library.jpg", "assets/backgrounds/llineruins.jpg", "assets/backgrounds/madness.jpg", "assets/backgrounds/maincampblur.jpg", "assets/backgrounds/maincampexplosion.jpg", "assets/backgrounds/maincampfuzzy.jpg", "assets/backgrounds/maincampnight.jpg", "assets/backgrounds/maincampnightspiral.jpg", "assets/backgrounds/maincampnightstatic.jpg", "assets/backgrounds/maincampred.jpg", "assets/backgrounds/maincampstorm.jpg", "assets/backgrounds/memoryswitch.jpg", "assets/backgrounds/neworion.jpg", "assets/backgrounds/neworion2.jpg", "assets/backgrounds/northernwilds.jpg", "assets/backgrounds/nuria.jpg", "assets/backgrounds/nuriaboom.jpg", "assets/backgrounds/nuriaoutside.jpg", "assets/backgrounds/nuriaoutside2.jpg", "assets/backgrounds/oldearth1.jpg", "assets/backgrounds/oldroom.jpg", "assets/backgrounds/oldstreet.jpg", "assets/backgrounds/oldstreet2.jpg", "assets/backgrounds/planetdeath3.jpg", "assets/backgrounds/progenitor.jpg", "assets/backgrounds/progenitorblur.jpg", "assets/backgrounds/progenitorinside.jpg", "assets/backgrounds/progenitornight.jpg", "assets/backgrounds/ruins.jpg", "assets/backgrounds/ruins2.jpg", "assets/backgrounds/ruinsblur.jpg", "assets/backgrounds/ruinsfuzzy.jpg", "assets/backgrounds/ruinsnight.jpg", "assets/backgrounds/ruinsnightspiral.jpg", "assets/backgrounds/ruinsnightstatic.jpg", "assets/backgrounds/ruinsstorm.jpg", "assets/backgrounds/sandstorm.jpg", "assets/backgrounds/secondhome.jpg", "assets/backgrounds/sectorff.jpg", "assets/backgrounds/sectorff2.jpg", "assets/backgrounds/sectorff3.jpg", "assets/backgrounds/sectorffoutskirts.jpg", "assets/backgrounds/sectorffoutskirtsblur.jpg", "assets/backgrounds/shatteredruins.jpg", "assets/backgrounds/shcore.jpg", "assets/backgrounds/scoreglitch.jpg", "assets/backgrounds/shiphangar.jpg", "assets/backgrounds/shruins.jpg", "assets/backgrounds/shruins2.jpg", "assets/backgrounds/shruins2collapse.jpg", "assets/backgrounds/shruins2glitch.jpg", "assets/backgrounds/shruins3.jpg", "assets/backgrounds/shruinsdead.jpg", "assets/backgrounds/shruinsdead2.jpg", "assets/backgrounds/shruinsdrop.jpg", "assets/backgrounds/shruinsglitch.jpg", "assets/backgrounds/shruinsroom.jpg", "assets/backgrounds/simroom.jpg", "assets/backgrounds/spacestation.jpg", "assets/backgrounds/spacewreck2.jpg", "assets/backgrounds/spiral.jpg", "assets/backgrounds/stardock.jpg", "assets/backgrounds/starship.jpg", "assets/backgrounds/swamp.jpg", "assets/backgrounds/swamp2.jpg", "assets/backgrounds/swamp2Run.jpg", "assets/backgrounds/swampblur.jpg", "assets/backgrounds/swampRun.jpg", "assets/backgrounds/swampstorm.jpg", "assets/backgrounds/tank.jpg", "assets/backgrounds/terraformtest.jpg", "assets/backgrounds/thenuria.jpg", "assets/backgrounds/thesphere.jpg", "assets/backgrounds/thesphereexplode.jpg", "assets/backgrounds/trainingroom1.jpg", "assets/backgrounds/trainingroom2.jpg", "assets/backgrounds/trigaea.jpg", "assets/backgrounds/trigaeamemory.jpg", "assets/backgrounds/utopia.jpg", "assets/backgrounds/zhou2.jpg", "assets/backgrounds/zhou3.jpg", "assets/backgrounds/zhou4.jpg", "assets/backgrounds/zhougarden.jpg", "assets/backgrounds/zhouoffice.jpg", "assets/backgrounds/zhououtside.jpg", "assets/icons/lockedtrophy.png", "assets/icons/endings/endingLocked.png", "assets/icons/endings/ending1.png", "assets/icons/endings/ending2.png", "assets/icons/endings/ending3.png", "assets/icons/endings/ending4.png", "assets/icons/endings/ending5.png", "assets/icons/endings/ending6.png", "assets/icons/endings/ending7.png", "assets/icons/endings/ending8.png", "assets/icons/endings/ending9.png", "assets/icons/endings/ending10.png", "assets/icons/endings/ending11x1.png", "assets/icons/endings/ending11x2.png", "assets/icons/endings/ending11x3.png", "assets/icons/endings/ending11x4.png", "assets/icons/endings/ending12.png", "assets/icons/allAchievevments.png", "assets/icons/allAlienUpgrades.png", "assets/icons/allEndings.png", "assets/icons/allHumanUpgrades.png", "assets/icons/allMachineUpgrades.png", "assets/icons/allUpgrades.png", "assets/icons/bookAward1.png", "assets/icons/bookAward2.png", "assets/icons/BronzeAchievementBlank.png", "assets/icons/completedOnEasy.png", "assets/icons/completedOnHard.png", "assets/icons/completedOnNormal.png", "assets/icons/defeatAward1.png", "assets/icons/Deltalarge.png", "assets/icons/DiamondAchievementBlank.png", "assets/icons/ending1.png", "assets/icons/ending2.png", "assets/icons/ending3.png", "assets/icons/ending4.png", "assets/icons/ending5.png", "assets/icons/ending6.png", "assets/icons/ending7.png", "assets/icons/ending8.png", "assets/icons/ending9.png", "assets/icons/ending10.png", "assets/icons/ending11x1.png", "assets/icons/ending11x2.png", "assets/icons/ending11x3.png", "assets/icons/ending11x4.png", "assets/icons/ending12.png", "assets/icons/firstAlienUpgrade.png", "assets/icons/firstBook.png", "assets/icons/firstHumanUpgrade.png", "assets/icons/firstMachineUpgrade.png", "assets/icons/fullLethalRun.png", "assets/icons/fullNonLethalRun.png", "assets/icons/getAllSideMemories.png", "assets/icons/GoldAchievementBlank.png", "assets/icons/killAward1.png", "assets/icons/killAward2.png", "assets/icons/killAward3.png", "assets/icons/killAward4.png", "assets/icons/levelAward1.png", "assets/icons/levelAward2.png", "assets/icons/levelAward3.png", "assets/icons/levelAward4.png", "assets/icons/levelAward5.png", "assets/icons/location.png", "assets/icons/lockedtrophy.png", "assets/icons/mm1.png", "assets/icons/mm2.png", "assets/icons/mm3.png", "assets/icons/mm4.png", "assets/icons/mm5.png", "assets/icons/mm6.png", "assets/icons/mm7.png", "assets/icons/savedDelta.png", "assets/icons/savedSquad.png", "assets/icons/SilverAchievementBlank.png", "assets/icons/subdueAward1.png", "assets/icons/subdueAward2.png", "assets/icons/subdueAward3.png", "assets/icons/subdueAward4.png", "assets/icons/talkAward1.png", "assets/icons/talkAward2.png", "assets/icons/talkAward3.png", "assets/icons/talkAward4.png")
}),


function () {
        var e = !0,
                s = "Transparency: ",
                n = 60,
                t = ["mainmenu"];

        function r(e, s) {
                var n = Number(e);
                s && (Number.isNaN(n) || (n = Math.clamp(n, 0, 1), s && (s instanceof jQuery || (s = $(s)), (e = (e = s.css("background-color")).split(",")).pop(), e.push(n + ")"), e = e.join(","), s.css("background", e))))
        }
        function o(e) {
                e = e || settings.transparency,
                r((e = e, Math.clamp(e / 100, 0, 1)), function () {
                        var e = tags().includes("choice") || tags().includes("snapshot") || tags().includes("tankleave") ? $("#choiceIntro") : $("div.passage");
                        if (e && e[0]) return e
                }())
        }
        postdisplay["transparency-task"] = function (e) {
                tags().includesAny(t) || o()
        },
        setup.transparency = {
                set: r,
                change: o
        },
        e && Setting.addRange("transparency", {
                label: s,
                min: 1,
                max: 99,
                step: 1,
        default:
                n,
                onChange: o
        })
}(),
$("#menubutton").ariaClick(function (e) {
        tags().includes("nomenu") || Engine.play("MenuPage")
}),
$("#savebutton").ariaClick(function (e) {
        tags().includes("nosave") || UI.saves()
}),
$("#achievementbutton").ariaClick(function (e) {
        tags().includes("nomenu") || Engine.play("AchievementPage")
}),
$("#debugbutton").ariaClick(function (e) {
        tags().includes("nodebug") || (Dialog.setup("Found a Bug? Report It!"), Dialog.wiki(Story.get("DebugButtonPopup").processText()), Dialog.open())
}),
$(document).on(":passagestart", function (e) {
        var s = document.getElementById("savebutton");
        tags().includes("nosave") ? s.style.opacity = "50%" : s.style.opacity = "100%"
}),
$(document).on(":passagestart", function (e) {
        var s = document.getElementById("menubutton");
        tags().includes("nomenu") ? s.style.opacity = "50%" : s.style.opacity = "100%"
}),
$(document).on(":passagerender", function () {
        tags().includes("speshlFooter") && (document.getElementById("footer-bar").style.visibility = "hidden")
}),
$(document).keyup(function (e) {
        49 != e.keyCode && 97 != e.keyCode || (Dialog.isOpen() ? $("#dialogCloseButton button") : $("#button1 button")).trigger("click")
}),
$(document).keyup(function (e) {
        50 != e.keyCode && 98 != e.keyCode || $("#button2 button").trigger("click")
}),
$(document).keyup(function (e) {
        51 != e.keyCode && 99 != e.keyCode || $("#button3 button").trigger("click")
}),
$(document).keyup(function (e) {
        52 != e.keyCode && 100 != e.keyCode || $("#button4 button").trigger("click")
}),
$(document).keyup(function (e) {
        53 != e.keyCode && 101 != e.keyCode || $("#button5 button").trigger("click")
}),
$(document).keyup(function (e) {
        54 != e.keyCode && 102 != e.keyCode || $("#button6 button").trigger("click")
}),
$(document).keyup(function (e) {
        55 != e.keyCode && 103 != e.keyCode || $("#button7 button").trigger("click")
}),
$(document).keyup(function (e) {
        56 != e.keyCode && 104 != e.keyCode || $("#button8 button").trigger("click")
}),
Config.history.maxStates = 2,
window.Health = function (e, s, n, t, r) {
        null == r && (r = document);
        var o = parseInt(e / s * 100);
        o < 0 && (o = 0),
        100 < o && (o = 100);
        var a = $(r).find("#" + n);
        t ? a.css({
                width: o + "%"
        }) : a.css({
                height: o + "%"
        }),
        a.attr("title", e + "/" + s + " HP"),
        $(r).find("#" + n + "bkg").attr("title", e + "/" + s + " HP")
},
window.setTextboxMaxLength = function (e, s) {
        var n = "#textbox-" + Util.slugify(e);
        postdisplay[n + "-maxlength"] = function (e) {
                delete postdisplay[e],
                $(n).attr("maxlength", s).css({
                        "min-width": "initial",
                        width: s + "em"
                })
        }
},
Config.ui.stowBarInitially = !0,
config.history.controls = !1,
window.go = Engine.show,
predisplay["Menu Return"] = function (e) {
        tags().contains("noreturn") || (State.variables.
        return = passage())
},


function () {
        if (storage.has("NewGamePlus")) {
                setup.NewGamePlus = storage.get("NewGamePlus"),
                storage.delete("NewGamePlus");
                try {
                        Wikifier.wikifyEval(Story.get("NewGamePlus").text)
                } catch (e) {
                        Alert.error("NewGamePlus", e.message)
                }
        }
}(),
setup.operations = {
        tryGlobal: !0,
        nicknames: !0,
        fmRange: [0, 100]
},
setup.dice = {
        processDice: function (e, s) {
                var n, t = [],
                        r = 0;
                if ("string" == typeof e) t = e.split("d");
                else if ("number" == typeof e && s) t = [e, s];
                else {
                        if (!(Array.isArray(e) && 2 <= e.length)) throw new TypeError("setup.dice.processDice(): could not process arguments...");
                        e.length = 2,
                        t = e
                }
                for (n = 0; n < t[0]; n++) r += Math.floor(Math.random() * t[1]) + 1;
                return r
        },
        processString: function (e) {
                return [(e = (e = e.trim().replace(/\s/g, "")).match(/(\d*d\d*)(.*)/))[1], Number(e[2])]
        },
        roll: function (e, s) {
                if ("string" != typeof e) return setup.dice.processDice(e, s);
                e = setup.dice.processString(e);
                return setup.dice.processDice(e[0]) + e[1]
        }
},
setup.operations.tryGlobal && (window.dice = window.dice || setup.dice.roll),
Number.prototype.dice || Object.defineProperty(Number.prototype, "dice", {
        configurable: !0,
        writable: !0,
        value: function (e) {
                if (0 === this) return 0;
                if (this < 0) throw new TypeError("Number.prototype.dice: cannot roll a negative number of dice!");
                if (null == e || "number" != typeof e || e <= 0 || arguments.length < 1) throw new TypeError("Number.prototype.dice: error in argument");
                if (!Number.isInteger(this) || !Number.isInteger(e)) throw new TypeError("Number.prototype.dice: cannot roll partial dice!");
                return setup.dice.processDice(this, e)
        }
}),
Number.prototype.fairmath || Object.defineProperty(Number.prototype, "fairmath", {
        configurable: !0,
        writable: !0,
        value: function (e) {
                var s = setup.operations.fmRange;
                if (this < s[0] || this > s[1]) throw new TypeError("Number.prototype.fairmath called on a number that is out of the defined range (the number was " + this + ").");
                if (null == e || "number" != typeof e || 100 < e || e < -100 || arguments.length < 1) throw new TypeError("Number.prototype.fairmath given incorrect argument or an argument that is out of the valid 0-100 range.");
                if (0 === e) return Math.clamp(Math.trunc(this), s[0], s[1]);
                if (e < 0) return e *= -1,
                Math.clamp(Math.trunc(this - (this - s[0]) * (e / s[1])), s[0], s[1]);
                if (0 < e) return Math.clamp(Math.trunc(this + (s[1] - this) * (e / s[1])), s[0], s[1]);
                throw new Error("Number.prototype.fairmath encountered an unspecified error.")
        }
}),
Math.fairmath || Object.defineProperty(Math, "fairmath", {
        configurable: !0,
        writable: !0,
        value: function (e, s) {
                return e.fairmath(s)
        }
}),
setup.operations.nicknames && (Math.fm || Object.defineProperty(Math, "fm", {
        configurable: !0,
        writable: !0,
        value: function (e, s) {
                return e.fairmath(s)
        }
}), Number.prototype.fm || Object.defineProperty(Number.prototype, "fm", {
        configurable: !0,
        writable: !0,
        value: function (e) {
                return this.fairmath(e)
        }
}), Number.prototype.d || Object.defineProperty(Number.prototype, "d", {
        configurable: !0,
        writable: !0,
        value: function (e) {
                return this.dice(e)
        }
})),
$(document.body).append("<div id='notify'></div>"),
$(document).on(":notify", function (e) {
        e.message && "string" == typeof e.message && (e.message.trim(), e.class ? "string" == typeof e.class ? e.class = "open macro-notify " + e.class : Array.isArray(e.class) ? e.class = "open macro-notify " + e.class.join(" ") : e.class = "open macro-notify" : e.class = "open macro-notify", e.delay ? ("number" != typeof e.delay && (e.delay = Number(e.delay)), Number.isNaN(e.delay) && (e.delay = 2e3)) : e.delay = 2e3, $("#notify").empty().wiki(e.message).addClass(e.class), setTimeout(function () {
                $("#notify").removeClass()
        }, e.delay))
}),
Macro.add("notify", {
        tags: null,
        handler: function () {
                var e = this.payload[0].contents,
                        s = !1,
                        n = !1;
                0 < this.args.length && (n = "number" == typeof this.args[0] ? (s = this.args[0], 1 < this.args.length && this.args.slice(1).flatten()) : this.args.flatten().join(" ")),
                $(document).trigger({
                        type: ":notify",
                        message: e,
                        delay: s,
                        class: n
                })
        }
}),
Setting.addToggle("masterMute", {
        label: "Master Mute.",
        desc: "Mute control for all audio.",
        onInit: masterMuteHandler,
        onChange: masterMuteHandler
}),
Setting.addRange("masterVolume", {
        label: "Master volume.",
        desc: "Volume control for all audio.",
        min: 0,
        max: 10,
        step: 1,
        onInit: masterVolumeHandler,
        onChange: masterVolumeHandler
}),
Setting.addRange("bgmVolume", {
        label: "BGM volume.",
        desc: "Volume control for background music.",
        min: 0,
        max: 10,
        step: 1,
        onInit: bgmVolumeInitHandler,
        onChange: bgmVolumeHandler
}),
Setting.addRange("soundVolume", {
        label: "Sound effects.",
        desc: "Volume control for sound effects.",
        min: 0,
        max: 10,
        step: 1,
        onInit: soundVolumeInitHandler,
        onChange: soundVolumeHandler
}),


function () {
        if ("undefined" == typeof version || void 0 === version.title || "SugarCube" !== version.title || void 0 === version.major || version.major < 2 || void 0 === version.minor || version.minor < 5) throw new Error("<<shake>> macro requires SugarCube 2.5.0 or greater, aborting load");
        Macro.add("shake", {
                tags: null,
                handler: function () {
                        var e = 0 < this.args.length ? this.args[0] : 1 / 0;
                        if (1 / 0 !== e) try {
                                e = Math.max(Engine.minDomActionDelay, Util.fromCssTime(e))
                        } catch (e) {
                                return this.error(e.message)
                        }
                        Config.debug && this.debugView.modes({
                                block: !0
                        });
                        var s = jQuery(document.createElement("span"));
                        s.addClass("macro-" + this.name + " shake").wiki(this.payload[0].contents).appendTo(this.output),
                        1 / 0 !== e && setTimeout(function () {
                                s.removeClass("shake")
                        }, Engine.minDomActionDelay + e)
                }
        }),
        Macro.add(["shakescreen", "shaketarget"], {
                handler: function () {
                        var e, s, n;
                        if ("shakescreen" === this.name) e = jQuery("#passages"),
                        s = 0 < this.args.length ? this.args[0] : 1 / 0,
                        n = "shake-block";
                        else {
                                if (0 === this.args.length) return this.error("no selector specified");
                                if (0 === (e = jQuery(this.args[0])).length) return this.error('no elements matched the selector "' + this.args[0] + '"');
                                s = 1 < this.args.length ? this.args[1] : 1 / 0,
                                n = "block" === jQuery(e[0]).css("display") ? "shake-block" : "shake"
                        }
                        if ("stop" !== s) {
                                if (1 / 0 !== s) try {
                                        s = Math.max(Engine.minDomActionDelay, Util.fromCssTime(s))
                                } catch (e) {
                                        return this.error(e.message)
                                }
                                e.addClass(n),
                                1 / 0 !== s && setTimeout(function () {
                                        e.removeClass(n)
                                }, Engine.minDomActionDelay + s)
                        } else e.removeClass(n)
                }
        })
}(),
Config.saves.onLoad = function (e) {
        if (0 <= e.state.index) {
                var s = e.state.history[e.state.index].variables;
                if (State.variables.hasOwnProperty("Achievements")) if (s.hasOwnProperty("Achievements")) {
                        for (var n = Object.keys(State.variables.Achievements), t = 0; t < n.length; t++) s.Achievements[n[t]] = clone(State.variables.Achievements[n[t]]);
                        State.variables.Achievements = clone(s.Achievements),
                        $.wiki("<<remember $Achievements>>")
                } else s.Achievements = clone(State.variables.Achievements),
                $.wiki("<<remember $Achievements>>");
                else s.hasOwnProperty("Achievements") && (State.variables.Achievements = clone(s.Achievements), $.wiki("<<remember $Achievements>>"))
        }
},
window.hasOwnProperty("storyFormat") ? setup.Path = "C:/Games/Twine_Sample_Code/" : setup.Path = "",
setup.ImagePath = setup.Path + "assets/icons/",
window.fontSize = function (e) {
        $("#story").css("font-size", parseInt($("#story").css("font-size")) + e + "px")
},
"function" == typeof document.documentElement.requestFullscreen ? (setup.Fullscreen = {
        API: "default",
        onfullscreenchangeHandler: null,
        fullscreen: function () {
                return document.fullscreen
        },
        fullscreenEnabled: function () {
                return document.fullscreenEnabled
        },
        fullscreenElement: function () {
                return document.fullscreenElement
        },
        requestFullscreen: function () {
                return document.documentElement.requestFullscreen()
        }
}, "function" == typeof document.exitFullscreen ? setup.Fullscreen.exitFullscreen = function () {
        return document.exitFullscreen()
} : "function" == typeof document.cancelFullScreen && (setup.Fullscreen.exitFullscreen = function () {
        return document.cancelFullScreen()
}), document.onfullscreenerror = function (e) {
        console.log("Fullscreen error: " + e)
}, document.addEventListener("fullscreenchange", fullscreenchange)) : "function" == typeof document.documentElement.webkitRequestFullscreen ? ("function" == typeof document.webkitExitFullscreen ? setup.Fullscreen = {
        API: "webkit",
        onfullscreenchangeHandler: null,
        fullscreen: function () {
                return document.webkitIsFullScreen
        },
        fullscreenEnabled: function () {
                return document.webkitFullscreenEnabled
        },
        fullscreenElement: function () {
                return document.webkitFullscreenElement
        },
        requestFullscreen: function () {
                return document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        },
        exitFullscreen: function () {
                return document.webkitExitFullscreen()
        }
} : "function" == typeof document.webkitCancelFullScreen && (setup.Fullscreen = {
        API: "webkit",
        onfullscreenchangeHandler: null,
        fullscreen: function () {
                return Boolean(document.webkitIsFullScreen)
        },
        fullscreenEnabled: function () {
                return document.webkitCancelFullScreen
        },
        fullscreenElement: function () {
                return document.webkitCurrentFullScreenElement
        },
        requestFullscreen: function () {
                return document.documentElement.webkitRequestFullscreen()
        },
        exitFullscreen: function () {
                return document.webkitCancelFullScreen()
        }
}), document.onwebkitfullscreenerror = function (e) {
        console.log("Fullscreen error: " + e)
}, document.addEventListener("onwebkitfullscreenchange", fullscreenchange)) : "function" == typeof document.documentElement.mozRequestFullScreen ? (setup.Fullscreen = {
        API: "moz",
        onfullscreenchangeHandler: null,
        fullscreen: function () {
                return document.mozFullScreen
        },
        fullscreenEnabled: function () {
                return document.mozFullScreenEnabled
        },
        fullscreenElement: function () {
                return document.mozFullScreenElement
        },
        requestFullscreen: function () {
                return document.documentElement.mozRequestFullScreen()
        },
        exitFullscreen: function () {
                return document.mozCancelFullScreen()
        }
}, document.onmozfullscreenerror = function (e) {
        console.log("Fullscreen error: " + e)
}, document.addEventListener("onmozfullscreenchange", fullscreenchange)) : "function" == typeof document.documentElement.msRequestFullscreen ? (setup.Fullscreen = {
        API: "ms",
        onfullscreenchangeHandler: null,
        fullscreen: function () {
                return null != setup.Fullscreen.fullscreenElement() || !0 === window.fullScreen || screen.height === window.innerHeight
        },
        fullscreenEnabled: function () {
                return document.msFullscreenEnabled
        },
        fullscreenElement: function () {
                return document.msFullscreenElement
        },
        requestFullscreen: function () {
                return document.documentElement.msRequestFullscreen()
        },
        exitFullscreen: function () {
                return document.msExitFullscreen()
        }
}, document.MSFullscreenError = function (e) {
        console.log("Fullscreen error: " + e)
}, document.addEventListener("MSFullscreenChange", fullscreenchange)) : setup.Fullscreen = !1,
setup.Fullscreen && (setup.Fullscreen.isFullscreen = function () {
        return null != setup.Fullscreen.fullscreenElement() || !0 === window.fullScreen || screen.height === window.innerHeight
}, setup.Fullscreen.wasFullscreen = setup.Fullscreen.isFullscreen(), setup.Fullscreen.onfullscreenchange = function (e) {
        "function" == typeof e && (setup.Fullscreen.onfullscreenchangeHandler = e)
}, $(window).on("resize", function (e) {
        fullscreenchange(e)
})),
window.toggleFullscreen = function () {
        setup.Fullscreen ? setup.Fullscreen.isFullscreen() ? (setup.Fullscreen.exitFullscreen(), fullscreenchange()) : (setup.Fullscreen.requestFullscreen(), fullscreenchange(), setTimeout(function () {
                $("body").css("top", "0px")
        })) : alert("Fullscreen not supported for this browser.")
},
$(document).on("keydown", function (e) {
        return "F11" != e.key || "ms" === setup.Fullscreen.API
}),
$(document).on("keyup", function (e) {
        return "F11" != e.key || (window.toggleFullscreen(), !1)
}),
$(document).on("click", "#fullscreen", window.toggleFullscreen),
setup.Fullscreen && hasOwnProperty.call(setup.Fullscreen, "onfullscreenchange") && "function" == typeof setup.Fullscreen.onfullscreenchange && $("#fullscreen").length && setup.Fullscreen.onfullscreenchange(function () {
        $("#fullscreen").prop("checked") != setup.Fullscreen.isFullscreen() && $("#fullscreen").prop("checked", setup.Fullscreen.isFullscreen())
}),
$(document).on("mouseenter", ".startbutton button", function () {
        $.wiki('<<audio "beep" stop>>'),
        $.wiki('<<audio "beep" play>>')
}),
$(document).on("mouseenter", ".btnmenu button", function () {
        $.wiki('<<audio "beep" stop>>'),
        $.wiki('<<audio "beep" play>>')
}),
$(document).on("mousedown", ".btnexplore button", function () {
        $.wiki('<<audio "footsteps" stop>>'),
        $.wiki('<<audio "footsteps" play>>')
}),
Config.saves.onSave = function (e) {
        if (0 <= e.state.index) {
                var s = e.state.history[e.state.index].variables;
                if (State.variables.hasOwnProperty("Achievements")) if (s.hasOwnProperty("Achievements")) {
                        for (var n = Object.keys(State.variables.Achievements), t = 0; t < n.length; t++) s.Achievements[n[t]] = clone(State.variables.Achievements[n[t]]);
                        State.variables.Achievements = clone(s.Achievements),
                        $.wiki("<<remember $Achievements>>")
                } else s.Achievements = clone(State.variables.Achievements),
                $.wiki("<<remember $Achievements>>");
                else s.hasOwnProperty("Achievements") && (State.variables.Achievements = clone(s.Achievements), $.wiki("<<remember $Achievements>>"))
        }
        var r = SimpleAudio.groups.get(":bgm").filter(function (e) {
                return SimpleAudio.tracks.get(e).isPlaying()
        });
        e.metadata = {
                bgms: r
        }
},
Config.saves.onLoad = function (e) {
        SimpleAudio.stop(),
        Array.isArray(e.metadata.bgms) && e.metadata.bgms.forEach(function (e) {
                SimpleAudio.tracks.get(e).play()
        })
},


function () {
        var t = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
                r = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        setup.toWords = function (e) {
                if (!e) return "zero";
                if (999 < e) return e.toLocaleString();
                var s = "" + e;
                if (e < 20) return t[e];
                var n = r[Number(s[s.length - 2])] + "-" + t[Number(s[s.length - 1])];
                return "-" === n && (n = ""),
                99 < e && (n = t[Number(s[0])] + " hundred and " + n),
                n
        }
}(),
Macro.add("mouseover", {
        tags: ["onhover", "onmouseover", "onmousein", "onmouseenter", "onmouseout"],
        skipArgs: !0,
        handler: function () {
                if (this.payload.length < 2) return this.error("No event tag used.");
                var s = {
                        mouseover: [],
                        mousein: [],
                        mouseout: []
                },
                        e = $(document.createElement("span")).addClass("macro-" + this.name).wiki(this.payload[0].contents).appendTo(this.output);
                this.payload.forEach(function (e) {
                        switch (e.name) {
                        case "onhover":
                        case "onmouseover":
                                s.mouseover.push(e.contents);
                                break;
                        case "onmousein":
                        case "onmouseenter":
                                s.mousein.push(e.contents);
                                break;
                        case "onmouseout":
                                s.mouseout.push(e.contents);
                                break;
                        default:
                                return
                        }
                }),
                s.mouseover.length && e.on("mouseover", function (e) {
                        $.wiki(s.mouseover.join(" "))
                }),
                s.mousein.length && e.on("mouseenter", function (e) {
                        $.wiki(s.mousein.join(" "))
                }),
                s.mouseout.length && e.on("mouseout", function (e) {
                        $.wiki(s.mouseout.join(" "))
                })
        }
}),
setup.eventMacroNamespace = "macro-event",
Macro.add("trigger", {
        handler: function () {
                var e;
                return 2 < this.args.length || 0 === this.args.length ? this.error("incorrect number of arguments") : "string" != typeof this.args[0] ? this.error("first argument should be a string and a valid event type") : (e = this.args[0], void(1 === this.args.length || this.args[1] && "string" == typeof this.args[1] && "document" === this.args[1].toLowerCase().trim() ? $(document) : $(this.args[1])).trigger(e))
        }
}),
Macro.add(["event", "on", "one"], {
        tags: ["which"],
        handler: function () {
                var e, s, n = this.payload,
                        t = "on",
                        r = "",
                        o = "";
                return 3 < this.args.length || 0 === this.args.length ? this.error("incorrect number of arguments") : "string" != typeof this.args[0] ? this.error("first argument should be a string and a valid event type") : (2 === this.args.length && "string" == typeof this.args[1] && "once" !== this.args[1] && (r = this.args[1]), !this.args.includes("once") && "one" !== this.name || (t = "one"), e = this.args[0], void $(document)[t](e + "." + setup.eventMacroNamespace, r, function (e) {
                        if (o = n[0].contents, 1 < n.length) for (s = 1; s < n.length; s++) n[s].args.includes(e.which) && (o += n[s].contents);
                        new Wikifier(null, o)
                }))
        }
}),
Macro.add("off", {
        handler: function () {
                var e;
                return 2 < this.args.length || 0 === this.args.length ? this.error("incorrect number of arguments") : "string" != typeof this.args[0] ? this.error("first argument should be a string and a valid event type or namespace") : (e = this.args[0], void(1 === this.args.length || this.args[1] && "string" == typeof this.args[1] && "document" === this.args[1].toLowerCase().trim() ? $(document) : $(this.args[1])).off(e))
        }
}),
setup.abbrNum = function (e, s) {
        s = Math.pow(10, s);
        for (var n = ["k", "m", "b", "t", "q"], t = n.length - 1; 0 <= t; t--) {
                var r = Math.pow(10, 3 * (t + 1));
                if (r <= e) {
                        1e3 == (e = Math.round(e * s / r) / s) && t < n.length - 1 && (e = 1, t++),
                        e += n[t];
                        break
                }
        }
        return e
},
Config.saves.version = 125,
Config.saves.onLoad = function (t) {
        t.state.history.forEach(function (e) {
                var s = t.version,
                        n = e.variables;
                if ((s < 120 || void 0 === s) && (n.blockTrophyAlertsForLegacySaves = !0, 30 == n.quests.firstAlien && n.MMChips.push("MM1"), 120 == n.quests.swampQuest && 0 == n.quests.factionOfferQuest && (n.quests.factionOfferQuest = 10), n.combat.playerGunDropped = 0, n.combat.playerGrenadeDropped = 0, n.combat.playerGunGone = !1, n.combat.playerGrenadeGone = !1, n.difficulty.permaDeath = !1, n.quests.mayaBullyDealtWith = !1, n.quests.mayaBullyKilled = !1, n.knowledge = {
                        salvageBarons: !1,
                        coiledCreeper: !1,
                        parentsColonists: !1,
                        parentsDead: !1,
                        outerTribesAreColonists: !1,
                        married: !1
                }, n.deltaColony = {
                        liev: {
                                met: !1,
                                hadLunch: !1,
                                postAttackEvent: !1
                        },
                        guis: {
                                met: !1
                        },
                        rachael: {
                                met: !1
                        },
                        jes: {
                                met: !1
                        },
                        siblings: {
                                met: !1
                        },
                        manAndChild: {
                                met: !1
                        },
                        shay: {
                                repairHoloArrayQuest: 0,
                                asteriaQuest: 0,
                                helpedWithMaintenance: !1,
                                toldAboutMemories: !1,
                                flirtedInTunnel: !1,
                                flirtScore: 0,
                                asteriaFixedFoodMachine: !1,
                                asteriaProperlyFixedWaterSupply: !1
                        },
                        maya: {
                                gaveBracelet: !1,
                                lostBracelet: !1
                        }
                }, n.sector54 = {
                        inquiringRobots: {
                                met: !1
                        },
                        consultingRobots: {
                                met: !1
                        },
                        mender: {
                                met: !1,
                                acceptedQuest: !1
                        },
                        face: {
                                met: !1
                        }
                }, n.shiariGrove = {
                        htayi: {
                                met: !1
                        }
                }, n.books = {
                        aliceInWonderland: {
                                cost: 1e4,
                                got: !1,
                                read: !1
                        },
                        lordValentineCastle: {
                                cost: 1e4,
                                got: !1,
                                read: !1
                        },
                        iRobot: {
                                cost: 1e4,
                                got: !1,
                                read: !1
                        },
                        dune: {
                                cost: 1e4,
                                got: !1,
                                read: !1
                        },
                        theTimeMachine: {
                                cost: 1e4,
                                got: !1,
                                read: !1
                        },
                        theShipWhoSang: {
                                cost: 1e4,
                                got: !1,
                                read: !1,
                                halfRead: !1
                        },
                        collection: {
                                booksRead: 0,
                                booksGot: 0,
                                booksMax: 6,
                                bookFirstFindMessage: !1
                        }
                }, n.memories = {
                        mm1: {
                                got: !1
                        },
                        mm2: {
                                got: !1,
                                wonFight: !1
                        },
                        mm3: {
                                got: !1
                        },
                        mm4: {
                                got: !1
                        },
                        mm5: {
                                got: !1
                        },
                        mm6: {
                                got: !1
                        },
                        mm7: {
                                got: !1
                        },
                        om1: {
                                got: !1,
                                cost: 10
                        },
                        om2: {
                                got: !1,
                                cost: 500
                        },
                        om3: {
                                got: !1,
                                cost: 1e3
                        },
                        om4: {
                                got: !1,
                                cost: 5e3
                        },
                        om5: {
                                got: !1,
                                cost: 1e4
                        },
                        em1: {
                                got: !1,
                                watched: !1,
                                cost: 1e4
                        },
                        em2: {
                                got: !1,
                                watched: !1,
                                cost: 1e4
                        },
                        em3: {
                                got: !1,
                                watched: !1,
                                ring: !1,
                                cost: 1e4
                        },
                        em4: {
                                got: !1,
                                watched: !1,
                                cost: 1e4
                        }
                }, n.MMChips.includes("MM1") && (n.memories.mm1.got = !0), n.MMChips.includes("MM2") && (n.memories.mm2.got = !0), n.MMChips.includes("MM3") && (n.memories.mm3.got = !0), n.MMChips.includes("MM4") && (n.memories.mm4.got = !0), n.MMChips.includes("MM5") && (n.memories.mm5.got = !0), n.MMChips.includes("MM6") && (n.memories.mm6.got = !0), n.MMChips.includes("MM7") && (n.memories.mm7.got = !0), n.MMChips.includes("OM1") && (n.memories.om1.got = !0), n.MMChips.includes("OM2") && (n.memories.om2.got = !0), n.MMChips.includes("OM3") && (n.memories.om3.got = !0), n.MMChips.includes("OM4") && (n.memories.om4.got = !0), n.MMChips.includes("OM5") && (n.memories.om5.got = !0), 40 <= n.quests.sector36Quest && (n.ability.machineHeal = !0)), (s < 103 || void 0 === s) && (n.dialogQue = [], n.explore.triggerChainEvent = !1, n.explore.turnsSinceChainEvent = 0, n.exploreChainEventsHappened = [], n.exploreChainEventNextScene = [], n.exploreChainEventCurrent = []), (s < 100 || void 0 === s) && (n.score = {
                        current: 0,
                        totalKills: 0,
                        colonistsKilled: 0,
                        outerTribesKilled: 0,
                        infectedMachinesKilled: 0,
                        regularMachinesKilled: 0,
                        xiriiKilled: 0,
                        creaturesHunted: 0,
                        totalSpared: 0,
                        subdued: 0,
                        talkedTo: 0,
                        machinesHealed: 0,
                        timesDied: 0,
                        timesFled: 0,
                        totalChipsCollected: 0,
                        lowestDifficultyUsed: 10,
                        lastEndingObtained: 0
                }, n.explore.baseChipsEvent = [7, 70, 700, 7e3], n.combat.subdueChipBonus = 40, n.combat.talkChipBonus = 80, n.combat.healChipBonus = 150, n.score.lowestDifficultyUsed = n.difficulty.level, n.currentGameStart = {
                        start: "Start1",
                        levelsKept: !1,
                        upgradesKept: !1
                }, n.difficulty.permaDeath = !1), (s < 6 || void 0 === s) && (n.title = {
                        firstPart: "Fragment",
                        secondPart: ""
                }, n.originalPC = {
                        seenSelf: !0,
                        hairColour: "brown",
                        eyeColour: "blue"
                }, n.charted.ruins = !0, n.quests.tutorialComplete = !0, n.player.combatApproach = "mixed"), s < 5 || void 0 === s) switch (n.difficulty.level) {
                case -1:
                        n.combat.defendBonus = 20;
                        break;
                case 1:
                        n.combat.defendBonus = 5;
                        break;
                default:
                        n.combat.defendBonus = 10
                }
                void 0 === s && void 0 === n.charted.huntingGrounds && (n.charted.huntingGrounds = !1),
                n.gameVersion.major = 1,
                n.gameVersion.minor = 2,
                n.gameVersion.patch = 5
        }),
        t.version = Config.saves.version
},
Macro.add("dialog", {
        tags: ["onopen", "onclose"],
        handler: function () {
                var n = "",
                        t = null,
                        r = null,
                        e = 0 < this.args.length ? this.args[0] : "",
                        s = 1 < this.args.length ? this.args.slice(1).flatten() : [];
                this.payload.forEach(function (e, s) {
                        0 === s ? n = e.contents : "onopen" === e.name ? t = t ? t + e.contents : e.contents : r = r ? r + e.contents : e.contents
                }),
                s.push("macro-" + this.name),
                Dialog.setup(e, s.join(" ")),
                Dialog.wiki(n),
                t && "string" == typeof t && t.trim() && $(document).one(":dialogopened", function () {
                        $.wiki(t)
                }),
                r && "string" == typeof r && r.trim() && $(document).one(":dialogclosed", function () {
                        $.wiki(r)
                }),
                Dialog.open()
        }
}),
Macro.add("popup", {
        handler: function () {
                if (this.args.length < 1) return this.error("need at least one argument; the passage to display");
                if (!Story.has(this.args[0])) return this.error("the passage " + this.args[0] + "does not exist");
                var e = this.args[0],
                        s = 1 < this.args.length ? this.args[1] : "",
                        n = 2 < this.args.length ? this.args.slice(2).flatten() : [];
                n.push("macro-" + this.name),
                Dialog.setup(s, n.join(" ")),
                Dialog.wiki(Story.get(e).processText()),
                Dialog.open()
        }
}),
Macro.add("dialogclose", {
        skipArgs: !0,
        handler: function () {
                Dialog.close()
        }
}),


function () {
        var g = {
                tryGlobal: !0,
                defaultStrings: {
                        empty: "The inventory is empty...",
                        listDrop: "Discard",
                        separator: "\n"
                }
        };

        function o(e, s, n, t) {
                $(document).trigger({
                        type: "initialized" === t ? ":inventory-init" : ":inventory-update",
                        instance: e,
                        receiving: s,
                        moved: n,
                        context: t
                })
        }
        function a(e) {
                if (e = e ? (e = [].slice.call(arguments)).flatten() : [], !(this instanceof a)) return new a(e);
                this.inv = e,
                o(this, null, e = e.length ? e : null, "initialized")
        }
        Object.assign(a, {
                is: function (e) {
                        return e instanceof a
                },
                log: function (e) {
                        return a.is(e) ? "Inventory.log() -> " + e.toArray().join(" - ") : "Inventory.log() -> object is not an inventory..."
                },
                removeDuplicates: function (e) {
                        if (a.is(e)) {
                                var s, e = e.toArray();
                                return s = [],
                                e.forEach(function (e) {
                                        s.includes(e) || s.push(e)
                                }),
                                s
                        }
                }
        }),
        Object.assign(a.prototype, {
                transfer: function (e) {
                        if (arguments.length < 2) return this;
                        if (!a.is(e)) return this;
                        for (var s = [].slice.call(arguments), n = [], t = 0, r = (s = s.slice(1).flatten()).length; t < r; t++) this.inv.includes(s[t]) && (this.inv.delete(s[t]), n.push(s[t]));
                        return n.length && (e.inv = e.inv.concat(n), o(this, e, n, "transfer")),
                        this
                },
                has: function () {
                        var e = [].slice.call(arguments).flatten();
                        return !(!e || !e.length) && this.inv.includesAny(e)
                },
                hasAll: function () {
                        var e = [].slice.call(arguments).flatten();
                        return !(!e || !e.length) && this.inv.includesAll(e)
                },
                pickUp: function (e) {
                        var s, n = [].slice.call(arguments).flatten(),
                                t = this;
                        return n && n.length && ("unique" !== e && "unique" !== n[0] || (n = n.splice(1), s = [], n.forEach(function (e) {
                                t.inv.includes(e) || s.includes(e) || s.push(e)
                        }), n = s), this.inv = this.inv.concat(n), o(this, null, n, "pickup")),
                        this
                },
                drop: function () {
                        var s, n, e = [].slice.call(arguments).flatten(),
                                t = this;
                        return e && e.length && (n = [], e.forEach(function (e) {
                                t.has(e) && (n.push(e), s = t.inv.indexOf(e), t.inv.deleteAt(s))
                        }), o(this, null, n, "drop")),
                        this
                },
                sort: function () {
                        return this.inv = this.inv.sort(),
                        o(this, null, null, "sort"),
                        this
                },
                show: function (e) {
                        return e && "string" == typeof e || (e = g.defaultStrings.separator),
                        this.inv.length ? this.inv.join(e) : g.defaultStrings.empty
                },
                empty: function () {
                        var e = clone(this.inv);
                        return this.inv = [],
                        o(this, null, e, "drop"),
                        this
                },
                toArray: function () {
                        return this.inv
                },
                count: function (s) {
                        if (s && "string" == typeof s) {
                                var n = 0;
                                return this.toArray().forEach(function (e) {
                                        e === s && n++
                                }),
                                n
                        }
                        return this.toArray().length
                },
                isEmpty: function () {
                        return 0 === this.toArray().length
                },
                linkedList: function (i, u) {
                        i && a.is(i) || (i = !1);
                        var e = this.toArray(),
                                c = this,
                                l = $(document.createElement("span"));
                        return e && e.length ? e.forEach(function (e, s, n) {
                                var t = $(document.createElement("span")),
                                        r = $(document.createElement("a")),
                                        o = u || g.defaultStrings.drop,
                                        a = function (e, s) {
                                                var n = Math.random().toString(36).substring(7);
                                                return arguments.length < 2 && (e = Math.random().toString(36).substring(7), s = random(99)),
                                                "simple-inv-" + s + "-" + Date.now() + "-" + e.replace(/[^A-Za-z0-9]/g, "") + "-" + n
                                        }(e, s);
                                r.wiki(o).addClass("simple-inv drop-link"),
                                r.ariaClick(function () {
                                        i ? c.transfer(i, e) : c.drop(e),
                                        $("#" + a).empty()
                                }),
                                t.attr("id", a).addClass("simple-inv link-listing").wiki(e + " ").append(r),
                                s < n.length - 1 && t.wiki("<br />"),
                                l.append(t)
                        }) : l.wiki(g.defaultStrings.empty),
                        l
                },
                constructor: a,
                toJSON: function () {
                        return JSON.reviveWrapper("new setup.Inventory(" + JSON.stringify(this.inv) + ")")
                },
                clone: function () {
                        return new a(this.inv)
                }
        }),
        setup.Inventory = a,
        setup.simpleInv = {
                inventory: a
        },
        g.tryGlobal && (window.Inventory = window.Inventory || a),
        Macro.add("newinventory", {
                handler: function () {
                        if (this.args.length < 1) return this.error("incorrect number of arguments");
                        var e = this.args[0].trim();
                        if ("$" !== e[0] && "_" !== e[0]) return this.error('variable name "' + this.args[0] + '" is missing its sigil ($ or _)');
                        Wikifier.setValue(e, new a(this.args.slice(1).flatten()))
                }
        }),
        Macro.add("pickup", {
                handler: function () {
                        if (this.args.length < 2) return this.error("incorrect number of arguments");
                        var e = this.args[0].trim();
                        if ("$" !== e[0] && "_" !== e[0]) return this.error('variable name "' + this.args[0] + '" is missing its sigil ($ or _)');
                        var s = Wikifier.getValue(e);
                        if (!a.is(s)) return this.error("variable " + e + " is not an inventory!");
                        s.pickUp(this.args.slice(1).flatten())
                }
        }),
        Macro.add("drop", {
                handler: function () {
                        if (this.args.length < 2) return this.error("incorrect number of arguments");
                        var e = this.args[0].trim();
                        if ("$" !== e[0] && "_" !== e[0]) return this.error('variable name "' + this.args[0] + '" is missing its sigil ($ or _)');
                        var s = Wikifier.getValue(e);
                        if (!a.is(s)) return this.error("variable " + e + " is not an inventory!");
                        s.drop(this.args.slice(1).flatten())
                }
        }),
        Macro.add("transfer", {
                handler: function () {
                        if (this.args.length < 3) return this.error("incorrect number of arguments");
                        var e = this.args[0].trim();
                        if ("$" !== e[0] && "_" !== e[0]) return this.error('variable name "' + this.args[0] + '" is missing its sigil ($ or _)');
                        var s = Wikifier.getValue(e);
                        if (!a.is(s)) return this.error("variable " + e + " is not an inventory!");
                        var n = this.args[1].trim();
                        if ("$" !== n[0] && "_" !== n[0]) return this.error('variable name "' + this.args[1] + '" is missing its sigil ($ or _)');
                        e = Wikifier.getValue(n);
                        if (!a.is(e)) return this.error("variable " + n + " is not an inventory!");
                        s.transfer(e, this.args.slice(2).flatten())
                }
        }),
        Macro.add("dropall", {
                handler: function () {
                        if (1 !== this.args.length) return this.error("incorrect number of arguments");
                        var e = this.args[0].trim();
                        if ("$" !== e[0] && "_" !== e[0]) return this.error('variable name "' + this.args[0] + '" is missing its sigil ($ or _)');
                        var s = Wikifier.getValue(e);
                        if (!a.is(s)) return this.error("variable " + e + " is not an inventory!");
                        s.empty()
                }
        }),
        Macro.add("clear", "dropall", !1),
        Macro.add("sort", {
                handler: function () {
                        if (1 !== this.args.length) return this.error("incorrect number of arguments");
                        var e = this.args[0].trim();
                        if ("$" !== e[0] && "_" !== e[0]) return this.error('variable name "' + this.args[0] + '" is missing its sigil ($ or _)');
                        var s = Wikifier.getValue(e);
                        if (!a.is(s)) return this.error("variable " + e + " is not an inventory!");
                        s.sort()
                }
        }),
        Macro.add("inventory", {
                handler: function () {
                        if (this.args.length < 1 || 2 < this.args.length) return this.error("incorrect number of arguments");
                        var e = this.args[0].trim();
                        if ("$" !== e[0] && "_" !== e[0]) return this.error('variable name "' + this.args[0] + '" is missing its sigil ($ or _)');
                        var s = Wikifier.getValue(e);
                        if (!a.is(s)) returnthis.error("variable " + e + " is not an inventory!");
                        var n = $(document.createElement("span")),
                                e = this.args[1] || !1;
                        n.wiki(s.show(e)).addClass("macro-" + this.name).appendTo(this.output)
                }
        }),
        Macro.add("linkedinventory", {
                handler: function () {
                        if (this.args.length < 2 || 3 < this.args.length) return this.error("incorrect number of arguments");
                        var e = !1,
                                s = "",
                                n = this.args[1].trim(),
                                t = "string" == typeof this.args[0] && this.args[0];
                        if (!t) return this.error("first argument should be the link text");
                        if ("$" !== n[0] && "_" !== n[0]) return this.error('variable name "' + this.args[1] + '" is missing its sigil ($ or _)');
                        var r = Util.slugify(n),
                                r = this.name + "-" + r,
                                o = Wikifier.getValue(n);
                        if (!a.is(o)) return this.error("variable " + n + " is not an inventory!");
                        if (2 < this.args.length) {
                                if ("$" !== (s = this.args[2].trim())[0] && "_" !== s[0]) return this.error('variable name "' + this.args[2] + '" is missing its sigil ($ or _)');
                                if (e = Wikifier.getValue(s), !a.is(e)) return this.error("variable " + s + " is not an inventory!")
                        }
                        o.linkedList(e, t).attr({
                                id: r,
                                "data-rec": s,
                                "data-self": n,
                                "data-action": t
                        }).addClass("macro-" + this.name).appendTo(this.output)
                }
        })
}();