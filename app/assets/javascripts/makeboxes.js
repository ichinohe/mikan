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
"http://www.nisekoi.jp/img/chara/img_chara00.png",	// ニセコイ
"http://www.sekaiseifuku-zzz.com/img/bnr/bnr_180x180.gif", 	// 世界征服～謀略のズヴィズダー～
"http://www.ntv.co.jp/tesabu/images/bg_main_pc_new.jpg", 	// てさぐれ！部活もの あんこーる
"http://imocyo-anime.com/common/images/img_character_s.png", 	// 最近、妹のようすがちょっとおかしいんだが。
"http://livedoor.blogimg.jp/buhihisokuhou/imgs/8/2/8299d4f7-s.jpg", 	// 黒子のバスケ
"http://cdnet.prod-kdstore.sdgtl.net/publish/items/1/0/0/2/9/8/8/9/images/jpn/600x450/image.jpg", 	// はじめの一歩 Rising
"http://xn--cck5dwcr34p969aa.up.n.seesaa.net/xn--cck5dwcr34p969aa/image/E382ADE383B3E382B0E38380E383A020KINGDOM20E7ACAC2E382B7E383AAE383BCE382BA.gif%3Fd%3Da1", 	// キングダム2
"http://diaace.com/images/keyvisual_02.jpg", 	// ダイヤのA
"http://www.animate.tv/news/visual/2013/1362568754_1_1.jpg", 	// ぢべたぐらし あひるの生活
"http://asahi.co.jp/dokidoki_precure/img/top/noscript.jpg",	// ドキドキ！プリキュア
"http://static.repotama.com/wp-content/uploads/2012/09/db880ab927b666b042ec5476a4430d97.jpg",	// 遊☆戯☆王ZEXALⅡ
"http://www.tv-asahi.co.jp/seiya-koga/uploads/2013/07/main.png",	// 聖闘士星矢Ω
"http://pic.prcm.jp/gazo/Kg/ajx0M6.jpeg", 	// トリコ
"http://youtubeyoutubetube.up.seesaa.net/image/onepiece2.jpg", 	// ワンピース ONEPIECE
"http://livedoor.blogimg.jp/animesong_gamesong/imgs/0/b/0bc86b3a.jpg",	// カードファイト!!ヴァンガード3
"http://www.toei.co.jp/tv/gaimu/main_image/__icsFiles/afieldfile/2013/12/20/550_309-2.jpg",		// 仮面ライダー鎧武
"http://www.toei.co.jp/tv/kyouryu/main_image/__icsFiles/afieldfile/2013/02/21/HP01.jpg",	// 獣電戦隊キョウリュウジャー
"http://www.lisani.jp/admin/wp-content/uploads/2013/09/130903_lisani_fai.jpg", 		// ファイ・ブレイン神のパズル3
"http://www.project-magi.com/img/top/image/01.jpg",	// マギ2期
"http://livedoor.blogimg.jp/peperon999/imgs/0/0/009649d1.jpg",	// 絶滅危愚少女
"http://livedoor.blogimg.jp/nmaouytor/imgs/d/2/d26b939b.png",	// ノブナガン
"http://www.famitsu.com/images/000/044/070/529830bd25ce2.jpg",		// みんな集まれ！ファルコム学園
"http://articleimage.nicoblomaga.jp/image/197/2013/8/e/8e664193d3b680a83ea625ea9265250625e3ea2b1384142779.jpg", 		// ウィッチクラフトワークス
"http://buddy-complex.jp/img/top/keyv01.jpg",	// バディ・コンプレックス
"http://tower.jp/article/news/2013/09/04/~/media/Images/Article/News/2013/Other/Anime/Space_Dandy/%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%83%80%E3%83%B3%E3%83%87%E3%82%A3_%E3%83%86%E3%82%A3%E3%82%B6%E3%83%BC%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB.jpg%3Fh%3D354%26w%3D250",	//スペース☆ダンディ
"http://cdn2.natalie.mu/media/comic/1309/extra/news_large_noragami_anime.jpg", 	// ノラガミ
"http://www.animate.tv/news/visual/2013/1385975944_1_1_8baadb9bcb5d94c25d4209dd8498a209_thumb.jpg",		// ノブナガ・ザ・フール
"http://www.t-sekikun.jp/img/top/new_alt.jpg", 	// となりの関くん
"http://www.at-x.com/images/program/e16b999b631f77dcb52bb49efb0526cd.jpg", 	// 咲-Saki- 全国編
"http://ecx.images-amazon.com/images/I/615jw-yXyiL._SL500_AA300_.jpg",		// おしりかじり虫2期
"http://news.surpara.com/wp-content/uploads/2013/07/135.jpg",	// アイカツ！
"http://livedoor.blogimg.jp/gundam_matome/imgs/3/c/3cb93aae.jpg", 		// ガンダムビルドファイターズ
"http://livedoor.blogimg.jp/garmaquve-gama/imgs/d/5/d52fe596.jpg", 		// とある飛空士への恋歌
"http://www.at-x.com/images/program/483458cbc3aeef64674110be31141ddd.jpg", 	// そにアニ
"http://www.mediafactory.co.jp/comic-alive/d-frag/special/wallpaper/df_wallpaper04_1024-768.jpg",		// ディーふらぐ！
"http://blog-imgs-55-origin.fc2.com/k/o/d/kodoanime01/araizu_title.jpg",	// 攻殻機動隊入門 あらいず
"http://jisin.jp/image%3Fmode%3Dshow_image%26cb_image_id%3D81807", 	// 地下すぎアイドルあかえちゃん
"http://maiani.info/wp-content/uploads/2013/12/2ec2dc6a7d54a5976b88d182bcf464a82.jpg", 	// 弱虫ペダル
"http://www.famitsu.com/images/000/017/870/4ffe517f25be5.jpg", 		// ちび☆デビ！
"http://ecx.images-amazon.com/images/I/61-rylf4t5L._SL500_AA300_.jpg", 		// うーさーのその日暮らし 覚醒編
"http://livedoor.blogimg.jp/anico_bin/imgs/2/0/20afabe3.jpg",		// ハマトラ
"http://articleimage.nicoblomaga.jp/image/28/2013/0/6/06327e97f6657d9a64681af36f653a802a1997d01383148977.jpg", 	// 東京レイヴンズ
"http://www.famitsu.com/images/000/030/298/5142b61b3e4e1.jpg",		// イナズマイレブンGO ギャラクシー
"http://www.gpara.com/files/contents/c_s1364918815_75.jpg",	// ガイストクラッシャー
"http://blog-imgs-26.fc2.com/a/t/o/atoniwota/HunterXHunter_DVDLabel00.jpg",	// HUNTER×HUNTER 2011
"http://blog-imgs-57.fc2.com/2/c/h/2chnokakera/kv_20131115121824.jpg", 	// 妖怪ウォッチ
"http://blog-imgs-46.fc2.com/a/n/i/animaga000/20140109013745550s.jpg",	// 中二病でも恋がしたい！戀
"http://inarikonkon.jp/ogp-img.jpg",	// いなり、こんこん、恋いろは。
"http://blog-imgs-45-origin.fc2.com/k/a/i/kaigaianime/201311171858285b1.jpg", 	// 凪のあすから
"http://maken-ki-two.com/img/top/main.png", 	// マケン姫っ！通
"http://blog-imgs-36.fc2.com/n/o/t/noteanimation/mikakunin0921.jpg", 	// 未確認で進行形
"http://blog-imgs-38.fc2.com/f/r/e/freeanimetv/201310031932418f1.jpg", 		// ポケットモンスターＸＹ
"http://www.tv-tokyo.co.jp/anime/naruto/mainimg.gif", 	// NARUTO ナルト疾風伝
"http://www.takeshobo.co.jp/sp/tv_oneechan/img/top_img001.jpg", 	// お姉ちゃんが来た
"http://websunday.net/ginsaji/news/anime2nd.gif", 	// 銀の匙 Silver Spoon 2期
"http://www.dreamcreation.co.jp/stpl/img/top/main_img.png",	// ストレンジ・プラス
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/utayomi20131109_01.jpg?", 	// GO!GO!575
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/shatyhjdtyjre.jpg", 	// pupa
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/51bG9T97jGL._SL500_AA300_.jpg",	// 魔法戦争
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/70d95bad32b72bc6a52293b061f9f49a4e9e9684.jpeg",	// 鬼灯の冷徹
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/logo.jpg",	// 桜Trick
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/mainvisual.jpg",	// Z/X IGNITION
"http://www.samumenco.com/special/img/01/visualThumb1.jpg", 	// サムライフラメンコ
"http://www.kill-la-kill.jp/special/img/04/07/kill-la-kill_wp7_pc_1280x800.jpg", 	// キルラキル
"http://golden-time.jp/images/key_visual.png",	// ゴールデンタイム
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/130726nourin.jpg",	// のうりん
"http://wakeupgirls.jp/img/top/bg.jpg", 	// Wake Up Girls!
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/hdtyjtdk.jpg", 		// フューチャーカード　バディファイト
"http://gorakutenngokutorenndonyu-su.com/wp-content/uploads/2013/11/kv.jpg", 		// プピポー！
"http://animeinfo.up.seesaa.net/media/img_20131127T133230906.jpg", 	// ストライク・ザ・ブラッド

