var sampleApp = angular.module('sampleApp', ['ngRoute', 'ngAnimate']);

sampleApp.config(function($routeProvider) {
    $routeProvider
        .when('/apartado1',{
            templateUrl: 'templates/apartado1.html',
            controller: 'ap1Controller'
        })
        .when('/apartado2',{
            templateUrl: 'templates/apartado2.html',
            controller: 'ap2Controller'
        })
        .when('/apartado3',{
            templateUrl: 'templates/apartado3.html',
            controller: 'ap3Controller'
        });
});

sampleApp.controller('mainController', function($scope) {
    //animación del menú
    $(".cajaLineas").click(function(e){
        if($("#menuPpal").hasClass("opened")){
            $("#menuPpal").removeClass("opened");
            $("#wrapper").removeClass("moved");
        }else{
            $("#menuPpal").addClass("opened");
            $("#wrapper").addClass("moved");
        }
    });
});

sampleApp.controller('ap1Controller', function($scope) {
     console.log("Cargado apartado 1");
    $("#contenedor_paginas").removeClass("home");
   // window.scrollTo(0, 0);
    $("html, body").animate({ scrollTop: 0 }, 1000);
    
    var controller = new ScrollMagic.Controller({});
        var tween1 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide1 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

		var scene1 = new ScrollMagic.Scene({triggerElement: "#slide1",
                                            offset: 300, 
                                            duration: $(window).height()/1.7})
				.setTween(tween1)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
    
        var tween2 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide2 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

        var scene2 = new ScrollMagic.Scene({triggerElement: "#slide2", duration: $(window).height()})
				.setTween(tween2)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
    
        var tween3 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide3 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

		var scene3 = new ScrollMagic.Scene({triggerElement: "#slide3", duration: $(window).height()})
				.setTween(tween3)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
});

sampleApp.controller('ap2Controller', function($scope) {
    console.log("Cargado apartado 2");
    $("#contenedor_paginas").removeClass("home");
    window.scrollTo(0, 0);
    
    var controller = new ScrollMagic.Controller({});
        var tween1 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide4 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

		var scene1 = new ScrollMagic.Scene({triggerElement: "#slide4",
                                            offset: 300, 
                                            duration: $(window).height()/1.7})
				.setTween(tween1)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
    
        var tween2 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide5 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

        var scene2 = new ScrollMagic.Scene({triggerElement: "#slide5", duration: $(window).height()})
				.setTween(tween2)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
    
        var tween3 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide6 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

		var scene3 = new ScrollMagic.Scene({triggerElement: "#slide6", duration: $(window).height()})
				.setTween(tween3)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
});

sampleApp.controller('ap3Controller', function($scope) {
    console.log("Cargado apartado 3");
    $("#contenedor_paginas").removeClass("home");
    window.scrollTo(0, 0);
    
    var controller = new ScrollMagic.Controller({});
        var tween1 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide7 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

		var scene1 = new ScrollMagic.Scene({triggerElement: "#slide7",
                                            offset: 300, 
                                            duration: $(window).height()/1.7})
				.setTween(tween1)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
    
        var tween2 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide8 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

        var scene2 = new ScrollMagic.Scene({triggerElement: "#slide8", duration: $(window).height()})
				.setTween(tween2)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
    
        var tween3 = new TimelineMax ()
		.add([
			TweenMax.fromTo("#slide9 p", 1, {y: 0}, {y: 600, ease: Linear.easeNone})
		]);

		var scene3 = new ScrollMagic.Scene({triggerElement: "#slide9", duration: $(window).height()})
				.setTween(tween3)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
});












