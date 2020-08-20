// "js_url": "https://pastebin.com/raw/EfKuJhGi",

// ID from Zipwhip App Store
// 650c1506-2d69-4fcb-afa8-614e11c88c87

// ID for Dev version in App Store
// 773099ed-54ed-42ac-80d9-5c17a928a83e

/*
{
    "metadata": {
        "logoUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-0507516972095fdc1d4739f031c7ae99&f=1&nofb=1",
        "name": "Translator (Localhost Dev)",
        "tagline": "Translate languages",
        "description": ""
    },
    "urls": {
        "activate_url": "http://178.128.129.151:8080/function/translate/activate",
        "deactivate_url": "http://178.128.129.151:8080/function/translate/deactivate",
        "js_url": "http://localhost:8080/zw-plugin-langtrans/plugin.js"
    },
    "published": true,
    "comingSoon": false
}
*/

// Language Translator Plugin

var pluginLangTranslator = {
    // The ID should be camel case, prefixed with your company name/initials, and be a short
    // name for this plugin. It gets pre-pended to a lot of HTML element class names, CSS styles,
    // data attributes, etc. throughout the Zipwhip app. So this name is important.
    // Example: AuthviaPayments, ZwSuggReply, ZwSentiment, ZwNpsSurvey, SenseforthCreditUnion
    id: "ZwLangTrans", // This gets prepended to all CSS styles and class names so not to clobber other plugins

    settings: {
        name: "Language Translator",
        description: "You can translate language on your text messages automatically in the Zipwhip cloud as well as see a preview of the translation in many of the Zipwhip front-end apps.",
    },

    iconBaseSvg: '<svg width="24" height="24" viewBox="0 0 24 24"><g transform="matrix(.046649 0 0 .046649 .071778 22.966)"><g transform="translate(0,-488)"><path d="m272.53 56.558v198.99l50.73-39.682h188.74v-159.31zm224.44 144.28h-178.98l-30.428 23.441v-152.69h209.41z"/></g><g transform="translate(0,-488)"><path d="m0 256.95v159.31h189.74l49.728 39.682v-198.99zm224.44 167.72-29.426-23.442h-179.98v-129.25h209.41z"/></g><g transform="translate(0,-488)"><path d="m81.54 206.63-20.116-20.117-10.628 10.628 37.376 37.376 37.377-37.376-10.628-10.628-18.012 18.013c9.545-75.145 73.88-133.44 151.58-133.44v-15.03c-86.713 0-158.28 66.107-166.94 150.57z"/></g><g transform="translate(0,-488)"><path d="m424.83 277.38-37.377 37.376 10.628 10.628 18.012-18.013c-9.546 75.145-73.881 133.44-151.58 133.44v15.029c86.713 0 158.28-66.106 166.94-150.57l20.116 20.117 10.628-10.628z"/></g><g transform="translate(0,-488)"><rect x="72.141" y="297.03" width="128.25" height="15.029"/></g><g transform="translate(0,-488)"><rect x="40.078" y="329.09" width="128.25" height="15.029"/></g><g transform="translate(0,-488)"><rect x="40.078" y="361.16" width="96.188" height="15.029"/></g><g transform="translate(0,-488)"><rect x="184.36" y="329.09" width="16.031" height="15.029"/></g><g transform="translate(0,-488)"><rect x="40.078" y="297.03" width="16.031" height="15.029"/></g><g transform="translate(0,-488)"><rect x="376.74" y="96.639" width="96.188" height="15.029"/></g><g transform="translate(0,-488)"><rect x="312.61" y="128.7" width="160.31" height="15.029"/></g><g transform="translate(0,-488)"><rect x="344.67" y="160.76" width="80.157" height="15.029"/></g><g transform="translate(0,-488)"><rect x="312.61" y="160.76" width="16.031" height="15.029"/></g><g transform="translate(0,-488)"><rect x="312.61" y="96.639" width="16.031" height="15.029"/></g><g transform="translate(0,-488)"><rect x="344.67" y="96.639" width="16.031" height="15.029"/></g></g></svg>',
    iconHoverSvg: '<svg width="24" height="24" viewBox="0 0 24 24"><g transform="matrix(.046649 0 0 .046649 .071778 22.966)" fill="#549ed1"><path d="m272.53-431.44v198.99l50.73-39.682h188.74v-159.31zm224.44 144.28h-178.98l-30.428 23.441v-152.69h209.41z"/><g transform="translate(0,-488)"><path d="m0 256.95v159.31h189.74l49.728 39.682v-198.99zm224.44 167.72-29.426-23.442h-179.98v-129.25h209.41z" fill="#549ed1"/></g><g transform="translate(0,-488)"><path d="m81.54 206.63-20.116-20.117-10.628 10.628 37.376 37.376 37.377-37.376-10.628-10.628-18.012 18.013c9.545-75.145 73.88-133.44 151.58-133.44v-15.03c-86.713 0-158.28 66.107-166.94 150.57z" fill="#549ed1"/></g><g transform="translate(0,-488)"><path d="m424.83 277.38-37.377 37.376 10.628 10.628 18.012-18.013c-9.546 75.145-73.881 133.44-151.58 133.44v15.029c86.713 0 158.28-66.106 166.94-150.57l20.116 20.117 10.628-10.628z" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="72.141" y="297.03" width="128.25" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="40.078" y="329.09" width="128.25" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="40.078" y="361.16" width="96.188" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="184.36" y="329.09" width="16.031" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="40.078" y="297.03" width="16.031" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="376.74" y="96.639" width="96.188" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="312.61" y="128.7" width="160.31" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="344.67" y="160.76" width="80.157" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="312.61" y="160.76" width="16.031" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="312.61" y="96.639" width="16.031" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="344.67" y="96.639" width="16.031" height="15.029" fill="#549ed1"/></g></g></svg>',
    iconToggleSvg: '<svg width="24" height="24" viewBox="0 0 24 24"><g transform="matrix(.046649 0 0 .046649 .071778 22.966)"><path d="m6.9779-80.034 186.59 1.1614 39.68 31.163-4.2583-175.95h-223.17z" fill="#c2def2"/><path d="m281.06-424.18-1.5485 174.2 39.68-29.615 184.46-0.77424v-142.27z" fill="#c2def2"/><g fill="#549ed1"><path d="m272.53-431.44v198.99l50.73-39.682h188.74v-159.31zm224.44 144.28h-178.98l-30.428 23.441v-152.69h209.41z"/><g transform="translate(0,-488)"><path d="m0 256.95v159.31h189.74l49.728 39.682v-198.99zm224.44 167.72-29.426-23.442h-179.98v-129.25h209.41z" fill="#549ed1"/></g><g transform="translate(0,-488)"><path d="m81.54 206.63-20.116-20.117-10.628 10.628 37.376 37.376 37.377-37.376-10.628-10.628-18.012 18.013c9.545-75.145 73.88-133.44 151.58-133.44v-15.03c-86.713 0-158.28 66.107-166.94 150.57z" fill="#549ed1"/></g><g transform="translate(0,-488)"><path d="m424.83 277.38-37.377 37.376 10.628 10.628 18.012-18.013c-9.546 75.145-73.881 133.44-151.58 133.44v15.029c86.713 0 158.28-66.106 166.94-150.57l20.116 20.117 10.628-10.628z" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="72.141" y="297.03" width="128.25" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="40.078" y="329.09" width="128.25" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="40.078" y="361.16" width="96.188" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="184.36" y="329.09" width="16.031" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="40.078" y="297.03" width="16.031" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="376.74" y="96.639" width="96.188" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="312.61" y="128.7" width="160.31" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="344.67" y="160.76" width="80.157" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="312.61" y="160.76" width="16.031" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="312.61" y="96.639" width="16.031" height="15.029" fill="#549ed1"/></g><g transform="translate(0,-488)"><rect x="344.67" y="96.639" width="16.031" height="15.029" fill="#549ed1"/></g></g></g></svg>',
    iconTopRegionSvg: '<svg width="18" height="18" viewBox="0 0 24 24"><g fill="#b6bbc3" transform="matrix(.046649 0 0 .046649 .071778 22.966)"><g transform="translate(0,-488)"><path d="m272.53 56.558v198.99l50.73-39.682h188.74v-159.31zm224.44 144.28h-178.98l-30.428 23.441v-152.69h209.41z"/></g><g transform="translate(0,-488)"><path d="m0 256.95v159.31h189.74l49.728 39.682v-198.99zm224.44 167.72-29.426-23.442h-179.98v-129.25h209.41z"/></g><g transform="translate(0,-488)"><path d="m81.54 206.63-20.116-20.117-10.628 10.628 37.376 37.376 37.377-37.376-10.628-10.628-18.012 18.013c9.545-75.145 73.88-133.44 151.58-133.44v-15.03c-86.713 0-158.28 66.107-166.94 150.57z"/></g><g transform="translate(0,-488)"><path d="m424.83 277.38-37.377 37.376 10.628 10.628 18.012-18.013c-9.546 75.145-73.881 133.44-151.58 133.44v15.029c86.713 0 158.28-66.106 166.94-150.57l20.116 20.117 10.628-10.628z"/></g><g transform="translate(0,-488)"><rect x="72.141" y="297.03" width="128.25" height="15.029"/></g><g transform="translate(0,-488)"><rect x="40.078" y="329.09" width="128.25" height="15.029"/></g><g transform="translate(0,-488)"><rect x="40.078" y="361.16" width="96.188" height="15.029"/></g><g transform="translate(0,-488)"><rect x="184.36" y="329.09" width="16.031" height="15.029"/></g><g transform="translate(0,-488)"><rect x="40.078" y="297.03" width="16.031" height="15.029"/></g><g transform="translate(0,-488)"><rect x="376.74" y="96.639" width="96.188" height="15.029"/></g><g transform="translate(0,-488)"><rect x="312.61" y="128.7" width="160.31" height="15.029"/></g><g transform="translate(0,-488)"><rect x="344.67" y="160.76" width="80.157" height="15.029"/></g><g transform="translate(0,-488)"><rect x="312.61" y="160.76" width="16.031" height="15.029"/></g><g transform="translate(0,-488)"><rect x="312.61" y="96.639" width="16.031" height="15.029"/></g><g transform="translate(0,-488)"><rect x="344.67" y="96.639" width="16.031" height="15.029"/></g></g></svg>',

    langList: [{"pretty":"Arabic","short":"ar"},{"pretty":"Bulgarian","short":"bg"},{"pretty":"Bangla","short":"bn"},{"pretty":"Bosnian","short":"bs"},{"pretty":"Catalan","short":"ca"},{"pretty":"Czech","short":"cs"},{"pretty":"Welsh","short":"cy"},{"pretty":"Danish","short":"da"},{"pretty":"German","short":"de"},{"pretty":"Greek","short":"el"},{"pretty":"English","short":"en"},{"pretty":"Spanish","short":"es"},{"pretty":"Estonian","short":"et"},{"pretty":"Persian","short":"fa"},{"pretty":"Finnish","short":"fi"},{"pretty":"Filipino","short":"fil"},{"pretty":"Fijian","short":"fj"},{"pretty":"French","short":"fr"},{"pretty":"Hebrew","short":"he"},{"pretty":"Hindi","short":"hi"},{"pretty":"Croatian","short":"hr"},{"pretty":"Haitian","short":"ht"},{"pretty":"Hungarian","short":"hu"},{"pretty":"Indonesian","short":"id"},{"pretty":"Icelandic","short":"is"},{"pretty":"Italian","short":"it"},{"pretty":"Japanese","short":"ja"},{"pretty":"Korean","short":"ko"},{"pretty":"Lithuanian","short":"lt"},{"pretty":"Latvian","short":"lv"},{"pretty":"Malagasy","short":"mg"},{"pretty":"Maori","short":"mi"},{"pretty":"Malay","short":"ms"},{"pretty":"Maltese","short":"mt"},{"pretty":"Hmong Daw","short":"mww"},{"pretty":"Norwegian","short":"nb"},{"pretty":"Dutch","short":"nl"},{"pretty":"Otomi","short":"otq"},{"pretty":"Polish","short":"pl"},{"pretty":"Portuguese","short":"pt"},{"pretty":"Romanian","short":"ro"},{"pretty":"Russian","short":"ru"},{"pretty":"Slovak","short":"sk"},{"pretty":"Slovenian","short":"sl"},{"pretty":"Samoan","short":"sm"},{"pretty":"Swedish","short":"sv"},{"pretty":"Kiswahili","short":"sw"},{"pretty":"Tamil","short":"ta"},{"pretty":"Telugu","short":"te"},{"pretty":"Thai","short":"th"},{"pretty":"Klingon","short":"tlh"},{"pretty":"Tongan","short":"to"},{"pretty":"Turkish","short":"tr"},{"pretty":"Tahitian","short":"ty"},{"pretty":"Ukrainian","short":"uk"},{"pretty":"Urdu","short":"ur"},{"pretty":"Vietnamese","short":"vi"},{"pretty":"Yucatec Maya","short":"yua"},{"pretty":"Cantonese","short":"yue"},{"pretty":"Serbian (Cyrillic)","short":"sr-Cyrl"},{"pretty":"Serbian (Latin)","short":"sr-Latn"},{"pretty":"Chinese (Simplified)","short":"zh-Hans"},{"pretty":"Chinese (Traditional)","short":"zh-Hant"}],

    // This is the boot code for a plugin. It is called once the page is loaded.
    // This is the only code that is automatically called by Zipwhip on load of a plugin.
    // For all other events you must register for them in your onLoad event.
    // The onLoad method in your plugin object is called ONCE and only ONCE.
    // RESERVED NAME
    onLoad: function() {

        // Register our plugin with Zipwhip so it's aware of us
        // Don't really need to pass "this" yet as 2nd param, but maybe the plugin system
        // will need it in the future.
        //zw.plugin.register(this.id, this.settings, this);

        zw.plugin.addCss(
"." + this.id + `-composebox-topregion-body {
    flex-direction: column;
    display: flex;
    width: 100%;
}
.` + this.id + `-mainrow {
    flex-direction: row;
    display: flex;
    font-size: 12px;
}
.` + this.id + `-title {
    flex-grow:1;
}
.` + this.id + `-translatedtext {
    flex-grow: 1;
}
select.` + this.id + `-onoffauto {
    font-size:12px;
}
select.plugin-select-airy {
    font-size:12px;
    border: 0px;
    background: transparent;
}
`);
        zw.plugin.addCssUrl();

        // listen to events
        zw.plugin.addEventListener(zw.plugin.events.COMPOSE_BOX_LOAD, this.onComposeBoxLoad.bind(this));
        zw.plugin.addEventListener(zw.plugin.events.SIDE_PANEL_LOAD, this.onSidePanelLoad.bind(this));

    },

    // The code below in this plugin is any name you want to use. Consider making these private methods/props.

    // We are called when the Compose Box is loaded. In the event object we are given
    // the current Conversation object which has a ConversationId and Contacts array
    // with ContactId's.
    // This is called each time a conversation is changed.
    /*
       composeTextAreaEl: composeTextAreaEl,
       composeBoxBtnBarPluginEl: composeBoxBtnBarPluginEl,
       composeTopRegionPluginEl: composeTopRegionPluginEl,
       phoneObj: newPhoneObj,
       phone: newPhone,
       oldPhone: oldPhone,
       conversation: conversation,
       contactId: contactId
    */
    onComposeBoxLoad: function(evt) {
        console.log("Got plugin onComposeBoxLoad. evt:", evt);

        // store the textarea for now in this plugin obj so we can retrieve it later
        this.composeBoxTextAreaEl = evt.composeTextAreaEl;

        // Let's get our user settings first.
        var that = this;
        this.ajaxGetSettingsPerContactId(evt.contactId, function(settings) {
            console.log("got back from ajax call getting settings for this contactId. settings:", settings);

            // see if null. if so then we know the defaults of english and auto
            if (settings == null) {
                settings = {
                    locale: 'English',
                    state: 'Auto'
                }
            }

            // Create a full-blown object with all of our info and settings so we can
            // use it downstream as we create the UI
            var loadEvtObj = evt;
            loadEvtObj.langSettings = settings;

            // Setup my Compose Box Button Bar. Lazy load since we don't really know what final
            // scope our button will have, meaning will it be re-created each time? We don't know
            // as it will have a lifecyle based on React, so if we just lazy load then we're pretty
            // safe regardless of how the final implementation comes out. Another way of looking at
            // it is as long as we getOrCreateComposeBoxBtnBar() each time the compose box loads, that method
            // provided to us by core Zipwhip, will always ensure the button is there.
            // getOrCreateComposeBoxBtnBar: function(id, tooltip, iconBaseSvg, iconHoverSvg, iconToggleSvg, onClickCallback)
            var btnEl = zw.plugin.getOrCreateComposeBoxBtnBar(that.id, that.settings.name, that.iconBaseSvg, that.iconHoverSvg, that.iconToggleSvg, that.onComposeBoxBtnClick.bind(that))

            // Make sure toggle is turned off. It may have been left on from prior conversation.
            //this.btnToggleOff();

            // Setup my Compose Box Top Region
            // This just lazy loads stuff, so we'll call this from other paths as well
            that.getOrCreateTopRegion(loadEvtObj);

            // Setup my keypress event
            that.setupKeypress(loadEvtObj);

            // Load the settings / wipe old ones if they are there
            //this.ensureSettingsForThisContactId(evt.contactId, evt.phone);

            // see if this was manually shown by the user before, which we treat as a sticky setting
            // where we keep the Language Translator showing until they toggle it off
            var stickyShow = localStorage.getItem(that.id + "-sticky-show");
            if (stickyShow == "on") {
                console.log("sticky was on, so showing.");
                that.show();
            }

            // setup close button
            that.setupCloseBtn();
        });
    },

    // Setup the close button to hide
    setupCloseBtn: function() {
        var btnEl = $('.plugin-composebox-topregion-close button');
        console.log("setupCloseBtn. btnEl:", btnEl);

        var that = this;
        btnEl.click(function() {

            that.hide();

            // since this was manually unshown by the user, let's do a sticky setting
            // where we keep the Language Translator showing until they toggle it off
            localStorage.setItem(that.id + "-sticky-show", "off");
            console.log("sticky setting storing off");
        });
    },

    // NOT USING THIS METHOD ANYMORE
    // This method makes sure the settings are correctly setup for this contactId since
    // we may have no settings in the Top Region yet, or we have old ones from a prior
    // conversation, or we may have not had all of our elements loaded when the settings got
    // applied.
    // Pass in the isOverride if you want to force the reading of the settings from the cloud
    // as opposed to the default behavior of debouncing out of this method in case it's called
    // multiple times due to lifecyle issues from React
    ensureSettingsForThisContactId: function(contactId, contactPhone, isOverride) {

        console.log("ensureSettingsForThisContactId. contactId:", contactId);

        //var regionEl = zw.plugin.getOrCreateComposeBoxTopRegion(this.id, this.settings.description, this.iconTopRegionSvg);
        var regionEl = pluginEl.find("." + this.id + "-composebox-topregion");

        // see if any settings exist, are same, or different
        var dataContactId = regionEl.attr('data-contactid');

        // does the contactId equal our special val of "loading" meaning something timed out during
        // the ajax call and we never really ended up with any settings
        if (dataContactId == "loading") {
            console.log("uh oh, we are seeing our special loading value");
        }

        // are they the same?
        if (dataContactId == contactId && !isOverride) {
            console.log("contactId is same as data-contactId. ensured. returning.");
            return;
        }

        // see if something exists, if so it has to be old, cuz can't be same contactId at this point
        if (dataContactId != null) {
            console.log("data-contactId does not match current contactId. data-contactId:", dataContactId);

            regionEl.removeAttr('data-contactid');
            regionEl.removeAttr('data-contactphone');
            regionEl.removeAttr('data-locale');
            regionEl.removeAttr('data-state');
        }

        // if we made it here, we need to Ajax load our settings for this contactId
        // let the DOM know we're loading so we have a breadcrumb in case Ajax call fails
        regionEl.attr('data-contactId', "loading");

        var that = this;
        this.ajaxGetSettingsPerContactId(contactId, function(settings) {
            console.log("got back from ajax call getting settings for this contactId. settings:", settings);

            // see if null. if so then we know the defaults of english and auto
            if (settings == null) {
                settings = {
                    locale: 'English',
                    state: 'Auto'
                }
            }

            // set the settings into the DOM so we know based on lifecycle if we
            // already have the DOM set for this contactId, so we don't have to query ajax call again
            regionEl.attr('data-contactid', contactId);
            regionEl.attr('data-contactphone', contactPhone);
            regionEl.attr('data-locale', settings.locale);
            regionEl.attr('data-state', settings.state);

            var selEl = regionEl.find("." + that.id + "-langselect");
            selEl.val(settings.locale);
            var selStateEl = regionEl.find("." + that.id + "-transonoffauto");
            selStateEl.val(settings.state);
            //selStateEl.val("Off");

            selEl.change();

            //regionEl.attr('title', "Settings set for contactId: " + contactId);
            var iconEl = regionEl.find(".iconSvg");
            iconEl.attr('title', "Settings set for phone: " + contactPhone);

            // Put human readable description of setting state for this
            var desc = "";
            if (settings.state == "Auto" && settings.locale == "English") {
                desc = "Not translating, but will auto-detect if incoming texts from " + contactPhone + " need translated.";
            }
            if (settings.state == "On") {
                desc = "Translating to/from " + settings.locale + " for " + contactPhone + " on all inbound and outbound texts.";
            }
            if (settings.state == "Off") {
                desc = "Translation off. Will not auto-detect for " + contactPhone + " until you set back to Auto.";
            }
            var bodyEl = $("." + that.id + "-translatedtext");
            //bodyEl.html('<span style="color:silver;font-size:8px;">For phone: ' + contactPhone + '</span>');
            bodyEl.html('<span style="color:silver;font-size:12px;">' + desc + '</span>');
        });

    },

    // This is called when the compose box button bar button is clicked
    // We now store this as a stick setting so we carry thru the lang plugin
    // being shown across conversations if you chose to turn it on
    onComposeBoxBtnClick: function(evt) {
        console.log("Got click on compose box btn bar. evt:", evt);
        var buttonEl = $(evt.currentTarget);
        var iconToggleEl = buttonEl.find(".iconToggleSvg");
        if (iconToggleEl.hasClass("hidden")) {
            // it is hidden, let's show it and toggle on
            console.log("we are toggling the Top Region to on");
            buttonEl.find(".iconSvg").addClass("hidden"); // hide all icons first
            iconToggleEl.removeClass("hidden"); // then just show us
            this.onTopRegionShow();

            // since this was manually shown by the user, let's do a sticky setting
            // where we keep the Language Translator showing until they toggle it off
            localStorage.setItem(this.id + "-sticky-show", "on");
            console.log("sticky setting storing on");
        } else {
            // it is not hidden, let's hide the Top Region and toggle off
            console.log("we are toggling the Top Region to off");
            iconToggleEl.addClass("hidden");
            buttonEl.find(".iconHoverSvg").removeClass("hidden"); // show the hover icon
            this.onTopRegionHide();

            // since this was manually unshown by the user, let's do a sticky setting
            // where we keep the Language Translator showing until they toggle it off
            localStorage.setItem(this.id + "-sticky-show", "off");
            console.log("sticky setting storing off");
        }
    },

    // Programmatically show the top region for this plugin
    show: function() {
        this.onTopRegionShow();
        this.btnToggleOn();
    },

    // Programmatically hide the top region for this plugin
    hide: function() {
        this.onTopRegionHide();
        this.btnToggleOff();
    },

    btnToggle: function() {
    },

    btnToggleOn: function() {
        var buttonEl = $('.' + this.id + '-composebox-btnbar');
        var iconToggleEl = buttonEl.find(".iconToggleSvg");
        buttonEl.find(".iconSvg").addClass("hidden"); // hide all icons first
        iconToggleEl.removeClass("hidden"); // then just show the toggled on icon
    },

    btnToggleOff: function() {
        var buttonEl = $('.' + this.id + '-composebox-btnbar');
        buttonEl.find(".iconSvg").addClass("hidden"); // hide all icons first
        buttonEl.find(".iconBaseSvg").removeClass("hidden"); // show the base icon
    },

    // Lazy load the DOM elements for the Top Region since we don't really know the scope
    // of React. We'll just always make sure the DOM elements exist each time this is called.
    getOrCreateTopRegion: function(loadEvtObj) {

        // Lazy load the DOM elements for the Top Region since we don't really know the scope
        // of React. We'll just always make sure the DOM elements exist each time this is called.
        var regionEl = zw.plugin.getOrCreateComposeBoxTopRegion(this.id, this.settings.description, this.iconTopRegionSvg);
        regionEl.addClass("hidden"); // ensure hidden

        // ensure our other DOM elements exist
        var bodyEl = regionEl.find("." + this.id + "-composebox-topregion-body");
        if (bodyEl.length > 0) {
            // element exists, all set
            console.log(this.id + " body of topregion exists");
            return;
        }

        // store our data-contactid since it is our primary key
        regionEl.attr('data-contactid', loadEvtObj.contactId);

        // create element
        bodyEl = $(`
<div class="` + this.id + `-composebox-topregion-body">
    <div class="` + this.id + `-mainrow">
        <div class="` + this.id + `-title">Language Translator</div>
        <div class="` + this.id + `-langtools">
            <select class="` + this.id + `-langselect plugin-select-airy zk-styled-text-base">
            <option value="-">-</option>
            </select>
        </div>
        <div class="` + this.id + `-onoffauto">
            <select class="` + this.id + `-transonoffauto plugin-select-airy zk-styled-text-base">
            <option>Auto</option>
            <option>On</option>
            <option>Off</option>
            </select>
        </div>
    </div>
    <div class="` + this.id + `-translatedtext"></div>
</div>
`);
        regionEl.find(".plugin-composebox-topregion-body").append(bodyEl);

        // Get the language list and populate it
        var selEl = regionEl.find("." + this.id + "-langselect");

        // See if the list is already in there
        // NOTE: This should never happen since we now wipe all HTML DOM elements before onComposeBoxLoad event
        if (selEl.hasClass("list-is-populated")) {
            // already populated, we're done
            console.error("lang list already populated.");
        } else {
            console.log("populating our list of languages");
            var list = this.langList;
            selEl.addClass("list-is-populated");
            selEl.html(""); // wipe list
            var listLen = list.length;
            for (var i = 0; i < listLen; i++) {
                var item = list[i];
                //console.log("populating list item:", item);
                selEl.append('<option value="' + item.pretty + '">' + item.pretty + "</option>");
            }

            // Since we now have our settings, we can pick our setting here for the language select box
            selEl.val(loadEvtObj.langSettings.locale);

            // setup this select element to resize as narrow as the selected text so it looks
            // prettier in the menu
            this.resizeWidthOfLanguageSelect();

            // now setup the state select box

            // Get the language list and populate it
            var stateEl = regionEl.find("." + this.id + "-transonoffauto");
            stateEl.val(loadEvtObj.langSettings.state);

            // now attach to change event so we can write the changes to the cloud
            selEl.change(this.onSelectLanguageChange.bind(this));
            stateEl.change(this.onSelectStateChange.bind(this));
            this.bindDropdowns();

            // Put human readable description of setting state for this
            var desc = "";
            var contactPhone = loadEvtObj.phone;
            if (loadEvtObj.phoneObj.isGroup) {
                desc = "This is a group. Translations on outbound texts are based per contact.";
            } else {
                if (loadEvtObj.langSettings.state == "Auto" && loadEvtObj.langSettings.locale == "English") {
                    desc = "Auto-detecting if incoming texts from " + contactPhone + " need translated.";
                }
                if (loadEvtObj.langSettings.state == "On") {
                    desc = "Translating to/from " + loadEvtObj.langSettings.locale + " for " + contactPhone + " on all texts.";
                }
                if (loadEvtObj.langSettings.state == "Off") {
                    desc = "Translation off. Will not auto-detect for " + contactPhone + " until you set back to Auto.";
                }
            }
            var bodyEl = $("." + this.id + "-translatedtext");
            //bodyEl.html('<span style="color:silver;font-size:8px;">For phone: ' + contactPhone + '</span>');
            bodyEl.html('<span style="color:silver;font-size:12px;">' + desc + '</span>');
        }


    },

    // Flag to keep track whether we really want changes in form elements to store settings in cloud
    isBound: false,

    // We need to rebind after we unbind
    // Yes, we're just using a flag for now instead of physically unbind the event callbacks
    bindDropdowns: function() {
        this.isBound = true;
    },

    // We need to unbind in case we write to the form elements programatically
    // and don't want to trigger a change and thus an ajax write
    unbindDropdowns: function() {
        this.isBound = false;
    },

    // This is our callback if the language was changed. We call the main change event
    // but we add a breadcrumb that this was the language pulldown so we know to override
    // the state pulldown based on what was picked
    onSelectLanguageChange: function(evt) {
        this.onSelectLanguageOrStateChange("locale");
    },

    // This is our callback if the state was changed. We call the main change event
    // but we add a breadcrumb that this was the state pulldown so we know to override
    // the locale pulldown based on what was picked
    onSelectStateChange: function(evt) {
        this.onSelectLanguageOrStateChange("state");
    },

    // This method is called when the select element for Language is changed by the user
    // Make sure if programmatically changed we don't get called
    onSelectLanguageOrStateChange: function(fromWhichSelectDropdown) {

        console.log("onSelectLanguageOrStateChange. fromWhichSelectDropdown:", fromWhichSelectDropdown);

        // see if we're bound. if not, return
        if (this.isBound == false) {
            console.log("we are not bound, so exiting change onSelectLanguageOrStateChange");
            return;
        }

        // we need to unbind cuz we'll make changes to the dropdowns and get callbacks here recursively
        // if we don't unbind
        this.unbindDropdowns();

        var selEl = $("." + this.id + "-langselect");
        var stateEl = $("." + this.id + "-transonoffauto");
        console.log("selEl:", selEl, "stateEl:", stateEl);

        // what's our new language/locale val
        var languageSel = selEl.val(); //$(this).val();

        // get our State value too since we'll need it to compare situation
        var state = stateEl.val();

        // if they picked a new language, and the state was Auto, then they just forced it to On
        if (fromWhichSelectDropdown == "locale") {
            if (languageSel != "English" && state == "Auto") {
                // set state select value to On
                state = "On";
            } else if (languageSel != "English" && state == "Off") {
                state = "On";
            }
        } else {
            // it was from the state pulldown
            if (state == "Auto") {
                languageSel = "English";
            } else if (state == "Off") {
                languageSel = "English";
            }
        }

        // reset the value of the lang select box and state box
        selEl.val(languageSel);
        stateEl.val(state);
        

        // Get ref to our top region so we can query stuff
        var regionEl = $('.' + this.id + '-composebox-topregion');

        // we seem to be getting called a bunch here, so debounce if the val is the same as before
        /* var currentLang = regionEl.attr('data-locale');
        if (currentLang == languageSel) {
            console.log("nothing changed on the lang select change() event, so returning...");
            return;
        } */

        // resize the width of the main select element so it looks pretty
        this.resizeWidthOfLanguageSelect();

        // Show a saving... msg
        var innerBodyEl = $("." + this.id + "-translatedtext");
        //bodyEl.html('<span style="color:silver;font-size:8px;">For phone: ' + contactPhone + '</span>');
        innerBodyEl.html('<span style="color:silver;font-size:12px;">' + "Saving new language " + languageSel + ' and state ' + state + '...</span>');


        // now let's store this new setting
        var contactId = regionEl.attr('data-contactid');
        var settings = {
            contact_id: contactId,
            locale: languageSel,
            state: state,
        };

        // call ajax to store settings
        this.ajaxSetSettingsPerContactId(contactId, languageSel, state, function() {
            console.log("done writing settings to cloud.");
            //var contactPhone = regionEl.attr('data-contactphone');
            //that.ensureSettingsForThisContactId(contactId, contactPhone, true); // trigger override
        });

        this.bindDropdowns();
    },

    // Write change programmatically to language select box
    changeLanguageVal: function(newLang) {

        var selEl = $("." + this.id + "-langselect");
        if (selEl.val() == newLang) {
            console.log("u asked me to change the language val, but newLang == oldLang. newLang:", newLang, "oldLang:", selEl.val());
            return;
        }

        // we need to unbind cuz we'll make changes to the dropdowns and get callbacks here recursively
        // if we don't unbind
        this.unbindDropdowns();

        selEl.val(newLang);

        this.bindDropdowns();
    },

    // Write change programmatically to state select box
    changeStateVal: function(newState) {
        // we need to unbind cuz we'll make changes to the dropdowns and get callbacks here recursively
        // if we don't unbind
        this.unbindDropdowns();

        var stateEl = $("." + this.id + "-transonoffauto");
        stateEl.val(newState);

        this.bindDropdowns();
    },

    // This just prettifies the select item so it's as narrow of a width as it can be. Sadly there's no CSS
    // that does this for us automatically. Could/should move to more of a Bootstrap style menu to avoid this.
    resizeWidthOfLanguageSelect: function() {

        // Get ref to element of our top region so we can query stuff
        var regionEl = $('.' + this.id + '-composebox-topregion');

        // Get ref to element of our language select dropdown
        var selEl = regionEl.find('.' + this.id + '-langselect');

        // what's our new val
        var languageSel = selEl.val();

        // resize the width of the main select element so it looks pretty
        console.log("inside language select resize. text for width:", languageSel);
        var width = this.getTextWidthDOM(languageSel, '14px "proxima-nova",apple-system,BlinkMacSystemFont,"Segoe UI","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;');
        width += 20; // add room for triangle
        console.log("width resizing to:", width);
        selEl.width(width);

    },

    getTextWidthCanvas: function(text, font) {
        // re-use canvas object for better performance
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        console.log("canvas metrics:", metrics);
        return metrics.width;
    },

    getTextWidthDOM: function(text, font) {
        var f = font || '14px arial';
        var o = $('<span>' + text + '</span>')
        .css({'font': f, 'float': 'left', 'white-space': 'nowrap'})
        .css({'visibility': 'hidden'})
        .appendTo($('body'));
        var w = o.width();
        o.remove();
        return w;
    },

    // This is called when user clicks button to show, or when keypress triggers a show
    onTopRegionShow: function() {
        console.log(this.id + " onTopRegionshow");

        var regionEl = zw.plugin.getOrCreateComposeBoxTopRegion(this.id, this.settings.description, this.iconTopRegionSvg);
        //var regionEl = pluginEl.find("." + this.id + "-composebox-topregion");

        // Now ensure the body contents are loaded. If this is the first time in, we just will have empty DOM items
        // and they will populate before your eyes. Other times you'll see everything ready to go cuz loaded already.
        this.getOrCreateTopRegion();

        regionEl.removeClass("hidden"); // ensure not hidden

    },

    // This is called when user clicks button to hide, or when onblur triggers a hide
    onTopRegionHide: function() {
        console.log(this.id + " onTopRegionHide");

        // It's almost certain we'll just get back the previously created item here because we
        // would never get the hide event without it
        var regionEl = zw.plugin.getOrCreateComposeBoxTopRegion(this.id, this.settings.description, this.iconTopRegionSvg);

        // hide via CSS
        regionEl.addClass("hidden");

    },

    // We are called when the Side Panel is loaded. In the event object we are given
    // the current Conversation object which has a ConversationId and Contacts array
    // with ContactId's
    onSidePanelLoad: function(evt) {
        console.log("Got plugin onSidePanelLoad. evt:", evt);
    },

    // Ajax calls to the back-end of this plugin

    // Decided to hard code the lang list. so, no longer need this Ajax call
    // Ajax call to get language list
    // http://178.128.129.151:8080/function/translate/langList
    // [{"pretty":"Arabic","short":"ar"},{"pretty":"Bulgarian","short":"bg"},{"pretty":"Bangla","short":"bn"},{"pretty":"Bosnian","short":"bs"},{"pretty":"Catalan","short":"ca"},{"pretty":"Czech","short":"cs"},{"pretty":"Welsh","short":"cy"},{"pretty":"Danish","short":"da"},{"pretty":"German","short":"de"},{"pretty":"Greek","short":"el"},{"pretty":"English","short":"en"},{"pretty":"Spanish","short":"es"},{"pretty":"Estonian","short":"et"},{"pretty":"Persian","short":"fa"},{"pretty":"Finnish","short":"fi"},{"pretty":"Filipino","short":"fil"},{"pretty":"Fijian","short":"fj"},{"pretty":"French","short":"fr"},{"pretty":"Hebrew","short":"he"},{"pretty":"Hindi","short":"hi"},{"pretty":"Croatian","short":"hr"},{"pretty":"Haitian","short":"ht"},{"pretty":"Hungarian","short":"hu"},{"pretty":"Indonesian","short":"id"},{"pretty":"Icelandic","short":"is"},{"pretty":"Italian","short":"it"},{"pretty":"Japanese","short":"ja"},{"pretty":"Korean","short":"ko"},{"pretty":"Lithuanian","short":"lt"},{"pretty":"Latvian","short":"lv"},{"pretty":"Malagasy","short":"mg"},{"pretty":"Maori","short":"mi"},{"pretty":"Malay","short":"ms"},{"pretty":"Maltese","short":"mt"},{"pretty":"Hmong Daw","short":"mww"},{"pretty":"Norwegian","short":"nb"},{"pretty":"Dutch","short":"nl"},{"pretty":"Otomi","short":"otq"},{"pretty":"Polish","short":"pl"},{"pretty":"Portuguese","short":"pt"},{"pretty":"Romanian","short":"ro"},{"pretty":"Russian","short":"ru"},{"pretty":"Slovak","short":"sk"},{"pretty":"Slovenian","short":"sl"},{"pretty":"Samoan","short":"sm"},{"pretty":"Swedish","short":"sv"},{"pretty":"Kiswahili","short":"sw"},{"pretty":"Tamil","short":"ta"},{"pretty":"Telugu","short":"te"},{"pretty":"Thai","short":"th"},{"pretty":"Klingon","short":"tlh"},{"pretty":"Tongan","short":"to"},{"pretty":"Turkish","short":"tr"},{"pretty":"Tahitian","short":"ty"},{"pretty":"Ukrainian","short":"uk"},{"pretty":"Urdu","short":"ur"},{"pretty":"Vietnamese","short":"vi"},{"pretty":"Yucatec Maya","short":"yua"},{"pretty":"Cantonese","short":"yue"},{"pretty":"Serbian (Cyrillic)","short":"sr-Cyrl"},{"pretty":"Serbian (Latin)","short":"sr-Latn"},{"pretty":"Chinese (Simplified)","short":"zh-Hans"},{"pretty":"Chinese (Traditional)","short":"zh-Hant"}]
    // Since this list rarely changes, we'll just cache it per browser in-memory session
    cacheLangList: null, // Store cached list here
    ajaxGetLangList: function(callback) {

        console.log("ajaxGetLangList");

        // see if we have a cached list
        if (this.cacheLangList != null) {
            // we have a list, return it
            callback(this.cacheLangList);
        }

        // since using GET for now to solve https issues, build GET url
        var url = "https://plugins.zw.wagar.cc/function/translate/langList";
        console.log("url to call:", url);

        // do ajax query and get results. based on the results i'll render shit.
        $.ajax({
            type: "GET",
            url: url,
            success: function(data) {
                this.cacheLangList = data;
                callback(this.cacheLangList);
            },
            error: function(errMsg) {
                console.log("got err on ajax. err:", errMsg);
                callback(null);
            }
        });

    },

    // Ajax call to get user settings specific to this contactId, as the language
    // translation settings are unique to each conversation the Zipwhip user has
    // with each contact.
    // http://178.128.129.151:8080/function/translate/get?line=%2B15035751700&contactId=1&session=98fe
    // {"contact_id":1,"locale":"English","state":"Auto"}
    ajaxGetSettingsPerContactId: function(contactId, callback) {

        console.log("ajaxGetSettingsPerContactId");

        // see if we have a cached list
        if (this.cacheLangList != null) {
            // we have a list, return it
            callback(this.cacheLangList);
        }

        // since using GET for now to solve https issues, build GET url
        var line = encodeURIComponent(zw.getLine());
        console.log("line:", line);
        var session = encodeURIComponent(zw.getSessionKey());
        var url = "https://plugins.zw.wagar.cc/function/translate/get?line=" + line + "&contactId=" + contactId + "&session=" + session;
        console.log("url to call:", url);

        // do ajax query and get results.
        $.ajax({
            type: "GET",
            url: url,
            success: function(data) {
                callback(data);
            },
            error: function(errMsg) {
                console.log("got err on ajax. err:", errMsg);
                callback(null);
            }
        });

    },

    // Ajax call to set user settings specific to this contactId, as the language
    // translation settings are unique to each conversation the Zipwhip user has
    // with each contact.
    // http://178.128.129.151:8080/function/translate/get?line=%2B15035751700&contactId=2&lang=English&state=Auto&session=98fe
    // Returns (which doesn't really matter, since it's a regurgitation):
    // {"contact_id":1,"locale":"English","state":"Auto"}
    ajaxSetSettingsPerContactId: function(contactId, locale, state, callback) {

        console.log("ajaxSetSettingsPerContactId");

        // see if we have a cached list
        if (this.cacheLangList != null) {
            // we have a list, return it
            callback(this.cacheLangList);
        }

        // since using GET for now to solve https issues, build GET url
        var line = encodeURIComponent(zw.getLine());
        console.log("line:", line);
        var session = encodeURIComponent(zw.getSessionKey());
        var url = "https://plugins.zw.wagar.cc/function/translate/set?line=" + line + "&contactId=" + contactId + "&locale=" + locale + "&state=" + state + "&session=" + session;
        console.log("url to call:", url);

        // do ajax query and get results.
        $.ajax({
            type: "GET",
            url: url,
            success: function(data) {
                callback(data);
            },
            error: function(errMsg) {
                console.log("got err on ajax. err:", errMsg);
                callback(null);
            }
        });

    },

    // Attach a keypress event to the textarea. Make sure we don't attach
    // too many times due to lifecyle issues.
    setupKeypress: function(evt) {

        console.log("setupKeypress. evt:", evt);

        // see if we have previously attached our keypress event.
        // we can do this because we leave a breadcrumb that we bound data
        if (evt.composeTextAreaEl.attr('isboundtolangtranslate') == "yes") {
            // it's already bound
            console.log("textarea keypress event already bound. returning...");
            return;
        }

        // leave breadcrumb that we bound it
        evt.composeTextAreaEl.attr('isboundtolangtranslate', "yes");
        evt.composeTextAreaEl.on("input propertychange", this.onKeypress.bind(this));
    },

    onKeypress: function(evt) {
        console.log("onKeypress", evt);

        var regionEl = zw.plugin.getOrCreateComposeBoxTopRegion(this.id, this.settings.description, this.iconTopRegionSvg);
        //var regionEl = $("." + this.id + "-composebox-topregion");

        var composeBoxTextAreaEl = this.composeBoxTextAreaEl;

        // see if any settings exist, are same, or different
        var dataContactId = regionEl.attr('data-contactid');
        console.log("data-contactid:", dataContactId);

        // get body content of compose box
        console.log("composeBoxTextAreaEl:", composeBoxTextAreaEl);
        console.log("val of textarea:", composeBoxTextAreaEl.val());

        //var myData = {
        //    body: this.composeBoxTextAreaEl.val()
        //}

        var innerBodyEl = $("." + this.id + "-translatedtext");

        // debounce if i don't really have a value
        var val = composeBoxTextAreaEl.val();
        if (val.length == 0) {
            console.log("val was empty");
            innerBodyEl.text("");
            return;
        }

        // since using GET for now to solve https issues, build GET url
        var url = "";
        var param = "https://plugins.zw.wagar.cc/function/translate/keypress?";
        param = param + "line=" + encodeURIComponent(zw.getLine());
        param = param + "&body=" + encodeURIComponent(composeBoxTextAreaEl.val());
        param = param + "&contactId=" + encodeURIComponent(dataContactId);
        param = param + "&session=" + encodeURIComponent(zw.getSessionKey());

        // may need to urlencode
        url = param; //url + param;
        console.log("url to call:", url);

        var that = this;
        // do ajax query and get results. based on the results i'll render shit.
        $.ajax({
            type: "GET",
            url: url,
            // The key needs to match your method's input parameter (case-sensitive).
            // data: JSON.stringify(myData),
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            success: function(data) {
                console.log("got success on ajax call. data:", data);

                var json = data;

                if (json.update && json.update.length > 0) {
                    that.btnToggleOn();
                    that.onTopRegionShow();
                    innerBodyEl.html(json.update);
                } else {
                    console.log("error trying to find update translated text");
                }

                // we get the language back as well in this call. we may need to update our UI
                if (json.locale) {
                    that.changeLanguageVal(json.locale);
                }
            },
            failure: function(errMsg) {
                console.log("got err on ajax. err:", errMsg);
            }
        });

        // test call
        //obj.onAjaxCallback('{"update":"Hola! John!","lang":"Spanish"}');
    }

}

// Register with Zipwhip Plugin system
zw.plugin.register(pluginLangTranslator);

// Now load the plugin
pluginLangTranslator.onLoad();
