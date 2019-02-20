window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main1');

    mainPage.addEventListener("click", function() {
    	
    	
    		window.open("second.html", "second", "width=100%, height=100%");
    		
    	
       
    });
};