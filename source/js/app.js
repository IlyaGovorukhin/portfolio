$(document).ready(function () {
    'use strict';

   // resizeBlur
    model.resizeBlur();
    //.preloader
    const url = $('.Buttton_point').hasClass('about_block1');
    if(url){
        $('.preloder').css('background-image', 'url("assets/img/bg2.jpg"')
    }
    $('body').find('*').not('.preloder').addClass('div_hide')
    const imgs = [],
           vids = [];
    let contentReady = $.Deferred();
    $('*').map((k, v) => {
        let risaz = window.innerWidth;
        const bg = $(v).css('background-image'),
              img = $(v).is('img'),
              vid = $(v).is('source')
        if (img) {
            if ($(v).attr('src')) {
                imgs.push($(v).attr('src'))
            }
        };
        if(vid) {
            if ($(v).attr('src')) {
                vids.push($(v).attr('src'))
            }
        }
            if (bg != 'none') {
                var path = bg.replace('url("', "").replace('")', "");
                var path = path.replace('url(', "").replace(')', "");
                imgs.push(path)
            };
    });
    let cost = 0
    vids.map((k) => {
        let image = $('<video>', {
            attr: {
                src: k
            }
        })
        image.load(function () {
            cost++
            setprocent(cost);
        })
    });
    imgs.map((k) => {
        let image = $('<img>', {
            attr: {
                src: k
            }
        })
        image.load(function () {
            cost++
            setprocent(cost);
        })
    });
    function setprocent(v) {
        let procent = Math.ceil(((v) * 100) / imgs.length)
        $('#deepPink-rectangle3').text(procent);
        if (procent >= 100) {
           $('.preloder').addClass('div_hide');
           $('body').find('*').not('.preloder').removeClass('div_hide')
            contentReady.resolve()
            contentReady.done(()=>{
               $('.preloder').addClass('div_hide');
                $('body').find('*').not('.preloder').removeClass('div_hide')
                }
            )
        }
    };
})


        const vies = {
//paralax
            paralax: (x,y)=>{
                $('.paralax_paralax-lear')
                    .map((k,v)=>{
                        $(v).css({
                            'top': (window.innerHeight / 2)*(k/100) + 'px',
                            'transform' : 'translate3d(' + x*(k/100) + 'px, ' + y*(k/100) + 'px, 0 )'
                        })
                    })

            },
//paralaxSize
            paralaxSize:(x,y,z)=>{
                $('.paralax_paralax-lear').css( {
                    'width': x + 'px',
                    'height': y + 'px',
                    'margin-left': '-' + z + 'px'
                });
            },
   //flip
            flipAdd: ()=>{
                 model.isFlipped = false;
                $('.fliper').addClass('flip-go');
                $('.conteiner_welcom').text('Назад');


            },
            flipRem: ()=>{
                model.isFlipped = true;
                $('.fliper').removeClass('flip-go');
                $('.conteiner_welcom').text('Авторизоваться');
            },
//scroll
            scroll_paralax: (e)=>{
                $('.paralax_paralax-lear--works').map((v,k)=>{
                    $('.conteiner--works_img').css({
                        'transform' : 'translate3d( 0,' + -e*(v*3) + '%' + ' ,0)'
                    })
                    if(v<=3){
                         let
                        a = v + 3 -(v+v)+1;
                        $(k).css({
                                        'transform' : 'translate3d( 0,' + e*(a/3) + '%' + ' ,0)'
                                    });
                   } else if(v == 6) {
                        $(k).css({
                            'transform' : 'translate3d( 0,' + -e*(v*1.5) + '%' + ' ,0)'
                        })
                    } else {
                        $(k).css({
                                    'transform' : 'translate3d( 0,' + -e*v + '%' + ' ,0)'
                                })
                    }
                })
            },
//slider
            slider: {
                up: (x, y) => {
                    y.css({
                        'top': '-100%'
                    })
                    x.animate({
                        'top': '100%'
                    }, 200)
                    y.animate({
                        'top': '0'
                    }, 200)
                    x.removeClass('active')
                    y.addClass('active')
                },
                down: (x, y) => {
                    y.css({
                        'top': '100%'
                    })
                    x.animate({
                        'top': '-100%'
                    }, 200)
                    y.animate({
                        'top': '0'
                    }, 200)
                    x.removeClass('active')
                    y.addClass('active')
                },
                upText: (x, y) => {
                    x.css({
                        'display': 'inline-block'
                    })
                    y.css({
                        'display': 'none'
                    })
                },
                animateImg:(e)=>{
                    $('.slider_block2-up--box').children().css({
                        'opacity' : '0'
                    }).attr('src' ,e).animate({
                        'opacity' : '1'
                    }, 500)
                }
            },
 //ButtomDown
            ButtomDown: (e)=>{

                $('html, body').animate({
                    'scrollTop': $('.Buttton_point').position().top
                }, 500)

            },

            ButtomUp:(e)=>{
                $('html, body').animate({
                    'scrollTop': 0
                }, 500)
            },
            resizeBlur: (x,y)=> {
                if (x <= 900) {
                    $('.positin_blur-ofset').css({
                        'background-size': 900 + 'px' + ' ' + 'auto',
                        'background-position-y' :   '45%'
                    })
                } else {
                    $('.positin_blur-ofset').css({
                        'background-size': x + 'px' + ' ' + 'auto',
                        'background-position-y' : 41.7 + y  + '%'
                    })
                }
            }
        };// - ПредставленияF
        const model = {
 //paralax
            paralax: e=>{
                let y = (window.innerHeight / 2) - e.pageY;
                let x = (window.innerWidth / 2) - e.pageX;
                vies.paralax(x,y)
            },
//paralaxSize
            paralaxSize: ()=>{
                    _wWidth  = $(window).innerWidth() +500,
                    _wHeight = $(window).innerHeight(),
                        _speed = 1 / 100,
                        _halfWidth  = $(window).innerWidth() / 2,
                        maxShiftX = $('.paralax_paralax-lear').length-1 * _speed* 100,
                        widthWider = _wWidth + (maxShiftX * 2),
                       _halfWidth = widthWider / 2;
                       vies.paralaxSize(widthWider,_wHeight,_halfWidth)

            },
//flip
            isFlipped: true,
            flip: e=>{
            e.preventDefault();
            if(model.isFlipped){
                vies.flipAdd();
            } else {
                 vies.flipRem();
            }
        },
//scroll
            scroll_paralax: (e)=>{
                 let minusTop = e/90;

                 vies.scroll_paralax(minusTop);
            },
//slider
            counter: 2,
            slider: (e)=>{
              let
                  rqActive  = $('.slider_block-up--up.active'),
                    item = $('.slider_block-up--up'),
                    itemText = $('.slider_block-centr'),
                    rqActiveTwo  = $('.tap2.active'),
                    itemTwo = $('.tap2'),
                    imgsrc = item.eq(model.counter).find('img').attr('src');
                           //animateImg
                           vies.slider.animateImg(imgsrc);
                          //circl counter
                           model.counter++;
                           model.counter = model.NexCount(model.counter, item.length);

                           //mini slider
                           vies.slider.down(rqActive,item.eq( model.counter))
                           vies.slider.up(rqActiveTwo,itemTwo.eq(model.counter-2));

                           //big slider
                           let dod = model.NexCountText(model.counter, itemText.length);
                           vies.slider.upText(itemText.eq(model.counter), itemText.eq(dod))

                           model.sliderTitlesAnimation(itemText.eq(model.counter));
            },
            //circl counter
            NexCount: (fistCount, secondCount)=>{
                let count = (fistCount >= secondCount)? 0 : fistCount
              return count
          },
            // circl dod
            NexCountText: (fistCount, secondCount)=>{
                let count = (fistCount >= secondCount)? 0 : fistCount-1
                let count2 = (count < 0)? secondCount-1 : count
                return count2
            },
            sliderTitlesAnimation: (e)=>{
                        let world = $(e).children().first().text().split(' '),
                            world2 = $(world).map((dl,del)=>{
                              if(del.length >0){
                                  return del
                              }
                          })
                      $(e).children().first().html('')
                          $(world2).each((l,el)=>{
                               let letter = el.split('');
                                       let arrleter = '';
                                      $(letter).each((l1,e2)=>{
                                          arrleter += '<span class="char char--' + l1 + '">' + e2 + '</span>';
                                      })
                                      let newWord =  '<span class="word">'+' '+ arrleter  +'</span>';
                                      $(e).children().first().append(newWord)
                            })
           },
//ButtomDown
            ButtomDown: (e)=>{
                vies.ButtomDown(e);
            },
 //ButtomUp
            ButtomUp:(e)=>{
                vies.ButtomUp(e);
            },
//resiz
            resizeBlur: ()=> {
                let pozwidth = $('.pageform').width(),
                    pros = ($('.pageform').width() - $('.positin_blur-ofset').width())/200;
                  vies.resizeBlur(pozwidth,pros)

            }

        };// - Модель
        const controller = {
//paralax
            paralax :  ()=> {
                $(window).on('mousemove', e=>{
                    model.paralax(e);
                })
//paralaxSize
                $(window).on('resize', ()=>{
                    model.paralaxSize();
                });
            },
//flip
            flip: ()=> {
                $('.conteiner_welcom, .welcome-nav__item--Back').on('click', e=>{
                    model.flip(e);
                })

            },
//scroll
            scroll_paralax: ()=> {
                $(window).on('scroll', ()=>{
                    let scrollTop =    $(window).scrollTop();
                    model.scroll_paralax(scrollTop);
                })
            },
// slider
            slider: ()=>{
                $('.slider_block-down--button').on('click', (e)=>{
                    e.preventDefault();
                    model.slider(e);
                })
            },
// buttomDown
            buttomDown:()=>{
                $('#Layer_1').on('click', (e)=>{
                    e.preventDefault();
                    model.ButtomDown(e);
                })
                $('.pageform-arrow').on('click', (e)=>{
                    e.preventDefault();
                    model.ButtomUp(e);
                })


            },
//resiz
            resizeBlur: ()=>{
                $(window).resize(()=>{
                    model.resizeBlur();
                })


            }


        };// - Контроллер
        controller.resizeBlur();
        controller.buttomDown();
        controller.slider();
        controller.scroll_paralax();
        controller.paralax();
        controller.flip();




