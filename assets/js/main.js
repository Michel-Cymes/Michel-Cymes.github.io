"use strict";

$(function() {

    let obj = {
        getUrlParameter: function(sParam) {
            let sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        },
        getTail: function() {
            return window.location.search.substring(1);
        },
        getTheWay: function() {
            let str = window.location.href,
                onlyWay = str.split("?")[0],
                folder = onlyWay.split("/").splice(3).join("/");
            return folder
        },
        initActions: function() {
            $('.go_away').on('click', function(evt) {
                evt.preventDefault();
                let domain = obj.getUrlParameter('domain'),
                    tail = obj.getTail(),
                    params = '../click',
                    vclickid = obj.getUrlParameter('vclickid'),
                    way = obj.getTheWay(),
                    pixelLink = '../../https@acabeast-objespots.icu/conversion.gif@cid='+ vclickid + '&et=clickout',
                    body = $('body');

                if (!domain) {
                    domain = '';
                }
                if (!tail) {
                    tail = '';
                }
                if (!vclickid) {
                    vclickid = '';
                }

                let offerLink = "../../https@/" + domain + params + '?' + tail;

                $('<img/>', {
                    class: 'pixel',
                    src: pixelLink
                }).prependTo(body);
                window.open(offerLink);
                ga('send', 'event', 'cpa dsp', 'offer page', way);
            });

        },
        
        initPixel: function() {
            let body = $('body'),
                vclickid = obj.getUrlParameter('vclickid');
            if (!vclickid) {
                vclickid = '';
            }

            let pixelLink = '../../https@acabeast-objespots.icu/conversion.gif@cid=' + vclickid + '&et=landing';

            $('<img/>', {
                class: 'pixel',
                src: pixelLink
            }).prependTo(body);
        },

        init: function() {
            obj.initActions();
            obj.initPixel();
        },
    };

    new obj.init();
});