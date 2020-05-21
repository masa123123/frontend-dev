
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  grabCursor: true, //カーソルがグラブに
  autoplay: {delay: 2000},
  //autoplayDisableOnInteraction:false, //マウスで表示変えても4秒経てばまた変わる
  disableOnInteraction: false,
  stopOnLastSlide: false,
  reverseDirection: false,
  effect: "coverflow", //アニメーション
  centeredSlides: true, //スライダー中央ぞろえ
  slidesPerView: 1, //現在表示されている画像に何枚のスライドを表示するか
  speed: 1000,
  //delay: 2000, //4秒ごとに変わる
  breakpoints: { //ウィンドウサイズによって変化させる役割をしてくれる
    1024: { //1024px以上になったら
      slidesPerView: 2,
    }
  },
  autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
});

  

//ハンバーガー
$(function() {
  $(".nav-button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".nav-wrap")
        .addClass("close")
        .removeClass("open");
    } else {
      $(this).addClass("active");
      $(".nav-wrap")
        .addClass("open")
        .removeClass("close");
    }
  });
});


// $(function(){
//   $(window).on("scroll",function(){
//     $(".cover-slide").each(function(index, el){
//       if($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)){
//         $(el).addClass("inview");
//       }
//     });
//   });
// });

$(window).scroll(function () {
  // クラスを追加するwindowの位置を設定
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();
  var effectPos = scrollBottom - 50;
  
  // eachでliを順番に処理
  $(".cover-slide").each(function (i) {
      if(effectPos > $(this).offset().top + 150){
          var that = this;

          // 0.3s毎にずれて表示
          setTimeout(function () {
             $(that).addClass("inview");
          });
      }
  });
});



// $(function(){
//   var $win = $(window),
//   $hero = $(".header"),
//   $header = $(".header"),
//   heroHeight = $hero.outerHeight();
//   fixedClass = "fixed";

//   $win.on("load scroll", function(){ //ロードしてスクロールされたら
//     var value = $(this).scrollTop(); //thisは$winをさしてる。で、windowのスクロール量が
//     if($win.width() > 1){ //ウィンドウの幅が７６８px以上の時
//       if(value > heroHeight){ //valueというのがスクロールした量、ファーストビューの高さを超えたら
//         $header.addClass(fixedClass); //fixedClass（fixed）というのを$header（.header）につける
//       }else{
//         $header.removeClass(fixedClass);
//       }
//     }
//   });
// });


