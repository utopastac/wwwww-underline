/*



MAIN APP HERE



*/

function App(args) {

    $.window = $(window);
    $.body = $("body");
    $.ww = $.window.width();
    $.wh = $.window.height();
    $.mobile = Utils.checkMobile();
	$.tablet = Utils.checkTablet();
	if($.mobile || $.tablet){
		 $.body.removeClass("desktop");
	}
    
    $.useCssAnim = Modernizr.csstransforms3d;

    this.main = $("#main-content");
    this.examples = $(".sg--example");

    this.init(args);

}

droppables = $("#love-hate div");

App.prototype = {

    init:function(args){
        var that = this;
        this.examples.each(function(index){
            var elem = $(this);
            if(elem.hasClass("no-code")) return;
            var html = elem.html();
            var htmlString = html.replace("<!-- content -->", "").replace("<!-- -->", "").replace(/&/g, '&amp;').replace(/</g, '&lt;');
            $(this).after("<pre><code class='prettyprint'>" + htmlString + "</code></pre>");
            //$(this).after(that.getStyles(elem));
        });

        $.window.resize(jQuery.proxy(this, "resizeElements"));
        this.resizeElements();
    },

    getStyles: function(elem){
        var str = "<div class = 'sg--style-info'>"
        var size = elem.css('font-size') + "px";
        var height = elem.height();
        str += this.getStyleString("font-size", size)
        str += this.getStyleString("height", height)
        str += "</div>"
        alert
        return str
    },

    getStyleString: function(attr, value){
        return "<p>" + attr + ": <span>" + value + "</span></p>"
    },

    resizeElements: function(event){
        $.ww = $.window.width();
        $.wh = $.window.height();
    }

}
