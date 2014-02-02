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
"http://img.guideme.jp/i/EMQaYnX5RQcKW/tf5RRLRCabREkIp6uW%2BfAMG/ySrfSg42Zm01YtVKsyPI5JsMbIBk7PfWQf5i6czDSmMQIVvQ%3D%3D.jpg",
"http://ecx.images-amazon.com/images/I/510D4R-b-jL._SL500_AA300_.jpg",
"http://ecx.images-amazon.com/images/I/51KofAQvrsL._SL500_AA300_.jpg",
"http://pds.exblog.jp/pds/1/201312/20/21/d0237121_937551.jpg",
"http://tower.jp/article/news/2013/09/04/~/media/Images/Article/News/2013/Other/Anime/Space_Dandy/スペースダンディ_ティザービジュアル.jpg%3Fh%3D354%26w%3D250",
"http://kc.kodansha.co.jp/kc_up/image/MAT/519/i_20120327125612.jpg",
"http://www.nisekoi.jp/og.jpg",
"http://honnokimochi.c.blog.so-net.ne.jp/_images/blog/_435/honnokimochi/E381A8E38182E3828BE9A39BE7A9BAE5A3ABE381B8E381AEE6818BE6AD8C01.JPG%3Fc%3Da0",
"http://cdn.moae.jp/download/0001/13/8e965583aac49188fc5488bb48272545c90f65f9.jpeg",
"http://www.at-x.com/images/program/483458cbc3aeef64674110be31141ddd.jpg",
"http://www.starchild.co.jp/special/seitokai2/images/maining_index.png",
"http://cdn2.natalie.mu/media/comic/1309/extra/news_large_noragami_anime.jpg",
"http://buddy-complex.jp/img/top/keyv01.jpg",
"http://dengekionline.com/elem/000/000/749/749767/ntf_01_cs1w1_905x1280.jpg",
"http://ecx.images-amazon.com/images/I/51SHzh%2BTtTL._SL500_AA300_.jpg",
"http://www.mediafactory.co.jp/files/d000172/mahousensou2_pin.jpg",
"http://corp.toei-anim.co.jp/press/RGZ_000.jpg",
"http://comic-earthstar.jp/author/images/detail_15-7.jpg",
"http://www.netabare-manga.net/wp-content/uploads/2014/01/ginnosaji.jpg",
"http://cdn2.natalie.mu/media/comic/1309/extra/news_large_mikakunin_key.jpg",
"http://livedoor.blogimg.jp/yttgq902/imgs/1/0/102e1767.jpg",
"http://www.wallpapers-door.com/wp-content/uploads/2013/12/pupipo.jpg",
"http://hlo.tohotheater.jp/images_net/movie/010709/SAKUHIN010709_1.jpg",
"http://livedoor.blogimg.jp/peperon999/imgs/b/6/b6cffcbc.jpg",
"http://i1.ytimg.com/vi/vWNY76Ajuo8/maxresdefault.jpg",
"http://image.excite.co.jp/feed/expub/Excite_anime/2013/Excite_anime_ABg20131121124421/Excite_anime_ABg20131121124421_1.jpg",
"http://ecx.images-amazon.com/images/I/51A0DCXATNL._SL500_AA300_.jpg",
"https://pbs.twimg.com/profile_images/422284256828600320/kVkcCGbG.jpeg",
"http://www.famitsu.com/images/000/044/070/529830bd25ce2.jpg",
"http://livedoor.blogimg.jp/tanofumi1982/imgs/7/9/7980e2b3.jpg",
"http://www.yomiuriland.com/show/assets_c/2013/09/鎧衣675×470-thumb-675xauto-1777.jpg",
"http://daioh.dengeki.com/wp-content/uploads/2013/09/20130927d06.jpg",
"http://livedoor.4.blogimg.jp/hatima/imgs/3/f/3f915b2b.jpg",
"http://www.p-tina.net/news/wp-content/uploads/2012/02/星矢Ω第一弾スチール_トリミング済.jpg",
"http://onepiece-mania.blog.so-net.ne.jp/_images/blog/_7e5/onepiece-mania/onepiece.jpg",
"http://pic.prcm.jp/gazo/Kg/ajx0M6.jpeg"
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
	var i = 0;
	var largh_num = 0;
	var middle_num = 0;
	var small_num = 0;
	
	while ( i < 35 )
	{
		var random_width_height = Math.ceil( Math.random() * 3 );
		if (random_width_height == 1) {
			if (small_num < 15) {
				insertHTML(random_width_height, i);
				small_num += 1;
				i++;
			}
		}
		else if (random_width_height == 2) {
			if (middle_num < 15) {
				insertHTML(random_width_height, i);
				middle_num += 1;
				i++;
			}
		}
		else if (random_width_height == 3) {
			if (largh_num < 5) {
				insertHTML(random_width_height, i);
				largh_num += 1;
				i++;
			}
		}
	}

	$('#container').nested( {minWidth: 80, gutter: 2, resizeToFit: false, speed:10} );
	//$("#content").nested({minWidth: 100,gutter: 2,resizeToFit: false})

	setTimeout( 'timer()', 10000 );
});
