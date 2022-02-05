<?php
//参考ドキュメント
//https://qiita.com/fantm21/items/603cbabf2e78cb08133e
//https://miyachi-web.com/google-books-apis/

$url = "volumes_1.json";
$json = file_get_contents($url);
$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$arr = json_decode($json,true);


//以下課題extra1部分
$extra1_1_title = $arr["items"][2]["volumeInfo"]["title"];
$extra1_1_authors = $arr["items"][2]["volumeInfo"]["authors"][0];
$extra1_1_pagecount = $arr["items"][2]["volumeInfo"]["pageCount"];

$extra1_2_title = $arr["items"][9]["volumeInfo"]["title"];
$extra1_2_published = $arr["items"][9]["volumeInfo"]["publishedDate"];
$extra1_2_previewLink = $arr["items"][9]["volumeInfo"]["previewLink"];

echo "extra1-1<br>";
echo "タイトル： $extra1_1_title <br>";
echo "著者： $extra1_1_authors <br>";
echo "ページ数： $extra1_1_pagecount <br>";
echo "<br>extra1-2<br>";
echo "タイトル： $extra1_2_title <br>";
echo "出版日： $extra1_2_published <br>";
echo "プレビュ－リンク： $extra1_2_previewLink <br>";
echo "<br>extra1-3<br>";
echo "<a href='volumes_2.json'>volumes_2.json</a><br>";
echo "<a href='https://www.googleapis.com/books/v1/volumes?q=title:%E6%B1%9F%E6%88%B8%E5%B7%9D%E4%B9%B1%E6%AD%A9%E4%BD%9C%E5%93%81&maxResults=1'>https://www.googleapis.com/books/v1/volumes?q=title:%E6%B1%9F%E6%88%B8%E5%B7%9D%E4%B9%B1%E6%AD%A9%E4%BD%9C%E5%93%81&maxResults=1</a><br>";

?>