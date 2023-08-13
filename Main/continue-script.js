(function () {
    // v1.0.1
    'use strict';

    // selectors to ignore
    var ignored = ['a', ':button', '*[role="button"]', '.continue-macro-ignore', '#ui-bar', '#ui-dialog'];

    var _i = 0;

    prehistory['%%continue-expiration'] = function () {
        _i = 0;
    };

    function ns () {
        // create unique namespace
        var namespace = '.' + Date.now().toString(36) + '-' + _i;
        _i++;
        return namespace;
    }

    function ignoreMe () {
        $(document).on('click.continue-macro keyup.continue-macro', ignored.join(', '), function (ev) { 
            ev.stopPropagation(); 
        });
    }

    function addIgnore () {
        if (State.length > 0) {
            return false;
        }
        var args = [].slice.call(arguments).flatten();
        ignored = ignored.concat(args);
        return true;
    }

    $(document).one(':passagerender', function () {
        // on first render, set up the ignore list
        ignoreMe();
    });

    // continue functions
    function cont (press, cb) {
        var namespace = ns();
        if (!cb || typeof cb !== 'function') {
            return;
        }
        var events = 'click.continue-macro' + namespace;
        if (press) {
            events = events + ' keyup.continue-macro' + namespace;
        }
        $(document).one(events, function () {
            cb.call();
            // expire all namespaced events
            $(document).off(namespace);
        });
    }

    function reset () {
        var args = [].slice.call(arguments).flatten();
        ignored = ignored.concat(args);
        $(document).off('.continue-macro');
        ignoreMe();
    }

    // macros

    // <<ignore selectors...>>
    Macro.add('ignore', {
        handler : function () {
            var check = addIgnore(this.args);
            if (!check) {
                return this.error('the <<ignore>> macro should only be run from StoryInit or equivalent.');
            }
        }
    });

    // <<cont [append] [press]>>Code<</cont>>
    Macro.add('cont', {
        tags : null,
        handler : function () {
            var append = this.args.includes('append'), // append keyword
                press = this.args.includesAny('key', 'keypress', 'press', 'button'), // keypress keyword
                wiki = this.payload[0].contents, // content to wikify
                $output; // output element (if needed)

            if (append) {
                // create output element, but only if needed (e.g. if appending content)
                $output = $(document.createElement('span'))
                    .addClass('macro-' + this.name)
                    .appendTo(this.output);
            }

            cont(press, this.createShadowWrapper( function () {
                // wikify 
                if (append && $output && $output instanceof $) {
                    $output.wiki(wiki);
                } else {
                    $.wiki(wiki);
                }
            }));
        }
    });

    // APIs

    setup.cont = cont;
    setup.cont.ignore = addIgnore;
    setup.cont.reset = reset;

    window.cont = window.cont || setup.cont;

}());


// Player

Macro.add('pln', {
	tags     : null,
	handler  : function () {
		var id = this.args[0], name = id;
		if (this.args.length > 1) name = this.args[1];
		var output = '<div class="playersp ' + id + '">';
		output += '<span class="playerav" style="margin-right:1.25rem"></span>';
		output += '<div class="playername" style="display:block;padding:3.125rem 0rem 0rem 0rem">$Player.name</div>' + '<hr style="display:block;margin-top:3.75rem;height:1px;border-width:0;color:rgb(74, 4, 95);background-color:rgb(74, 4, 95)">' + this.payload[0].contents + '</div>';
		$(this.output).wiki(output);
	}
});

// Playerinter

Macro.add('pli', {
	tags     : null,
	handler  : function () {
		var id = this.args[0], name = id;
		if (this.args.length > 1) name = this.args[1];
		var output = '<div class="playerinter ' + id + '">';
		output += this.payload[0].contents + '</div>';
		$(this.output).wiki(output);
	}
});


