// function validateform(e) {
//     if ("" == e.elements.name.value) return alert("Please, enter your full name"), !1;
//     if (e.elements.name.value.length < 2) return alert("Please, enter your full name"), !1;
//     var t = new RegExp("[A-z А-я]", "g").test(e.elements.phone.value);
//     return "" == e.elements.phone.value ? (alert("Please, enter your phone number"), !1) : t ? (alert("Please, enter your phone number"), !1) : e.elements.phone.value.length < 9 ? (alert("Please, enter your phone number"), !1) : void e.submit()
// }
$(".scroll").click(function () {
    var e = $("#order_form").last().offset().top - 150;
    return $("html,body").animate({
        scrollTop: e
    }, 700), !1
});
var timerSec = 1020,
    year = 2222,
    month = 4,
    day = 4,
    hour = 0,
    min = 0,
    sec = 0;

function GetCount() {
    amount = timerSec, timerSec -= 1, dateNow = new Date, delete dateNow, amount < 0 ? ($("#hours").html("00"), $("#mins").html("00"), $("#secs").html("00"), $(".hours").html("00"), $(".minutes").html("00"), $(".seconds").html("00")) : (days = 0, hours = 0, mins = 0, secs = 0, out = "", days = 0, hours = 0, mins = Math.floor(amount / 60), secs = Math.floor(amount - 60 * mins), days < 10 && (days = "0" + hours), hours < 10 && (hours = "0" + hours), mins < 10 && (mins = "0" + mins), secs < 10 && (secs = "0" + secs), $("#hours").html(hours), $("#mins").html(mins), $("#secs").html(secs), $(".hours").html(hours), $(".minutes").html(mins), $(".seconds").html(secs), setTimeout("GetCount()", 1e3))
}

// function validate(e) {
//     var t = e || window.event;
//     if ("paste" === t.type) n = event.clipboardData.getData("text/plain");
//     else {
//         var n = t.keyCode || t.which;
//         n = String.fromCharCode(n)
//     }
//     /[0-9()]|\+/.test(n) || (t.returnValue = !1, t.preventDefault && t.preventDefault())
// }
dateFuture = new Date(year, month - 1, day, hour, min, sec), GetCount();