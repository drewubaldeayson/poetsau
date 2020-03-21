/**
 * Created by ufukOzarslan & burakErmeydan on 25.04.16.
 */

jQuery.fn.hubSlider = function (config) {

    var settings = jQuery.extend({
        selector: null,

        button: {
            next: null,
            prev: null
        },
        opacity: 1,
        opacityStep: 0.2,
        startOffset: -20,
        offset: 0,
        scale: 1,
        scaleStep: '0.05',
        transition: '0.6s',
        auto: false,
        time: 3 // secondly.
    }, config);

    try {

        var they = this,
            canMove = true,
            zindex = they.find(settings.selector).length,
            styleArrayNext = [],
            styleArrayPrev = [],
            array = [];

        var prevDelay = Number(settings.transition.substring(0, settings.transition.length - 1)) * 100;

        if (settings.selector === null || settings.selector == '') console.error("Error, specify selector!");

        var totalNumber = they.find(settings.selector);

        they.find(settings.selector).each(function (k) {

            console.log(k)
            if ( k == totalNumber.length - 1 ) {
                console.log(settings.scale)
                they.find(settings.selector).eq(k).css(
                    {
                        'z-index': totalNumber.length+1,
                        'top': settings.startOffset,
                        'opacity': 0,
                        '-webkit-transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')',
                        '-moz-transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')',
                        '-ms-transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')',
                        '-o-transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')',
                        'transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')'
                    }
                ).attr('data-key', k);

                styleArrayNext[k] = {
                        'transition': settings.transition,
                        '-webkit-transition': settings.transition,
                        'z-index': totalNumber.length+1,
                        'top': settings.startOffset,
                        'opacity': 0,
                        '-webkit-transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')',
                        '-moz-transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')',
                        '-ms-transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')',
                        '-o-transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')',
                        'transform': 'scale(' + ( 1 + Number(settings.scaleStep) ) + ')'
                    };

                var minScale = ( 1 - ( ( totalNumber.length - 1 ) * Number(settings.scaleStep) ) );
                styleArrayPrev[k] = {
                        'transition': settings.transition,
                        '-webkit-transition': settings.transition,
                        'z-index': 0,
                        'top': Math.abs(settings.startOffset * ( totalNumber.length - 1 ) ) + 'px',
                        'opacity': 0,
                        '-webkit-transform': 'scale(' + minScale + ')',
                        '-moz-transform': 'scale(' + minScale + ')',
                        '-ms-transform': 'scale(' + minScale + ')',
                        '-o-transform': 'scale(' + minScale + ')',
                        'transform': 'scale(' + minScale + ')'
                    };
            } else {
                they.find(settings.selector).eq(k).css(
                    {
                        
                        'z-index': zindex,
                        'top': -settings.offset,
                        '-webkit-transform': 'scale(' + settings.scale + ')',
                        '-moz-transform': 'scale(' + settings.scale + ')',
                        '-ms-transform': 'scale(' + settings.scale + ')',
                        '-o-transform': 'scale(' + settings.scale + ')',
                        'transform': 'scale(' + settings.scale + ')'
                    }
                ).attr('data-key', k);


                styleArrayNext[k] = {
                        'transition': settings.transition,
                        '-webkit-transition': settings.transition,
                        'z-index': zindex,
                        'top': -settings.offset,

                        'opacity': settings.opacity,
                        '-webkit-transform': 'scale(' + settings.scale + ')',
                        '-moz-transform': 'scale(' + settings.scale + ')',
                        '-ms-transform': 'scale(' + settings.scale + ')',
                        '-o-transform': 'scale(' + settings.scale + ')',
                        'transform': 'scale(' + settings.scale + ')'
                    };

                styleArrayPrev[k] = {
                        'transition': settings.transition,
                        '-webkit-transition': settings.transition,
                        'z-index': zindex,
                        'top': -settings.offset,

                        'opacity': settings.opacity,
                        '-webkit-transform': 'scale(' + settings.scale + ')',
                        '-moz-transform': 'scale(' + settings.scale + ')',
                        '-ms-transform': 'scale(' + settings.scale + ')',
                        '-o-transform': 'scale(' + settings.scale + ')',
                        'transform': 'scale(' + settings.scale + ')'
                    };


                settings.scale = settings.scale - settings.scaleStep;

                if (k === 0) {
                    zindex = zindex - (k + 1);
                } else {
                    zindex = zindex - k;
                }

                if ( zindex < 0 ) zindex = 0;

                settings.offset = settings.offset + settings.startOffset;

                if (k + 1 <= they.find(settings.selector).length) {

                    they.find(settings.selector).eq(k).css({'opacity': settings.opacity});

                    settings.opacity = (settings.opacity - settings.opacityStep).toFixed(2);
                    console.log(settings.opacity)
                    if ( settings.opacity <= 0 ) settings.opacity = 0;
                }

                
            }



            

            



        });

        var movement = function (e) {

            canMove = false;

            var totalNumber = they.find(settings.selector);
            they.find(settings.selector).each(function (key) {

                var num = $(this).attr("data-key"),
                    attr = null;

                if (e == 'next') {

                    

                    if ( $(this).attr('data-key') == totalNumber.length - 1 ) {
                        

                        var minScale = ( 1 - ( ( totalNumber.length - 1 ) * Number(settings.scaleStep) ) );

                        $(this).css({
                            'transition': 'none',
                            '-webkit-transition': 'none',
                            '-webkit-transform': 'scale(' + minScale + ')',
                            '-moz-transform': 'scale(' + minScale + ')',
                            '-ms-transform': 'scale(' + minScale + ')',
                            '-o-transform': 'scale(' + minScale + ')',
                            'transform': 'scale(' + minScale + ')',
                            'top': Math.abs(settings.startOffset * ( totalNumber.length - 1 ) ) + 'px'
                        });
                    }
                        

                    attr = they.find(settings.selector).eq(key - 1).attr("style");

                    if (num != '0') {

                        $(this).attr('data-key', parseFloat(num) - 1);

                    } else {

                        $(this).attr('data-key', parseFloat(they.find(settings.selector).length) - 1);

                    }

                    

                } else if (e == 'prev') {

                    $(this).css({
                        'transition': 'none',
                        '-webkit-transition': 'none'
                    });


                    if (key >= parseFloat(they.find(settings.selector).length) - 1) key = -1;

                    attr = they.find(settings.selector).eq(key + 1).attr("style");

                    if (num < parseFloat(they.find(settings.selector).length) - 1) {

                        $(this).attr('data-key', parseFloat(num) + 1);

                    } else {

                        $(this).attr('data-key', 0);

                    }

                    $(this).css( styleArrayPrev[$(this).attr('data-key')] );


                }



                array.push(attr);

            });
        
            
            if ( e == 'next' ) {
                setTimeout(function() {
                    they.find(settings.selector).each(function (numeric) {
                        $(this).css( styleArrayNext[$(this).attr('data-key')] );
                    });
                    canMove = true;
                }, 20);
            } else {
                setTimeout(function() {
                    they.find(settings.selector).filter('[data-key="' + ( totalNumber.length - 1 ) + '"]').css( styleArrayNext[ totalNumber.length - 1 ] );
                    canMove = true;
                }, prevDelay)
            }

            

            array.length = 0;

            

        }

        if (settings.button.next === null || settings.button.next == '' && settings.button.prev === null || settings.button.prev == '') console.error("Error, button specify selector!");

        settings.button.next.click(function (e) {
            if ( canMove )
                movement('next');

        });

        settings.button.prev.click(function (e) {
            if ( canMove )
                movement('prev');

        });

        if (settings.auto === true) {

            if (settings.time === null || settings.time == '') console.error("Error, time specify selector!");

            they.interval = setInterval(function () {

                movement('next')

            }, settings.time * 1000);

            they.hover(function () {

                clearInterval(they.interval);

                they.interval = null;

            }, function () {

                they.interval = setInterval(function () {

                    movement('next')

                }, settings.time * 1000);

            });

        }

    } catch (err) {

        console.error(err);

    }  

    //HACK
    return movement;
}
