jQuery(document).ready(function(){
    var e=new google.maps.LatLng(46.552597, 24.566159),
        o={zoom:14,center:new google.maps.LatLng(46.552597, 24.566159),
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:!1,
        scrollwheel:!1,
        draggable:!0,
        navigationControl:!1
    },
        n=new google.maps.Map(document.getElementById("map"),o);
        google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();
        google.maps.event.trigger(n,"resize"),n.setCenter(e)});
        
        var g='<div class="map-tooltip"><h6>BonjourWEB</h6><p>Checking out our office too?</p></div>',a=new google.maps.InfoWindow({content:g})
        ,t=new google.maps.MarkerImage("images/map-pin.png",new google.maps.Size(40,70),
        new google.maps.Point(0,0),new google.maps.Point(20,55)),
        i=new google.maps.LatLng(46.552597, 24.566159),
        p=new google.maps.Marker({position:i,map:n,icon:t,zIndex:3});
        google.maps.event.addListener(p,"click",function(){a.open(n,p)}),
        $(".button-map").click(function(){$("#google_map").slideToggle(300,function(){google.maps.event.trigger(n,"resize"),n.setCenter(e)}),
        $(this).toggleClass("close-map show-map")});

});