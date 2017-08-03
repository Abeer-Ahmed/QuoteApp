(function () {

    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        // Handle the click event
        $('#greet-me-btn').click(greetMe);
       // $('#greet-me-btn').click(getWeatherWithGeoLocation);
        $('#refresh').click(refreshPage);
        $('#addquote-button').click(addQuoteForm); // show the add quote form
        $('#dltquote-button').click(dltQuoteForm); // show dlt form
        $('#allquote-button').click(allQuotes);
        $('#submitquote').click(addQuoteButton); // actually add
        $('#dltquotebutton').click(dltQuoteButton);
        $('#back-button').click(back);

        $('#loginbutton').click(login);
        $('#signupbutton1').click(signupForm);
        $('#signupbutton2').click(signupButton);

        // Handle the enter key press
        $("#user-name-input").keyup(function () {
            if (event.keyCode == 13) {
                console.log("Enter was pressed.");
                greetMe();
                getWeatherWithGeoLocation();
                $('#greet').addClass('animated swing');
            }
            else {
                $('#greet').removeClass('animated swing');
            }
        });


    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

} )();