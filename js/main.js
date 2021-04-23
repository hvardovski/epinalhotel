var userAgent = window.navigator.userAgent;
var isSafari = userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var globalPrice;

function inicijalizirajAOS() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,

        offset: 60,
        delay: 0,
        duration: 650,
        easing: 'ease-in-out-quad',
        once: false,
        mirror: true,
        anchorPlacement: 'top-bottom',
    });
}

var stavenaLight = false;

window.addEventListener("load", function() {
    document.getElementById("fontawesomecss").removeAttribute("disabled");
    document.getElementById("fontscss").removeAttribute("disabled");
    inicijalizirajAOS();
    // $(".input-outer label").click(function () {
    //     $(this).parent(".input-outer").find("input").focus();
    // })
}) 


// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });

function imaVrednost(vrednost) {
    return (typeof vrednost != "undefined" && vrednost != null & vrednost != "" && Number.isNaN(vrednost) == false);
}

document.onreadystatechange = function () {
 
};

function dcLog(message) {
    message = JSON.stringify(message);
    let msgPrint = message;
    try {
        msgPrint = JSON.parse(message);
    } catch (err) {
        msgPrint = message;
    }

    console.log(msgPrint);
}


function smeniTema() {
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $("body").addClass("dark");
    } else {
        $("body").removeClass("dark");
        $("body").addClass("light");
    }
}

function inicijalizirajParticles(id, color="#fff", value=50) {

    particlesJS(id,

        {
            "particles": {
                "number": {
                    "value": value,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": color
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": color,
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
  $('.messageform').html("<span class='mt-10px d-flex text-red'>You have entered an invalid email address!</span>")
    return (false)
}

function addEmail() {
    let email = $("#emailAdd").val();

    if (ValidateEmail(email)) {
        console.log('validen e ');
        $.ajax({
            url: "prefrliVoFajl.php",
            data: {
                email
            },
            success: function(data){
                $('.messageform').html("<span class='mt-10px d-flex text-green text-center'>Thank you for subscribing. You will be the first to know about new releases, events and special projects. \nStay tuned.</span>")
            }
        })
    } else {
    }

}