function t706_onSuccessCallback(t706_form){$(".t706__cartwin-products").slideUp(10,function(){});$(".t706__cartwin-bottom").slideUp(10,function(){});$(".t706 .t-form__inputsbox").slideUp(700,function(){});try{tcart__unlockScroll()}catch(e){}}
function t754__init(recid){setTimeout(function(){t_onFuncLoad('t_prod__init',function(){t_prod__init(recid)});t754__hoverZoom_init(recid);t754_initPopup(recid);t754__updateLazyLoad(recid);t754__alignButtons_init(recid);if(typeof t_store_addProductQuantityEvents!=='undefined'){t754_initProductQuantity(recid)}},500)}
function t754_initProductQuantity(recid){var el=$('#rec'+recid);var productList=el.find(".t754__col, .t754__product-full");productList.each(function(i,product){t_store_addProductQuantityEvents($(product))})}
function t754__showMore(recid){var el=$('#rec'+recid).find(".t754");var showmore=el.find('.t754__showmore');var cards_count=parseInt(el.attr('data-show-count'),10);if(cards_count>0){if(showmore.text()===''){showmore.find('td').text(t754__dict('loadmore'))}
showmore.show();el.find('.t754__col').hide();var cards_size=el.find('.t754__col').size();var cards_count=parseInt(el.attr('data-show-count'),10);var x=cards_count;var y=cards_count;t754__showSeparator(el,x);el.find('.t754__col:lt('+x+')').show();showmore.click(function(){x=(x+y<=cards_size)?x+y:cards_size;el.find('.t754__col:lt('+x+')').show();if(x==cards_size){showmore.hide()}
if(typeof $('.t-records').attr('data-tilda-mode')=='undefined'){if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
t754__showSeparator(el,x);if($('#rec'+recid).find('[data-buttons-v-align]')[0]){t754__alignButtons(recid)}})}}
function t754__showSeparator(el,x){el.find('.t754__separator_number').addClass('t754__separator_hide');el.find('.t754__separator_hide').each(function(){if($(this).attr('data-product-separator-number')<=x){$(this).removeClass('t754__separator_hide')}})}
function t754__dict(msg){var dict=[];dict.loadmore={EN:'Load more',RU:'Загрузить еще',FR:'Charger plus',DE:'Mehr laden',ES:'Carga más',PT:'Carregue mais',UK:'Завантажити ще',JA:'もっと読み込む',ZH:'裝載更多',};var lang=window.browserLang;if(typeof dict[msg]!=='undefined'){if(typeof dict[msg][lang]!=='undefined'&&dict[msg][lang]!=''){return dict[msg][lang]}else{return dict[msg].EN}}
return 'Text not found "'+msg+'"'}
function t754__alignButtons_init(recid){var el=$('#rec'+recid);if(el.find('[data-buttons-v-align]')[0]){try{t754__alignButtons(recid);$(window).bind('resize',t_throttle(function(){if(typeof window.noAdaptive!=='undefined'&&window.noAdaptive===!0&&$isMobile){return}
t754__alignButtons(recid)},200));el.find('.t754').bind('displayChanged',function(){t754__alignButtons(recid)});if($isMobile){$(window).on('orientationchange',function(){t754__alignButtons(recid)})}}catch(e){console.log('buttons-v-align error: '+e.message)}}}
function t754__alignButtons(recid){var rec=$('#rec'+recid);var wrappers=rec.find('.t754__textwrapper');var maxHeight=0;var itemsInRow=rec.find('.t-container').attr('data-blocks-per-row')*1;var mobileView=$(window).width()<=480;var tableView=$(window).width()<=960&&$(window).width()>480;var mobileOneRow=$(window).width()<=960&&rec.find('.t754__container_mobile-flex')[0]?!0:!1;var mobileTwoItemsInRow=$(window).width()<=480&&rec.find('.t754 .mobile-two-columns')[0]?!0:!1;if(mobileView){itemsInRow=1}
if(tableView){itemsInRow=2}
if(mobileTwoItemsInRow){itemsInRow=2}
if(mobileOneRow){itemsInRow=999999}
var i=1;var wrappersInRow=[];$.each(wrappers,function(key,element){element.style.height='auto';if(itemsInRow===1){element.style.height='auto'}else{wrappersInRow.push(element);if(element.offsetHeight>maxHeight){maxHeight=element.offsetHeight}
$.each(wrappersInRow,function(key,wrapper){wrapper.style.height=maxHeight+'px'});if(i===itemsInRow){i=0;maxHeight=0;wrappersInRow=[]}
i++}})}
function t754__hoverZoom_init(recid){if(isMobile){return}
var rec=$('#rec'+recid);try{if(rec.find('[data-hover-zoom]')[0]){if(!jQuery.cachedZoomScript){jQuery.cachedZoomScript=function(url){var options={dataType:'script',cache:!0,url:url};return jQuery.ajax(options)}}
$.cachedZoomScript('https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js').done(function(script,textStatus){if(textStatus=='success'){setTimeout(function(){t_hoverZoom_init(recid,".t-slds__container")},500)}else{console.log('Upload script error: '+textStatus)}})}}catch(e){console.log('Zoom image init error: '+e.message)}}
function t754__updateLazyLoad(recid){var scrollContainer=$("#rec"+recid+" .t754__container_mobile-flex");var curMode=$(".t-records").attr("data-tilda-mode");if(scrollContainer.length&&curMode!="edit"&&curMode!="preview"){scrollContainer.bind('scroll',t_throttle(function(){if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}))}}
function t754_initPopup(recid){var rec=$('#rec'+recid);rec.find('[href^="#prodpopup"]').one("click",function(e){e.preventDefault();var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');t_onFuncLoad('t_sldsInit',function(){t_sldsInit(recid+' #t754__product-'+lid_prod+'')})});rec.find('[href^="#prodpopup"]').click(function(e){e.preventDefault();t754_showPopup(recid);var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');el_popup.find('.js-product').css('display','none');var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]');el_fullprod.css('display','block');var analitics=el_popup.attr('data-track-popup');if(analitics>''){var virtTitle=el_fullprod.find('.js-product-name').text();if(!virtTitle){virtTitle='prod'+lid_prod}
Tilda.sendEventToStatistics(analitics,virtTitle)}
var curUrl=window.location.href;if(curUrl.indexOf('#!/tproduct/')<0&&curUrl.indexOf('%23!/tproduct/')<0&&curUrl.indexOf('#%21%2Ftproduct%2F')<0){if(typeof history.replaceState!='undefined'){window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod)}}
t754_updateSlider(recid+' #t754__product-'+lid_prod+'');if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}});if($('#record'+recid).length==0){t754_checkUrl(recid)}
t754_copyTypography(recid)}
function t754_checkUrl(recid){var curUrl=window.location.href;var tprodIndex=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&tprodIndex<0){tprodIndex=curUrl.indexOf('%23!/tproduct/');if(tprodIndex<0){tprodIndex=curUrl.indexOf('#%21%2Ftproduct%2F')}}
if(tprodIndex>=0){var curUrl=curUrl.substring(tprodIndex,curUrl.length);var curProdLid=curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);var rec=$('#rec'+recid);if(curUrl.indexOf(recid)>=0&&rec.find('[data-product-lid='+curProdLid+']').length){rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click')}}}
function t754_updateSlider(recid){var el=$('#rec'+recid);t_onFuncLoad('t_slds_SliderWidth',function(){t_slds_SliderWidth(recid)});var sliderWrapper=el.find('.t-slds__items-wrapper');var sliderWidth=el.find('.t-slds__container').width();var pos=parseFloat(sliderWrapper.attr('data-slider-pos'));sliderWrapper.css({transform:'translate3d(-'+(sliderWidth*pos)+'px, 0, 0)'});t_onFuncLoad('t_slds_UpdateSliderHeight',function(){t_slds_UpdateSliderHeight(recid)});t_onFuncLoad('t_slds_UpdateSliderArrowsHeight',function(){t_slds_UpdateSliderArrowsHeight(recid)})}
function t754_showPopup(recid){var el=$('#rec'+recid);var popup=el.find('.t-popup');popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show');if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').mousedown(function(e){var windowWidth=$(window).width();var maxScrollBarWidth=17;var windowWithoutScrollBar=windowWidth-maxScrollBarWidth;if(e.clientX>windowWithoutScrollBar){return}
if(e.target==this){t754_closePopup()}});el.find('.t-popup__close, .t754__close-text').click(function(e){t754_closePopup()});$(document).keydown(function(e){if(e.keyCode==27){t754_closePopup()}})}
function t754_closePopup(){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');var curUrl=window.location.href;var indexToRemove=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&indexToRemove<0){indexToRemove=curUrl.indexOf('%23!/tproduct/');if(indexToRemove<0){indexToRemove=curUrl.indexOf('#%21%2Ftproduct%2F')}}
curUrl=curUrl.substring(0,indexToRemove);setTimeout(function(){$(".t-popup").scrollTop(0);$('.t-popup').not('.t-popup_show').css('display','none');if(typeof history.replaceState!='undefined'){window.history.replaceState('','',curUrl)}},300)}
function t754_removeSizeStyles(styleStr){if(typeof styleStr!="undefined"&&(styleStr.indexOf('font-size')>=0||styleStr.indexOf('padding-top')>=0||styleStr.indexOf('padding-bottom')>=0)){var styleStrSplitted=styleStr.split(';');styleStr="";for(var i=0;i<styleStrSplitted.length;i++){if(styleStrSplitted[i].indexOf('font-size')>=0||styleStrSplitted[i].indexOf('padding-top')>=0||styleStrSplitted[i].indexOf('padding-bottom')>=0){styleStrSplitted.splice(i,1);i--;continue}
if(styleStrSplitted[i]==""){continue}
styleStr+=styleStrSplitted[i]+";"}}
return styleStr}
function t754_copyTypography(recid){var rec=$('#rec'+recid);var titleStyle=rec.find('.t754__title').attr('style');var descrStyle=rec.find('.t754__descr').attr('style');rec.find('.t-popup .t754__title').attr("style",t754_removeSizeStyles(titleStyle));rec.find('.t-popup .t754__descr, .t-popup .t754__text').attr("style",t754_removeSizeStyles(descrStyle))}