// "http://img.guideme.jp/i/EMQaYnX5RQcKW/tf5RRLRCabREkIp6uW%2BfAMG/ySrfSg42Zm01YtVKsyPI5JsMbIBk7PfWQf5i6czDSmMQIVvQ%3D%3D.jpg",
// "http://ecx.images-amazon.com/images/I/510D4R-b-jL._SL500_AA300_.jpg",
// "http://ecx.images-amazon.com/images/I/51KofAQvrsL._SL500_AA300_.jpg",
// "http://pds.exblog.jp/pds/1/201312/20/21/d0237121_937551.jpg",
// "http://tower.jp/article/news/2013/09/04/~/media/Images/Article/News/2013/Other/Anime/Space_Dandy/スペースダンディ_ティザービジュアル.jpg%3Fh%3D354%26w%3D250",
// "http://kc.kodansha.co.jp/kc_up/image/MAT/519/i_20120327125612.jpg",
// "http://www.nisekoi.jp/og.jpg",
// "http://honnokimochi.c.blog.so-net.ne.jp/_images/blog/_435/honnokimochi/E381A8E38182E3828BE9A39BE7A9BAE5A3ABE381B8E381AEE6818BE6AD8C01.JPG%3Fc%3Da0",
// "http://cdn.moae.jp/download/0001/13/8e965583aac49188fc5488bb48272545c90f65f9.jpeg",
// "http://www.at-x.com/images/program/483458cbc3aeef64674110be31141ddd.jpg",
// "http://www.starchild.co.jp/special/seitokai2/images/maining_index.png",
// "http://cdn2.natalie.mu/media/comic/1309/extra/news_large_noragami_anime.jpg",
// "http://buddy-complex.jp/img/top/keyv01.jpg",
// "http://dengekionline.com/elem/000/000/749/749767/ntf_01_cs1w1_905x1280.jpg",
// "http://ecx.images-amazon.com/images/I/51SHzh%2BTtTL._SL500_AA300_.jpg",
// "http://www.mediafactory.co.jp/files/d000172/mahousensou2_pin.jpg",
// "http://corp.toei-anim.co.jp/press/RGZ_000.jpg",
// "http://comic-earthstar.jp/author/images/detail_15-7.jpg",
// "http://www.netabare-manga.net/wp-content/uploads/2014/01/ginnosaji.jpg",
// "http://cdn2.natalie.mu/media/comic/1309/extra/news_large_mikakunin_key.jpg",
// "http://livedoor.blogimg.jp/yttgq902/imgs/1/0/102e1767.jpg",
// "http://www.wallpapers-door.com/wp-content/uploads/2013/12/pupipo.jpg",
// "http://hlo.tohotheater.jp/images_net/movie/010709/SAKUHIN010709_1.jpg",
// "http://livedoor.blogimg.jp/peperon999/imgs/b/6/b6cffcbc.jpg",
// "http://i1.ytimg.com/vi/vWNY76Ajuo8/maxresdefault.jpg",
// "http://image.excite.co.jp/feed/expub/Excite_anime/2013/Excite_anime_ABg20131121124421/Excite_anime_ABg20131121124421_1.jpg",
// "http://ecx.images-amazon.com/images/I/51A0DCXATNL._SL500_AA300_.jpg",
// "https://pbs.twimg.com/profile_images/422284256828600320/kVkcCGbG.jpeg",
// "http://www.famitsu.com/images/000/044/070/529830bd25ce2.jpg",
// "http://livedoor.blogimg.jp/tanofumi1982/imgs/7/9/7980e2b3.jpg",
// "http://www.yomiuriland.com/show/assets_c/2013/09/鎧衣675×470-thumb-675xauto-1777.jpg",
// "http://daioh.dengeki.com/wp-content/uploads/2013/09/20130927d06.jpg",
// "http://livedoor.4.blogimg.jp/hatima/imgs/3/f/3f915b2b.jpg",
// "http://www.p-tina.net/news/wp-content/uploads/2012/02/星矢Ω第一弾スチール_トリミング済.jpg",
// "http://onepiece-mania.blog.so-net.ne.jp/_images/blog/_7e5/onepiece-mania/onepiece.jpg",
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
	// bubble map definition
	var large_num = 3;
	var middle_num = 20;
	var small_num = 20;
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
