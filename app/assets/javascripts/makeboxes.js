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
"http://www.nisekoi.jp/img/chara/img_chara00.png",
"http://www.sekaiseifuku-zzz.com/img/bnr/bnr_180x180.gif",
"http://www.ntv.co.jp/tesabu/images/bg_main_pc_new.jpg",
"http://imocyo-anime.com/common/images/img_character_s.png",
"http://livedoor.blogimg.jp/buhihisokuhou/imgs/8/2/8299d4f7-s.jpg",
"http://cdnet.prod-kdstore.sdgtl.net/publish/items/1/0/0/2/9/8/8/9/images/jpn/600x450/image.jpg",
"http://xn--cck5dwcr34p969aa.up.n.seesaa.net/xn--cck5dwcr34p969aa/image/E382ADE383B3E382B0E38380E383A020KINGDOM20E7ACAC2E382B7E383AAE383BCE382BA.gif%3Fd%3Da1",
"http://diaace.com/images/keyvisual_02.jpg",
"http://www.animate.tv/news/visual/2013/1362568754_1_1.jpg",
"http://asahi.co.jp/dokidoki_precure/img/top/noscript.jpg",
"http://static.repotama.com/wp-content/uploads/2012/09/db880ab927b666b042ec5476a4430d97.jpg",
"http://www.tv-asahi.co.jp/seiya-koga/uploads/2013/07/main.png",
"http://pic.prcm.jp/gazo/Kg/ajx0M6.jpeg",
"http://youtubeyoutubetube.up.seesaa.net/image/onepiece2.jpg",
"http://livedoor.blogimg.jp/animesong_gamesong/imgs/0/b/0bc86b3a.jpg",
"http://www.toei.co.jp/tv/gaimu/main_image/__icsFiles/afieldfile/2013/12/20/550_309-2.jpg",
"http://www.toei.co.jp/tv/kyouryu/main_image/__icsFiles/afieldfile/2013/02/21/HP01.jpg",
"http://www.lisani.jp/admin/wp-content/uploads/2013/09/130903_lisani_fai.jpg",
"http://www.project-magi.com/img/top/image/01.jpg",
"http://livedoor.blogimg.jp/peperon999/imgs/0/0/009649d1.jpg",
"http://livedoor.blogimg.jp/nmaouytor/imgs/d/2/d26b939b.png",
"http://www.famitsu.com/images/000/044/070/529830bd25ce2.jpg",
"http://articleimage.nicoblomaga.jp/image/197/2013/8/e/8e664193d3b680a83ea625ea9265250625e3ea2b1384142779.jpg",
"http://buddy-complex.jp/img/top/keyv01.jpg",
"http://tower.jp/article/news/2013/09/04/~/media/Images/Article/News/2013/Other/Anime/Space_Dandy/%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%83%80%E3%83%B3%E3%83%87%E3%82%A3_%E3%83%86%E3%82%A3%E3%82%B6%E3%83%BC%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB.jpg%3Fh%3D354%26w%3D250",
"http://cdn2.natalie.mu/media/comic/1309/extra/news_large_noragami_anime.jpg",
"http://www.animate.tv/news/visual/2013/1385975944_1_1_8baadb9bcb5d94c25d4209dd8498a209_thumb.jpg",
"http://www.t-sekikun.jp/img/top/new_alt.jpg",
"http://www.at-x.com/images/program/e16b999b631f77dcb52bb49efb0526cd.jpg",
"http://ecx.images-amazon.com/images/I/615jw-yXyiL._SL500_AA300_.jpg",
"http://news.surpara.com/wp-content/uploads/2013/07/135.jpg",
"http://livedoor.blogimg.jp/gundam_matome/imgs/3/c/3cb93aae.jpg",
"http://livedoor.blogimg.jp/garmaquve-gama/imgs/d/5/d52fe596.jpg",
"http://www.at-x.com/images/program/483458cbc3aeef64674110be31141ddd.jpg",
"http://www.mediafactory.co.jp/comic-alive/d-frag/special/wallpaper/df_wallpaper04_1024-768.jpg",
"http://blog-imgs-55-origin.fc2.com/k/o/d/kodoanime01/araizu_title.jpg",
"http://figurehoshiio.x0.com/figurehoshiio/wp-content/uploads/2013/12/main_img.png",
"http://maiani.info/wp-content/uploads/2013/12/2ec2dc6a7d54a5976b88d182bcf464a82.jpg",
"http://www.famitsu.com/images/000/017/870/4ffe517f25be5.jpg",
"http://ecx.images-amazon.com/images/I/61-rylf4t5L._SL500_AA300_.jpg",
"http://livedoor.blogimg.jp/anico_bin/imgs/2/0/20afabe3.jpg",
"http://articleimage.nicoblomaga.jp/image/28/2013/0/6/06327e97f6657d9a64681af36f653a802a1997d01383148977.jpg",
"http://www.famitsu.com/images/000/030/298/5142b61b3e4e1.jpg",
"http://www.gpara.com/files/contents/c_s1364918815_75.jpg",
"http://blog-imgs-26.fc2.com/a/t/o/atoniwota/HunterXHunter_DVDLabel00.jpg",
"http://blog-imgs-57.fc2.com/2/c/h/2chnokakera/kv_20131115121824.jpg",
"http://blog-imgs-46.fc2.com/a/n/i/animaga000/20140109013745550s.jpg",
"http://inarikonkon.jp/ogp-img.jpg",
"http://blog-imgs-45-origin.fc2.com/k/a/i/kaigaianime/201311171858285b1.jpg",
"http://maken-ki-two.com/img/top/main.png",
"http://blog-imgs-36.fc2.com/n/o/t/noteanimation/mikakunin0921.jpg",
"http://blog-imgs-38.fc2.com/f/r/e/freeanimetv/201310031932418f1.jpg",
"http://www.tv-tokyo.co.jp/anime/naruto/mainimg.gif",
"http://www.takeshobo.co.jp/sp/tv_oneechan/img/top_img001.jpg",
"http://websunday.net/ginsaji/news/anime2nd.gif",
"http://www.dreamcreation.co.jp/stpl/img/top/main_img.png",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/utayomi20131109_01.jpg?",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/shatyhjdtyjre.jpg",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/51bG9T97jGL._SL500_AA300_.jpg",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/70d95bad32b72bc6a52293b061f9f49a4e9e9684.jpeg",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/logo.jpg",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/mainvisual.jpg",
"http://www.samumenco.com/special/img/01/visualThumb1.jpg",
"http://www.kill-la-kill.jp/special/img/04/07/kill-la-kill_wp7_pc_1280x800.jpg",
"http://golden-time.jp/images/key_visual.png",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/130726nourin.jpg",
"http://wakeupgirls.jp/img/top/bg.jpg",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/hdtyjtdk.jpg",
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/kv.jpg",
"http://animeinfo.up.seesaa.net/media/img_20131127T133230906.jpg",
"http://livedoor.blogimg.jp/jojiani/imgs/2/f/2fcebf6e.jpg",
"http://upload.wikimedia.org/wikipedia/en/a/a4/Happiness_Poster.jpg",
"http://livedoor.4.blogimg.jp/nwknews/imgs/3/6/36cf163a.jpg",
"http://blog-imgs-52-origin.fc2.com/s/u/p/supersolenoid/robot-girls-z-flexible-rubber-mat.jpg",
"http://www.starchild.co.jp/special/seitokai2/images/maining_index.png",
"http://img.yaplog.jp/img/18/pc/a/n/i/aniwota_blog/0/811.jpg" ,
"http://www.famitsu.com/images/000/030/589/514a9a91313c9.jpg",
"http://blog-imgs-42.fc2.com/f/r/e/freeanimedougadesu/conan111.jpg"

];