// Xander
Macro.add('xander', {
	tags     : null,
	handler  : function () {
		var id = this.args[0], name = id;
		if (this.args.length > 1) name = this.args[1];
		var output = '<div class="xandersp ' + id + '">';
		output += '<span class="xanderav" style="margin-right:1.25rem"></span>';
		output += '<div class="xandername" style="display:block;padding:3.125rem 0rem 0rem 0rem">$Xander.name</div>' + '<hr style="display:block;margin-top:3.75rem;height:1px;border-width:0;color:rgb(5, 97, 66);background-color:rgb(5, 97, 66)">' + this.payload[0].contents + '</div>';
		$(this.output).wiki(output);
	}
});

// Cul
Macro.add('cul', {
	tags     : null,
	handler  : function () {
		var id = this.args[0], name = id;
		if (this.args.length > 1) name = this.args[1];
		var output = '<div class="cullensp ' + id + '">';
		output += '<span class="cullenav" style="margin-right:1.25rem;"></span>';
		output += '<div class="cullenname" style="display:block;padding:3.125rem 0rem 0rem 0rem">$Cullen.name</div>' + '<hr style="display:block;margin-top:3.75rem;height:1px;border-width:0;color:rgb(8, 72, 97);background-color:rgb(8, 72, 97)">' + this.payload[0].contents + '</div>';
		$(this.output).wiki(output);
	}
});

// Captain Bohannon
Macro.add('capt', {
	tags     : null,
	handler  : function () {
		var id = this.args[0], name = id;
		if (this.args.length > 1) name = this.args[1];
		var output = '<div class="cptsp ' + id + '">';
		output += '<span class="cptav" style="margin-right:1.25rem"></span>';
		output += '<div class="cptname" style="display:block;padding:3.125rem 0rem 0rem 0rem">Капитан Бохэннон</div>' + '<hr style="display:block;margin-top:3.75rem;height:1px;border-width:0;color:rgb(70, 73, 75);background-color:rgb(70, 73, 75)">' + this.payload[0].contents + '</div>';
		$(this.output).wiki(output);
	}
});

// Jack Ebwinter

Macro.add('jack', {
	tags     : null,
	handler  : function () {
		var id = this.args[0], name = id;
		if (this.args.length > 1) name = this.args[1];
		var output = '<div class="jacksp ' + id + '">';
		output += '<span class="jackav" style="margin-right:1.25rem"></span>';
		output += '<div class="jackname" style="display:block;padding:3.125rem 0rem 0rem 0rem">$Jack.name</div>' + '<hr style="display:block;margin-top:3.75rem;height:1px;border-width:0;color:#855a11;background-color:#855a11">' + this.payload[0].contents + '</div>';
		$(this.output).wiki(output);
	}
});




/* Set up a handler for the enabling and disabling of the history-backward/-forward buttons. */
jQuery(document)
	.on(':historyupdate.ui-bar',
		(function ($backward, $forward) {
			return function () {
				$backward.prop('disabled', State.length < 2);
				$forward.prop('disabled', State.length === State.size);
			};
		})(jQuery('#history-backward'), jQuery('#history-forward'))
	);

/* Set up a handler for the selection of the history-backward button. */
jQuery('#history-backward')
	.prop('disabled', State.length < 2)
	.ariaClick({
		label : L10n.get('uiBarBackward')
	}, function () {
		Engine.backward()
	});

/* Set up a handler for the selection of the history-forward button. */
jQuery('#history-forward')
	.prop('disabled', State.length === State.size)
	.ariaClick({
		label : L10n.get('uiBarForward')
	}, function () {
		Engine.forward()
	});







    postrender["Associate Special Passages"] = function (content, taskName) {
	setPageElement("story-title", "StoryTitle", Story.title);
	setPageElement("story-banner","StoryBanner");
	setPageElement("story-subtitle","StorySubtitle");
	setPageElement("story-author","StoryAuthor");
	setPageElement("story-caption","StoryCaption");
}

setup.mydice = function() {
    return [1,2,3,4,5,6,7,8,9,10,10,11,11,12,12].random();
  }