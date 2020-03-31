(function(){
      ("#includedContent").load("index.html"); 
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
