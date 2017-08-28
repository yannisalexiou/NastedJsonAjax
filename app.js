/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'NastedJsonAjax.Application',

    name: 'NastedJsonAjax',

    requires: [
        // This will automatically load all classes in the NastedJsonAjax namespace
        // so that application classes do not need to require each other.
        'NastedJsonAjax.*'
    ],

    // The name of the initial view to create.
    mainView: 'NastedJsonAjax.view.main.Main'
});
