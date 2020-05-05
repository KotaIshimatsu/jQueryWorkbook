$(function() {
  // 問1.id名『q01』のテキストカラーを赤に変更せよ
  $('#q01').css('color', 'red');

  // 問2.id名『q02』のテキストカラーを青・背景色を黄色に変更せよ
  $('#q02').css({'color':'blue', 'background':'yellow'});

  // 問3.id名『q03』の空の段落にテキスト「エレン」を追加せよ
  $('#q03').text("エレン");

  // 問4.id名『q04』「エレン」のテキストを「駆逐してやるッ!!!」に書き換えよ
  $('#q04').text("駆逐してやるッ!!!");

  // 問5.id名『q05』「ときどきweb」の内容を<a href="#">リンクタグを含めた「ときどきweb」にhtml置換せよ
  $('#q05').html('<a href="http://tokidoki-web.com/">ときどきweb</a>');

  // 問6.ID名「q06」のul要素にclass名「aaa」を追加せよ
  $('#q06').addClass('aaa');

  // 問7.ID名「q07」のul要素内のli要素だけを削除せよ
  $('#q07 li').remove();

  // 問8.class名「button」のボタンをクリックしたら『クリックしますた』のアラート表示
  $('.button').click(function() {
    alert('『クリックしますた』');
  });

  // 問9.問2で指定したid名「q02」の装飾プロパティを取得して変数q02に代入し、文字の色の値（カラーコード）をid名「#q09」のp要素にテキスト出力せよ
  var q02 = $('#q02').css('color');
  $('#q09').text(q02);

  // 問10.既にclass名「aaa」が付いたid名「#q10」のp要素をクリックしたらclass名を「aaa」→「bbb」に変更せよ
  $('#q10').click(function() {
    $(this).toggleClass('bbb');
  });

  // 問11.問10のid名「#q10」のp要素テキストの先頭に「超平和バスターズ、」を追加せよ（※「めんま、」は書き換えず残したままで）
  $('#q10').prepend('超平和バスターズ、');

  // 問12.問10のid名「#q10」のp要素テキストの末尾に「ゆきあつ、つるこ、あなる、ぽっぽ」を追加せよ（※「超平和バスターズ、」「めんま、」は書き換えず残したままで）
  $('#q10').append('ゆきあつ、つるこ、あなる、ぽっぽ');

  // 問13.ul要素のliタグの前にliタグで『飛べない』を追加せよ
  $('#q13 li').before('<li>飛べない</li>');

  // 問14.問13のliタグの最後にliタグで『ただの豚』を追加せよ
  $('#q13 li').eq(-1).after('<li>ただの豚</li>');

  // 問15.pタグ「あああ」をID名q15のdiv要素の最初に追加せよ
  $('<p>あああ</p>').prependTo('#q15');

  // 問16.pタグ「ううう」をID名q15のdiv要素の最後に追加せよ
  $('<p>ううう</p>').appendTo('#q15');

  // 問17.pタグ「ききき」をid名「q17」のdiv要素の前に差し込め
  $('<p>ききき</p>').insertBefore('#q17');

  // 問18.pタグ「くくく」をid名「q17」のdiv要素の後に差し込め
  $('<p>くくく</p>').insertAfter('#q17');

  // 問19.id名q19の要素をclass名「ccc」のdiv要素で囲みなさい
  $('#q19').wrap('<div class="ccc"></div>');

  // 問20.id名「q20」要素の親要素class名「ccc」を取り除きなさい※remove()関数やhide()関数は使用しない事
  $('#q20').unwrap('.ccc');

  // 問21.class名「q21」が付く要素をclass名「ddd」のdiv要素の中にすべて囲みなさい
  $('.q21').wrapAll('<div class="ddd"></div>');

  // 問22.class名「q22」が付くすべての要素内テキストをclass名「ddd」のdiv要素で囲みなさい
  $('.q22').wrapInner('<div class="ddd"></div>');

  // 問23.class名「q23」が付くすべての要素すべてを「xxx」のp要素に置き換えなさい
  $('.q23').replaceWith('<p>xxx</p>');

  // 問24.class名「q24」要素のclass名を「q24_a」に書き換えなさい
  $('.q24').attr('class','q24_a');

  // 問25.class名「q25」が付いている要素のaタグのhref属性を削除せよ
  $('.q25 a').removeAttr('href');

  // 問26.class名「q26」が付いている要素のaタグに別窓表示の属性を追加せよ
  $('.q26 a').attr('target","_blank');

  // 問27.class名「q27_a」要素をclass名「q27_b」に切り替えよ
  $('.q27_a').toggleClass('q27_b');

  // 問28.フォームに入力値を「入力してください」に書き換えなさい
  $('form input').val('入力してください');

  // 問29.id名「q29」の要素をブラウザ上5430px、左800px値の位置で表示せよ
  $('#q29').offset({ top: 5430, left: 800});

  // 問30.p要素をクリックしたら直下のulの子要素を全て空にせよ ※空のliタグも残さないこと
  $('.button').click(function() {
    $('#q30').empty();
  });

});
