/*
 * IE Alert! jQuery plugin
 * version 1
 * author: David Nemes http://nmsdvid.com
 * http://nmsdvid.com/iealert/
 */

(function ($) {
    $("#goon").live("click", function () {
        $("#ie-alert-overlay").hide();
        $("#ie-alert-panel").hide();
    });
    function initialize($obj, support, title, text) {

        var panel = "<span>" + title + "</span>"
                + "<p> " + text + "</p>"
                + "<div class='browser'>"

                + "</div>";

        var overlay = $("<div id='ie-alert-overlay'></div>");
        var iepanel = $("<div id='ie-alert-panel'>" + panel + "</div>");

        var docHeight = $(document).height();

        overlay.css("height", docHeight + "px");





        if (support === "ie8") { 			// shows the alert msg in IE8, IE7, IE6

            if ($.browser.msie && parseInt($.browser.version, 10) < 9) {

                $obj.prepend(iepanel);
                $obj.prepend(overlay);

            }

            if ($.browser.msie && parseInt($.browser.version, 10) === 6) {


                $("#ie-alert-panel").css("background-position", "-626px -116px");
                $obj.css("margin", "0");

            }


        } else if (support === "ie7") { 	// shows the alert msg in IE7, IE6

            if ($.browser.msie && parseInt($.browser.version, 10) < 8) {

                $obj.prepend(iepanel);
                $obj.prepend(overlay);
            }

            if ($.browser.msie && parseInt($.browser.version, 10) === 6) {

                $("#ie-alert-panel").css("background-position", "-626px -116px");
                $obj.css("margin", "0");

            }

        } else if (support === "ie6") { 	// shows the alert msg only in IE6

            if ($.browser.msie && parseInt($.browser.version, 10) < 7) {

                $obj.prepend(iepanel);
                $obj.prepend(overlay);

                $("#ie-alert-panel").css("background-position", "-626px -116px");
                $obj.css("margin", "0");

            }
        }

    }
    ; //end initialize function


    $.fn.iealert = function (options) {
        var defaults = {
            support: "ie8", // ie8 (ie6,ie7,ie8), ie7 (ie6,ie7), ie6 (ie6)
            title: "Please use web browsers such as IE9 or above to view <br/> this website", // title text
            text: "For the maximum experience of website visiting, it is recommended you update your browser to the latest edition of Internet Explorer or use another web browser, such as 360, Firefox, Google, Sogou, Opera, Apple …"
        };


        var option = $.extend(defaults, options);




        return this.each(function () {
            if ($.browser.msie) {
                var $this = $(this);
                initialize($this, option.support, option.title, option.text);
            } //if ie	
        });

    };
})(jQuery);
