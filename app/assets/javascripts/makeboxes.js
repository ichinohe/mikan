makeBoxes = function() {
  var boxes = [],
      count = Math.random()*15;
      if (count < 5) count = 5;

  for (var i=0; i < count; i++ ) {
    var box = document.createElement('div');
    box.className = 'box size' +  Math.ceil( Math.random()*3 ) +  Math.ceil( Math.random()*3 );
    // add box DOM node to array of new elements
    boxes.push( box );
  }

  return boxes;
};

array_img = [
"/assets/bubble/nisecoi.jpg",
"/assets/bubble/sekaiseifuku.jpg",
"/assets/bubble/tesagure.jpg",
"/assets/bubble/imouto.jpg",
"/assets/bubble/kuroko.jpg",
"/assets/bubble/ippo.jpg",
"/assets/bubble/kingdam.jpg",
"/assets/bubble/daiya.jpg",
"/assets/bubble/ahiru.jpg",
"/assets/bubble/purikyua.jpg",
"/assets/bubble/yugio.jpg",
"/assets/bubble/seiya.jpg",
"/assets/bubble/toriko.jpg",
"/assets/bubble/onepiece.jpg",
"/assets/bubble/vangard.jpg",
"/assets/bubble/kamen.jpg",
"/assets/bubble/kyoryu.jpg",
"/assets/bubble/brain.jpg",
"/assets/bubble/magi.jpg",
"/assets/bubble/zetumetukigushojo.jpg",
"/assets/bubble/nobunagan.jpg",
"/assets/bubble/farukomu.jpg",
"/assets/bubble/witch.jpg",
"/assets/bubble/complex.jpg",
"/assets/bubble/space.jpg",
"/assets/bubble/noragami.jpg",
"/assets/bubble/nobunagafulu.jpg",
"/assets/bubble/sekikun.jpg",
"/assets/bubble/saki.jpg",
"/assets/bubble/osiri.jpg",
"/assets/bubble/aikatsu.jpg",
"/assets/bubble/gandam_build.jpg",
"/assets/bubble/toaru_hikoshi.jpg",
"/assets/bubble/soniani.jpg",
"/assets/bubble/dflag.jpg",
"/assets/bubble/koukaku.jpg",
"/assets/bubble/akaechan.jpg",
"/assets/bubble/yowamushi.jpg",
"/assets/bubble/tibidebi.jpg",
"/assets/bubble/usa.jpg",
"/assets/bubble/hamatora.jpg",
"/assets/bubble/tokyo.jpg",
"/assets/bubble/inazuma.jpg",
"/assets/bubble/gaisuto.jpg",
"/assets/bubble/hxh.jpg",
"/assets/bubble/yokai.jpg",
"/assets/bubble/chuni.jpg",
"/assets/bubble/inari.jpg",
"/assets/bubble/nagi.jpg",
"/assets/bubble/maeken.jpg",
"/assets/bubble/mikakunin.jpg",
"/assets/bubble/pocket.jpg",
"/assets/bubble/naruto.jpg",
"/assets/bubble/ane.jpg",
"/assets/bubble/silver.jpg",
"/assets/bubble/strange.jpg",
"/assets/bubble/gogo.jpg",
"/assets/bubble/pupa.jpg",
"/assets/bubble/magic.jpg",
"/assets/bubble/hozukino.jpg",
"/assets/bubble/sakura.jpg",
"/assets/bubble/zxignition.jpg",
"/assets/bubble/samurai.jpg",
"/assets/bubble/kill.jpg",
"/assets/bubble/golden.jpg",
"/assets/bubble/nourin.jpg",
"/assets/bubble/wakeup.jpg",
"/assets/bubble/future.jpg",
"/assets/bubble/bubibo.jpg",
"/assets/bubble/strike.jpg",
"/assets/bubble/rainbow.jpg",
"/assets/bubble/jewel.jpg",
"/assets/bubble/log.jpg",
"/assets/bubble/robot.jpg",
"/assets/bubble/seitokai.jpg",
"/assets/bubble/uchukyodai.jpg",
"/assets/bubble/doriland.jpg",
"/assets/bubble/conan.jpg"

];

color_arr = ["#2ecc71", "#3498db", "#f1c40f"];

function insertHTML(size, i) {
	var random_color = Math.ceil( Math.random() * 3 ) - 1;
	// by color
	// var e = '<div class="box size' + size +  size + '" style="background-color:' + color_arr[random_color] + ';width:300px;-moz-background-size:cover;background-size:cover;"></div>';
	// by image
	var e = '<div class="box size' + size +  size + '" style="background-image:url(' + array_img[i] + ');width:300px;-moz-background-size:cover;background-size:cover;"></div>';
	$( '#container' ).html(  e + $( '#container' ).html() );

	setTimeout( 'timer()', 10000 );
}

$(function()
{
	// bubble map definition
	var large_num = 5;
	var middle_num = 40;
	var small_num = 33;
	var total_num = large_num + middle_num + small_num;

	var i = 0;
	var current_large_num = 0;
	var current_middle_num = 0;
	var current_small_num = 0;
	while ( i < total_num )
	{
		var random_width_height = Math.ceil( Math.random() * 3 );
		if (random_width_height == 1) {
			if (current_small_num < small_num) {
				insertHTML(random_width_height, i);
				current_small_num += 1;
				i++;
			}
		}
		else if (random_width_height == 2) {
			if (current_middle_num < middle_num) {
				insertHTML(random_width_height, i);
				current_middle_num += 1;
				i++;
			}
		}
		else if (random_width_height == 3) {
			if (current_large_num < large_num) {
				insertHTML(random_width_height / 3 * 4, i);
				current_large_num += 1;
				i++;
			}
		}
	}

	$('#container').nested( {minWidth: 100, gutter: 10, resizeToFit: false, speed:10} );
	//$("#content").nested({minWidth: 100,gutter: 2,resizeToFit: false})

	setTimeout( 'timer()', 10000 );
});
