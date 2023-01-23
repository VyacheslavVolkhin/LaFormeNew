$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};
    $('.js-field-phone .field-button .btn').on('click', function() {
        $(this).parents('.js-field-phone').addClass('active');
        return false;
    })

    //file input 
    $('.js-field-file .js-file-button').on('click', function () {
        $(this).parent().find('input').click();
        return false;
    })


    //btn tgl
    $('body').on('click', '.js-btn-tgl', function () {
        $(this).toggleClass('active');
        return false;
    })

    //swipebox
    $('[data-swipebox]').swipebox();
    
	
    //popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})
    
    //frm-select-toggle
    $('.frm-select-toggle .btn-toggle').on('click', function() {
        $(this).parents('.frm-select-toggle').toggleClass('active');
        return false;
    })
    
    //order-bonuses-box
    $('.order-bonuses-box .btn-edit').on('click', function() {
        $(this).toggleClass('active').parents('.form-outer-wrap').toggleClass('form-open')
        return false;
    })


    //content toggle action
    $('input[data-content]').each(function () {
        if ($(this).is(':checked')) {
            let selectContent = $(this).attr('data-content');
            $('.frm-content[data-content="' + selectContent + '"]').addClass('active');
        }
    })
    $('input[data-content]').on('click', function () {
        $('.frm-content.active').removeClass('active');
        $('input[data-content]').each(function () {
            if ($(this).is(':checked')) {
                let selectContent = $(this).attr('data-content');
                $('.frm-content[data-content="' + selectContent + '"]').addClass('active');
            }
        })
    })
    $('.btn[data-content]').on('click', function () {
        let dataContent = $(this).attr('data-content');
        $(this).attr('disabled', 'disabled');
        $('.frm-content[data-content="' + dataContent + '"]').slideDown(200);
        return false;
    })


    //popups
    let popupCurrent;
    $('.js-popup-open').on('click', function () {
        $('.popup-outer-box').removeClass('active');
        $('body').addClass('popup-open');
        popupCurrent = $(this).attr('data-popup');
        $('.popup-outer-box[id="' + popupCurrent + '"]').addClass('active');
        return false;
    })
    $('.popup-outer-box').on('click', function() {
        $('.popup-outer-box').click(function(event) {
            if ($(event.target).closest(".popup-box").length) return;
            $('body').removeClass('popup-open');
            $('.popup-outer-box').removeClass('active');
        });
    })
    $('.js-popup-close').on('click', function () {
        $('body').removeClass('popup-open');
        $('.popup-outer-box').removeClass('active');
        return false;
    })


    //actions-sliders-box
    if (!!$('.actions-sliders-box').offset()) {
        $('.actions-sliders-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
    }

    //actions-slider-box
    if (!!$('.actions-slider-box').offset()) {
        $('.actions-slider-box .slider').slick({
            dots: true,
            slidesToShow: 3,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }


    //catalog-slider-box
    if (!!$('.catalog-slider-box').offset()) {
        $('.catalog-slider-box .slider').slick({
            dots: false,
            slidesToShow: 6,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        dots: true,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        dots: true,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }


    //item-tile-review
    if (!!$('.item-tile-review').offset()) {
        $('.item-tile-review .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }


    //photos slider box
    if (!!$('.photos-slider-box').offset()) {
        if ($(window).innerWidth()>1023) {
            let slActivePosRight = 0;
            let slActivePosLeft = 0;
            let slActivePosMax = 0;
            let slActivePosRightDelta = 0;
            let slActivePosLeftDelta = 0;
            let slActiveScrollLeft = 0;
            let pSlider = $('.photos-slider-box .slider-wrap .slider').slick({
                dots: true,
                slidesToShow: 1,
                infinite: false,
                adaptiveHeight: true,
                appendDots: $('.slider-dots'),
                prevArrow: false,
                nextArrow: false,
                customPaging: function (slick, index) {
                    var targetImage = slick.$slides.eq(index).find('.sl-wrap').attr('data-thumb');
                    if (slick.$slides.eq(index).find('.sl-wrap').children('.elm-video').length > 0) {
                        return '<div class="elm-photo photo-actions photo-cover"><img src=" ' + targetImage + ' "/></div>';
                    } else {
                        if (slick.$slides.eq(index).find('.sl-wrap').children('.elm-photo[data-thumb-type="photo-cover"]').length > 0) {
                            return '<div class="elm-photo photo-cover"><img src=" ' + targetImage + ' "/></div>';
                        } else if (slick.$slides.eq(index).find('.sl-wrap').children('.elm-photo[data-thumb-type="photo-contain"]').length > 0) {
                            return '<div class="elm-photo photo-contain"><img src=" ' + targetImage + ' "/></div>';
                        } else {
                            return '<div class="elm-photo"><img src=" ' + targetImage + ' "/></div>';
                        }
                    }
                },
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                        }
                    },
                ]
            });
            //thumbs slider
            $('.photos-slider-box .slider-dots .slick-dots').slick({
                dots: false,
                slidesToShow: 8,
                vertical: true,
                variableWidth: false,
                infinite: false,
                adaptiveHeight: false,
                prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-up"></span>',
                nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-down"></span>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            prevArrow: false,
                            nextArrow: false,
                        }
                    },
                ]
            });
            $('.photos-slider-box .slider-dots .slick-slide .elm-photo').on('click', function() {
                let cSlide = $(this).parents('.slick-slide').attr('data-slick-index');
                pSlider.slick('slickGoTo', cSlide);
            })
        } else {
            let slActivePosRight = 0;
            let slActivePosLeft = 0;
            let slActivePosMax = 0;
            let slActivePosRightDelta = 0;
            let slActivePosLeftDelta = 0;
            let slActiveScrollLeft = 0;
            let pSlider = $('.photos-slider-box .slider-wrap .slider').slick({
                dots: true,
                slidesToShow: 1,
                infinite: false,
                adaptiveHeight: true,
                appendDots: $('.slider-dots'),
                prevArrow: false,
                nextArrow: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                        }
                    },
                ]
            });
            //thumbs slider
            $('.photos-slider-box .slider-dots .slick-slide .elm-photo').on('click', function() {
                let cSlide = $(this).parents('.slick-slide').attr('data-slick-index');
                pSlider.slick('slickGoTo', cSlide);
            })
        }
    }


    //gallery-slider-box
    if (!!$('.gallery-slider-box').offset()) {
        $('.gallery-slider-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                        dots: true,
                    }
                },
            ]
        });
    }


    //gallery slider
    if (!!$('.item-tile-object').offset()) {
        let pSlider = $('.item-tile-object .slider-wrap .slider').slick({
            dots: false,
            slidesToShow: 1,
            infinite: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                        dots: true,
                    }
                },
            ]
        });
        let pSliderPreview = $('.item-tile-object .slider-preview-wrap .slider').slick({
            dots: false,
            slidesToShow: 3,
            infinite: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            vertical: true,
        });
        //pSlider.slick('refresh');
        //pSliderPreview.slick('refresh');
        //$('.item-tile-object .slider-wrap .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            //$('.item-tile-object .slider-preview-wrap .sl-wrap.active').removeClass('active');
            //$('.item-tile-object .slider-preview-wrap .elm-photo[data-slide="' + currentSlide + '"]').parent().addClass('active');
        //});
        $('.item-tile-object .slider-preview-wrap .slider .tile-photo').click(function () {
            let newSlide = $(this).attr('data-slide');
            $(this).parents('.item-tile-object').find('.slider-preview-wrap').find('.sl-wrap.active').removeClass('active');
            $(this).parent().addClass('active');
            $(this).parents('.item-tile-object').find('.slider-wrap').find('.slider').slick('slickGoTo', newSlide);
            return false;
        })
    }


    if (!!$('.wrap').offset()) {
        let stickyTop = $('.wrap').offset().top + 150;
        $(window).scroll(function () {
            let windowTop = $(window).scrollTop();
            if (stickyTop < windowTop) {
                $('.wrap').addClass('header-fixed');
            } else {
                $('.wrap').removeClass('header-fixed');
            }
        });
    }
    
    
    
    //popup catalog menu
    $('.popup-menu-wrap .catalog-wrap .btn').on('click', function() {
        $('body').toggleClass('catalog-menu-show');
        if ($(window).innerWidth() > 1023) {
            $('.popup-menu-wrap .submenu-list-wrap').find('.submenu-button[data-submenu]').eq(0).click();
        }
        return false;
    })
    $('.popup-menu-wrap .catalog-wrap .button-catalog-close').on('click', function() {
        $('body').toggleClass('catalog-menu-show');
        return false;
    })
    $('.popup-menu-wrap .catalog-wrap .submenu-list-wrap a[data-submenu]').on('click', function() {
        let submenuCurrent = $(this).attr('data-submenu');
        $('.popup-menu-wrap .submenu-button.active').removeClass('active');
        $(this).addClass('active');
        $('.popup-menu-wrap .catalog-wrap .submenu-menu-wrap.active').removeClass('active');
        $('.popup-menu-wrap .catalog-wrap .submenu-menu-wrap[data-submenu="'+submenuCurrent+'"]').addClass('active');
        $('body').addClass('catalog-submenu-show');
        return false;
    })
    $('.popup-menu-wrap .catalog-wrap .button-submenu-close').on('click', function() {
        $('.popup-menu-wrap .submenu-button.active').removeClass('active');
        $('body').removeClass('catalog-submenu-show');
        $('.popup-menu-wrap .catalog-wrap .submenu-menu-wrap.active').removeClass('active');
        return false;
    })
    $('.popup-menu-wrap .submenu-button-more').on('click', function() {
        $(this).parents('ul').toggleClass('show-full');
        return false;
    })

    //filter scripts
    $('.js-filter-toggle').on('click', function() {
        $('body').toggleClass('filter-show');
        $('.filter-box .js-btn-toggle').toggleClass('active');
        return false;
    })
    if (!!$('#range-slider').offset()) {
        $('#range-slider').slider({
            range: true,
            min: 0,
            max: 25000,
            values: [4999, 15999],
            slide: function (event, ui) {
                $('#range-price-min').val(ui.values[0]);
                $('#range-price-max').val(ui.values[1]);
            }
        })
        $('#range-price-min').val($('#range-slider').slider('values', 0));
        $('#range-price-max').val($('#range-slider').slider('values', 1));
        $('#range-price-min').bind('focusout', function () {
            if ($(this).val() > $('#range-slider').slider('values', 1)) {
                $(this).val($('#range-slider').slider('values', 0));
            }
            $('#range-slider').slider('values', 0, $(this).val());
        })
        $('#range-price-max').bind('focusout', function () {
            if ($(this).val() < $('#range-slider').slider('values', 0)) {
                $(this).val($('#range-slider').slider('values', 1));
            }
            $('#range-slider').slider('values', 1, $(this).val());
        })
        $('#range-price-min').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() > $('#range-slider').slider('values', 1)) {
                    $(this).val($('#range-slider').slider('values', 0));
                }
                $('#range-slider').slider('values', 0, $(this).val());
            }
        })
        $('#range-price-max').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() < $('#range-slider').slider('values', 0)) {
                    $(this).val($('#range-slider').slider('values', 1));
                }
                $('#range-slider').slider('values', 1, $(this).val());
            }
        })
        $('#widget').draggable();
    }
	
});

//main-slider-box
if (!!$('.main-slider-box').offset()) {
    $('.main-slider-box .slider').slick({
        dots: false,
        slidesToShow: 1,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: true,
        infinite: true,
        adaptiveHeight: false,
        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-main ico-arrow-prev"></span>',
        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-main ico-arrow-next"></span>',
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    dots: true,
                    //prevArrow: false,
                    //nextArrow: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    //prevArrow: false,
                    //nextArrow: false,
                    adaptiveHeight: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    prevArrow: false,
                    nextArrow: false,
                    adaptiveHeight: true,
                }
            },
        ]
    });


    
    
    
    
}
    