sake_img = [
"http://asahishuzo.ne.jp/image/top_lang_main_img.jpg",
"http://www.nomooo.jp/blog/wp-content/uploads/2013/08/aaaa.jpg",
"http://www.miyamizu.jp/site_data/cabinet/00002404_photo1.jpg",
"http://image.rakuten.co.jp/e-wine/cabinet/category/kuheiji.jpg",
"http://www.sake-portal.org/wp-content/uploads/2013/06/S32201.jpg",
"http://image.rakuten.co.jp/mituwa/cabinet/00242240/01354529/img57849746.jpg",
"http://blog-imgs-24-origin.fc2.com/y/o/s/yoshiyukita/20090619144610cce.jpg",
"http://image.www.rakuten.co.jp/sakenogo/img10182914382.jpeg",
"http://www.sakenomise.com/uploads/鳳凰美田新純吟.jpg",
"http://item.shopping.c.yimg.jp/i/j/kuranosuke_hk-003",
"http://livedoor.blogimg.jp/hamayama01/imgs/a/1/a10a223f.jpg",
"http://pds.exblog.jp/pds/1/200707/14/81/a0066081_70882.jpg",
"http://image.rakuten.co.jp/syuraku-shop/cabinet/item01/52558_02.jpg",
"http://image.www.rakuten.co.jp/sakenogo/img10182474112.jpeg",
"http://stat.ameba.jp/user_images/25/b2/10110008232.jpg",
"http://paz-work.com/item/kikuhime_01.jpg",
"http://jizake-daisuki.com/img/sinkametaruzake720ml.gif",
"https://secure.daishichi.com/resources/upload/products/201%20.jpg",
"http://www.asabiraki-net.jp/osake/goods/asabiraki/img/img01.jpg",
"http://livedoor.blogimg.jp/unagikubota/imgs/d/e/deb0c356.jpg",
"http://www.jizake-asai.jp/bontjd0210image11.jpg",
"http://www.urano-saketen.com/data/urano/product/59fb11f13c.jpg",
"http://www.urano-saketen.com/data/urano/product/3a2a369c7b.jpg",
"http://pds.exblog.jp/pds/1/200511/18/81/a0066081_1729636.jpg",
"http://livedoor.blogimg.jp/nihonshujp/imgs/2/c/2cf5798f.jpg",
"http://item.shopping.c.yimg.jp/i/j/echigo_105906",
"http://pds.exblog.jp/pds/1/201307/27/87/b0147087_1205550.jpg",
"http://www.yoppawriter.com/_src/sc714/E6BEA4E381AEE4BA95.jpg",
"http://img.47news.jp/feature/sake/sake_photo/184865_photo.jpg",
"http://item.shopping.c.yimg.jp/i/j/jizakeyasan_56-4",
"http://www.kigawaya.com/sake/assets_c/2010/03/hatsu-daigin-thumb-250xauto-1917.jpg",
"http://www.sasas.jp/goods_image/A3827_I2.jpg",
"http://www.koizumi-sake.co.jp/catalogue/imgs-labels/L35202.jpg",
"http://imanaka-sakeshop.com/site_data/cabinet/00001392_photo1.jpg",
"http://imanaka-sakeshop.com/site_data/cabinet/img59051117.jpg",
"http://www.koizumi-sake.co.jp/catalogue/imgs-labels/L36205.jpg",
"http://www.kigawaya.com/img/jyouki/jyouki-title.jpg",
"http://blog-imgs-30-origin.fc2.com/j/o/z/jozen1/l2838.jpg",
"http://www.imadeya.co.jp/var/public/product/image1/resized/201211301521565ccdfdee6322da0cf7.jpg",
"http://www.yukinobousha.jp/products/images/img2302-1.jpg",
"http://www.tukinoakari.com/media/1/20120602-tetori.jpg",
"http://livedoor.blogimg.jp/yopparai_mar/imgs/8/3/83ac5c09.JPG",
"http://img01.eshizuoka.jp/usr/comeyasu/2012_0615日本酒0011.JPG",
"http://www.miyamizu.jp/site_data/cabinet/00002893_photo1.jpg",
"http://item.shopping.c.yimg.jp/i/j/taiseiya_et-001",
"http://www.yamagata-sake.com/upload/save_image/1110-1/big/50.jpg",
"http://pds.exblog.jp/pds/1/200601/13/81/a0066081_583778.jpg",
"http://farm4.staticflickr.com/3365/3424040365_6f0fc3a8c1_o.jpg",
"http://www.koizumi-sake.co.jp/catalogue/imgs-labels/L41225.jpg",
"http://list.tabiiro.jp/image/304109/otoriyose/main/img1.jpg",
"http://farm3.staticflickr.com/2851/11186670774_321916ff6c_o.jpg",
"http://www.aionline-japan.com/upload/save_image/drink_002-01_spa-btn-6.jpg",
"http://www.kakurei.co.jp/timg/pic-main_03.jpg",
"http://www.ast39.com/data/ast39/product/shindoshuzo/shind_kouka18a.jpg",
"http://imanaka-sakeshop.com/site_data/cabinet/00000941_photo1.jpg",
"http://www.uonumanosato.jp/%40img/sake-hd-KSDN.jpg",
"http://www.ichinokura.co.jp/_src/sc628/honjozo_03.png",
"http://www.imadeya.co.jp/var/public/product/image1/resized/201111171624536f1d3dee6322d343ba.jpg",
"http://www.e-inamura.co.jp/images/material/item_XXL/kourotokujyunn.jpg",
"http://www.lovefood.jp/fukushima/images/archive/sake1/main.png",
"http://img.47news.jp/feature/sake/sake_photo/213368_photo.jpg",
"http://26inch.net/01keyboard/wp-content/uploads/2011/03/IMG_0170.jpg",
"http://syudouraku-kobayasi.cocolog-nifty.com/photos/uncategorized/2012/02/25/dsc09025.jpg",
"http://cdn-ak.f.st-hatena.com/images/fotolife/y/yotuparai/20090502/20090502172457.jpg",
"http://junko-liquor.com/item/images/日本酒_38誠鏡純米幻_1.jpg",
"http://www.kunii-saketen.co.jp/shop/home/1322/item_img/590233_detailImage1.jpg",
"http://eemise.com/img885.jpg",
"http://www.yoppawriter.com/_src/sc1196/E382BFE382A4E38388E383AB-2.jpg",
"http://www.jizake.com/img/products/Sake7005_1800_1.jpg",
"http://www.kanedai.com/co4/files/ssc_product/image/863_0_300.jpg",
"http://www.sasas.jp/goods_image/A4100_I1.jpg",
"http://loaderfukuoka.com/wp-content/uploads/2012/12/29956b5990f0cebd23e8b10fdca56a1b.jpg",
"http://jizake-daisuki.com/img/tatenokawaseiryuu1800ml.jpg",
"http://www.rihaku.co.jp/users/editor/Image/yurai/rihaku.jpg",
"http://www.imadeya.co.jp/var/public/product/image1/resized/201302191546315fe81dee6322ddee55.jpg",
"http://www.ast39.com/data/ast39/product/takahashishuzo/thiz_kraoma_h18a.jpg",
"http://www.imadeya.co.jp/var/public/product/image1/resized/20110408134858c3de4dee6322daa22a.jpg",
"http://imanaka-sakeshop.com/site_data/cabinet/00000387_photo1.jpg"

];

color_arr = ["#2ecc71", "#3498db", "#f1c40f"];

function insertHTML(size, i) {
	var random_color = Math.ceil( Math.random() * 3 ) - 1;
	// by color
	// var e = '<div class="box size' + size +  size + '" style="background-color:' + color_arr[random_color] + ';width:300px;-moz-background-size:cover;background-size:cover;"></div>';
	// by image of anime
	// var e = '<div class="box size' + size +  size + '" style="background-image:url(' + array_img[i] + ');width:300px;-moz-background-size:cover;background-size:cover;"></div>';
	// by image of sake
	var e = '<div class="box size' + size +  size + '" style="background-image:url(' + sake_img[i] + ');width:300px;-moz-background-size:cover;background-size:cover;"></div>';
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
