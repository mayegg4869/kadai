//--------------------------------------------------------------------
// カウントダウン部分の処理
//--------------------------------------------------------------------
let countDown = function(due) {

    let nowDate = new Date(); //現在の日時を取得する

    //console.log(nowDate);

    let remainTime = due.getTime() - nowDate.getTime(); //ミリ秒で残り時間を出力する
    //↑new Date('2022/04/09 23:59:59').getTime'()

    //console.log(remainTime);

    //Math.floorで小数点以下を省く
    let secoundTime = Math.floor( remainTime / 1000 ) % 60; //秒に変換
    let minutesTime = Math.floor( remainTime / 1000 / 60) % 60; //分に変換
    let hourTime = Math.floor( remainTime / 1000 / 60 / 60) % 24; //時間に変換
    let dayTime = Math.floor( remainTime / 1000 / 60 / 60 / 24); //日数に変換

    //console.log(secoundTime);
    //console.log(minutesTime);
    //console.log(hourTime);
    //console.log(dayTime);

    let countTime = [dayTime,hourTime,minutesTime,secoundTime]; //配列に格納

    //console.log(countTime[0]);

    return countTime;
}

//開始終了時間のカウントダウン
let start_time = new Date('2022/04/22 00:00:00'); //日付のセット
let end_time = new Date('2022/04/30 23:59:59'); //日付のセット

//HTMLに出力する文
let count_txt = countDown(end_time);
let end_time_txt = count_txt[0] + '日' + count_txt[1] + '時間' + count_txt[2] + '分' + count_txt[3] + '秒';

//1秒ずつカウントさせる
let recalc = function(){
    let count_txt = countDown(end_time);
    //１桁になった場合、前に0をつける
    if(count_txt[0] <= 9){
        count_txt[0] = '0' + count_txt[0];
    }
    if(count_txt[1] <= 9){
        count_txt[1] = '0' + count_txt[1];
    }
    if(count_txt[2] <= 9){
        count_txt[2] = '0' + count_txt[2];
    }
    if(count_txt[3] <= 9){
        count_txt[3] = '0' + count_txt[3];
    }

    document.getElementById('time_d').textContent = count_txt[0]; //日
    document.getElementById('time_h').textContent = count_txt[1]; //時間
    document.getElementById('time_m').textContent = count_txt[2]; //分
    document.getElementById('time_s').textContent = count_txt[3]; //秒

    setTimeout(recalc, 1000); //1000ミリ秒ごとにrecalcを実行

    //一連の処理が終わっていなくても1000ミリ秒で更新
    //setInterval(recalc, 1000); //1000ミリ秒ごとにrecalcを実行
}
recalc();

// 現在時刻をnow_dateに代入
let now_date = new Date();

//--------------------------------------------------------------------
// カウントが始まったときの処理
//--------------------------------------------------------------------

//カウントが始まったら要素をオープン
let count_open = document.getElementById('wrap'); // 表示させるdivのIDの取得
if (start_time <= now_date) {
    count_open.classList.add('open');
}

// 煽り文のエリアをつくる
// 3日前になったら要素をオープン
let notice = document.getElementById('notice_area');
if(count_txt[0] <= 3){
    notice.classList.add('open');
    //以下中身の出し分け
    if(end_time <= now_date){
        // 発売中
        notice.innerHTML = '<img src="img/now_on_sale.png">'
    } else if (count_txt[0] <= 0) {
        // あと0日
        notice.innerHTML = '<img src="img/last_0.png">'
    } else if(count_txt[0] <= 1){
        // あと1日
        notice.innerHTML = '<img src="img/last_1.png">'
    } else if(count_txt[0] <= 2){
        // あと2日
        notice.innerHTML = '<img src="img/last_2.png">'
    } else if(count_txt[0] <= 3){
        // あと3日
        notice.innerHTML = '<img src="img/last_3.png">'
    }
}

//--------------------------------------------------------------------
// 終了時間が過ぎたあとの処理
//--------------------------------------------------------------------

//カウントダウンの部分を消す
let count_close = document.getElementById('conuntDown_timer'); // divのIDの取得
if(end_time <= now_date){
    count_close.classList.add('close');
}

//購入ボタンを表示
let contents = document.getElementById('contents_area'); // 表示させるdivのIDの取得
if (end_time <= now_date) {
    //今日の日付が指定の日時を超えていたら、取得したIDの場所にclassを追加する
    contents.classList.add('open');
    contents.innerHTML = '<a class="buy_button" href="">今すぐ購入</a>'
}

