const slogan = document.getElementById("slogan");

function animacaoSlogan() {
  setTimeout(function() {
    slogan.style.borderLeftWidth = "3px";
    slogan.style.borderLeftStyle = "solid";
    slogan.style.borderLeftColor = "#0000ff";
    setTimeout(function() {    
      slogan.style.borderLeftWidth = "0px";
      slogan.style.borderLeftStyle = "solid";
      slogan.style.borderLeftColor = "#0000ff";
      setTimeout(function() {
        slogan.style.borderRightWidth = "3px";
        slogan.style.borderRightStyle = "solid";
        slogan.style.borderRightColor = "#0000ff";
        setTimeout(function() {
          slogan.style.borderRightWidth = "0px";
          slogan.style.borderRightStyle = "solid";
          slogan.style.borderRightColor = "#0000ff";
          setTimeout(function() {
            slogan.style.borderLeftWidth = "3px";
            slogan.style.borderLeftStyle = "solid";
            slogan.style.borderLeftColor = "#00ff00";
            setTimeout(function() {    
              slogan.style.borderLeftWidth = "0px";
              slogan.style.borderLeftStyle = "solid";
              slogan.style.borderLeftColor = "#00ff00";
              setTimeout(function() {
                slogan.style.borderRightWidth = "3px";
                slogan.style.borderRightStyle = "solid";
                slogan.style.borderRightColor = "#00ff00";
                setTimeout(function() {
                  slogan.style.borderRightWidth = "0px";
                  slogan.style.borderRightStyle = "solid";
                  slogan.style.borderRightColor = "#00ff00";
                  setTimeout(function() {
                    slogan.style.borderLeftWidth = "3px";
                    slogan.style.borderLeftStyle = "solid";
                    slogan.style.borderLeftColor = "#ffcc00";
                    setTimeout(function() {    
                      slogan.style.borderLeftWidth = "0px";
                      slogan.style.borderLeftStyle = "solid";
                      slogan.style.borderLeftColor = "#ffcc00";
                      setTimeout(function() {
                        slogan.style.borderRightWidth = "3px";
                        slogan.style.borderRightStyle = "solid";
                        slogan.style.borderRightColor = "#ffcc00";
                        setTimeout(function() {
                          slogan.style.borderRightWidth = "0px";
                          slogan.style.borderRightStyle = "solid";
                          slogan.style.borderRightColor = "#ffcc00";
                          setTimeout(function() {
                            slogan.style.borderLeftWidth = "3px";
                            slogan.style.borderLeftStyle = "solid";
                            slogan.style.borderLeftColor = "#dddddd";
                            setTimeout(function() {    
                              slogan.style.borderLeftWidth = "0px";
                              slogan.style.borderLeftStyle = "solid";
                              slogan.style.borderLeftColor = "#dddddd";
                              setTimeout(function() {
                                slogan.style.borderRightWidth = "3px";
                                slogan.style.borderRightStyle = "solid";
                                slogan.style.borderRightColor = "#dddddd";
                                setTimeout(function() {
                                  slogan.style.borderRightWidth = "0px";
                                  slogan.style.borderRightStyle = "solid";
                                  slogan.style.borderRightColor = "#dddddd";
                                }, 600);
                              }, 600);
                            }, 600);
                          }, 600);
                        }, 600);
                      }, 600);
                    }, 600);
                  }, 600);
                }, 600);
              }, 600);
            }, 600);
          }, 600);
        }, 600);
      }, 600);
    }, 600);
  }, 600);
}

animacaoSlogan();

setInterval(function() {
  animacaoSlogan();
}, 9620);
