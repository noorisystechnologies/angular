$(function() {
    $(".control").click(function() {
        $("body").addClass("mode-search"), $(".input-search").focus()
    }), $(".icon-close").click(function() {
        $("body").removeClass("mode-search")
    })
}), $(function() {
    var a = document.getElementById("morphsearch"),
        b = a.querySelector("input.morphsearch-input"),
        c = a.querySelector("span.morphsearch-close"),
        d = isAnimating = !1,
        e = function(c) {
            if ("focus" === c.type.toLowerCase() && d) return !1;
            morphsearch.getBoundingClientRect();
            d ? (classie.remove(a, "open"), "" !== b.value && setTimeout(function() {
                classie.add(a, "hideInput"), setTimeout(function() {
                    classie.remove(a, "hideInput"), b.value = ""
                }, 300)
            }, 500), b.blur()) : classie.add(a, "open"), d = !d
        };
    b.addEventListener("focus", e), c.addEventListener("click", e), document.addEventListener("keydown", function(a) {
        27 === (a.keyCode || a.which) && d && e(a)
    }), a.querySelector('button[type="submit"]').addEventListener("click", function(a) {
        a.preventDefault()
    })
});