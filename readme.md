# growth-record  

## 概要
プログラミングひよっこの初心者によるプログラミング勉強過程を載せていきます      

## 記録  
### [2024年]  
05.08 　vscode入れる＆HTMLのコードを書き始める  
  
05.10 　FlaskをWindowsのコマンドで入れようとしたところ、エラー  
→05.13　WinsowsのコマンドプロンプトではAnacondaのパスが通っていないため、エラーが発生していた。Anaconda Prompt で行うと入れられた！  

05.17 　フォームの送信機能をつけることができた

05.29　 HTMLの基本タグを見返し中…  

05.31　 簡易メッセージボードを作る！  
06.01　 ログインページを作成  
06.02　 メッセージページを作成  
06.03-06.05　 エラーを対処 & CSSでレイアウトを色々変えてみる  
→elseの位置は大丈夫?  
06.05　 メッセージボード完成!  

06.06　 Bootstrap の勉強開始  
  
06.07　 レイアウトの基礎<見出し、テキストスタイル、グリッドシステム>を学ぶ  

06.09　 レイアウトの基礎<ボタン(チェックボックスとラジオボタン)の表示>を学ぶ  

06.11　 レイアウトの基礎<アラート表示>を学ぶ  

06.13-06.19　 モーダルについて学ぶ
→メッセージボックスに入力したメッセージが出力されないエラーが発生!! 
<hr>  
  
この部分は、  
function doAction(){  
:  
}  
によって機能している  
→この箇所のどこかが機能していない  
console.log();  
を使って確認!  
console.log();　を使うと…処理が的確に行われているのかを確認することが出来る!  
※この処理結果は開発者ツールの「コンソール」タブから確認可能  
  
今回の場合は…   
  
function doAction(){  
consle.log("あ");  
var val = $('#txt').val();  
console.log(val);  
$('「'+val+'」と入力しました。');  
console.log(msg);  
}  
  
で確認してみる  
  
実際に「こんにちは」と入力したメッセージを出力させようとすると、  
コンソール画面には「あ」「こんにちは」は表示されるものの、console.log(msg);を入れた箇所にはエラーのようなものが表示された！  

→msgがこのファイル内に定められていなかったことが判明!  
\<p id="msg">文字\</p>  
を{% block content %}に入れることで解決した!  
  
<hr>  

<br></br>
06.22　 カードでコンテンツをまとめる方法、ジャンボトロンについて学ぶ   
画像は挿入に不明点  
呼び出し元のファイルから見て、同じフォルダーに画像が保存されている場合  
→\<img src=image.jpg>  
画像は挿入されず。  
   
一方で、別のフォルダー(呼び出し元と同じ階層にあるフォルダー)staticから、image.jpegを呼び出すために  
→\<img src="static/image.jpg">  
とすると、画像は挿入された  

何故??  Flaskだと、画像は呼び出し元のファイルとは別のファイルに入れて実行するという決まり？  
  
⇒flaskでは、指定したディレクトリからしか静的なファイルは引き出せない  
指定したディレクトリのデフォルトの設定が/staticとなっている

<br><br>  
06.23　  コラプスを使ってみる、タブパネルを作ってみる  

06.26-07.08　 06.05で作ったメッセージボードをbootstrapに対応させる  
→pyhtonのコード(app.py)の修正を忘れないように!!  
※pythonのコードは06.05に作った際のコードを参考にする  

07.10-07.17　 [企画]　ワイヤーフレームを作成してみる！
ワイヤーフレームを作ってみて...いくつかの情報を置く位置に悩んだ。ページを飛ぶ回数は少ない方が見てもらえる率は高まるため、どのような構造にすればより多くの人に閲覧してもらえるのかという点、そもそもそのサイトに興味をもらってもらうためにはどんな情報を入れる必要があるかを考える点が難しいと感じた。  
ワイヤーフレームについて詳しく調べてみると、同じページでも閲覧者がサイト内のどの部分でそのサイトを離れるのか、場所や情報の種類ごとに分かれることが判明。重要度の高い情報をただ上にあげるのではなく、サイトの中身の流れや閲覧者がどの程度意識して見るのかを確認しながらワイヤーフレームを作ることが大切。  

07.29-　GitHubやVScodeの連携に苦戦  
ブランチ、クローン、プル、プッシュ、マージ...等々の基本ワードの意味と使い方を理解する必要あり。GitHub、VScodeそれぞれの使い方を学ぶ必要あり。下記に意味や使い方を記載しておく予定。  
  
08.01　[企画]ナビゲーションバーを作成してみる  
ナビゲーションバーを作る際に、言語表示の切り替えタブの形態、中身の仕組みがいくつかあることを知る。  
多言語のサイトを作成する際の方法  
1.言語ごとにフォルダーを分ける　画像やcssファイルは基本的に元となるファイル(index.html)で使う物と同じものを使用。  
2.JavaScriptで表示を切り替える　セレクトボックスで言語を切り替えたいとき、<changeイベント>を実装し表示の切り替えを行う。  
3.サーバーサイドで表示を切り替える　ユーザーの言語選択を受け取り、選択に基づいて適切な言語ファイルをロードしてコンテンツを表示。2と違う点は、こちらはサーバーにリクエストを送り、再読み込みしている点。  
今回は方法1の言語ごとにフォルダーを分ける方法で言語表示切替えを行った。

08.03　[企画]大見出し等を作る  
・フォント種類の指定の仕方を学ぶ。  
ブラウザーで設定しているフォントで表示する方法もあれば、Webフォントを使用することもできる。今回はブラウザーで設定しているフォントで表示したが、もしWebフォントを使用する場合、Google Fonts を使うと良いかもしれない。  

08.04　[企画]どうすればテキストと画像を画面の半々で表示できるのだろうか...
→css display:flex  
横並びにする時は、display:flex を使うとよい  

8月  
実際にwebページを作ってみて、HTMLとCSSの基本的な書き方はなんとなく分かってきた  
→まず、ワイヤーフレームを作った後は具体的なデザイン案を何かツールを使って起こしてみると、作りたいことが明確化する  
作りたいことが明確化すると、「こんな機能作りたいけどどう作ればよいのか分からない」というコードを調べることも容易になる  

\<div>タグは何か具体的な機能を持つタグではないが、さまざまな用途で扱えると学ぶ  
・背景の柄や色を、\<div>タグで囲った部分で細かく指定できた  
・横並びにする要素を指定する時に、\<div>タグで分けることが必要  
など  

11.23　sqlalchemyでデータベース作成を行った...ここでデータベース作成に多くのエラーが発生したので、解決した方法を記載  
<hr>
まず、sqlalchemyをimportする際のコード  

from datetime import datetime  
import pytz  
from flask_sqlalchemy import SQLAlchemy  
from sqlalchemy.ext.declarative import declarative_base  
from sqlalchemy.orm import DeclarativeBase  
  
class Base(DeclarativeBase):  
  pass  
  
db = SQLAlchemy(app)  
  
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"  
db.init_app(app)  
  
class Post(db.Model):  
    id = db.Column(db.Integer, primary_key=True)  
    title = db.Column(db.String(80), nullable=False)  
    body = db.Column(db.String(300), nullable=False)  
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now(pytz.timezone('Asia/Tokyo')))  

このようなコードを書いてコマンドプロンプトでデータベースを作成する際にエラーが発生した。  

Flask-SQLAlchemyを使用しているコードで、アプリケーションコンテキストがない状態でcreate_all()や他のFlask-SQLAlchemy関連の機能を呼び出そうとしたため発生した、ということなので  

class Post(db.Model):
　　id = ...  
  　title = ...  
    body = ...
    created_at = ...
の後に  
with app.app_context():  
    db.create_all()  
を挿入  
  
<hr>    

## 分からなかった用語のまとめ欄  
### GitHub  
<基本的な知識>  
・作りたいアプリなどの概要や、そのアプリケーションにおいてどのようなコードや言語、環境を使用しているのかまとめたり公開したりできる  
・他者と共にアプリなど開発するためのコード共有  
#### brunch ブランチ
他者とコード共有をする際に作ることがある。  
元となるファイルやフォルダーを持っているデフォルトのブランチmainがある。一つのアプリを複数人で開発する際、機能ごとそれぞれの人が作るものを分けるとして、mainブランチで皆作業してしまうと統合する際に混乱が生じる可能性がある。それを防ぐために、ブランチといった各作業場所を用意することで一度に全て統合するのではなく、部分ごとに統合したり、mainブランチが新しく更新されたら更新した内容をこのブランチ反映したりする。  
例えば機能ごとにブランチ作る場合、その機能が作り終えたらブランチを新たに作り直すことを推奨。新たにブランチを作成する場合、「ブランチを切る」という表現を使うことがある。  

<どうやってブランチ作成するの?>  
1.GitHubからそのまま  
<>Code タブ→ 左上の方に、デフォルトのブランチ(初期設定ではmain)が書かれているボタン、その右側にBranchと書かれている部分がある。  
ブランチ作成をするためには、「デフォルトのブランチが書かれているボタン→View all branch」又は「Branchをクリック」を実行し、ブランチ画面へ行く。右上に緑のNew branchというボタンがあるため、そこをクリックするとブランチ作成ができる。元とするブランチはCreate a branchの画面内にあるSourceで選ぶことが可能。  
2.VScodeから  
この方法は、VScodeとGitHubの連携が(クローンまで)されている前提で進める。  
クローンすると、まずはデフォルトのブランチ(main)が表示されている状態である。左下の隅にデフォルトブランチの名前が書いてある箇所があるため、その部分をクリックすると、上部にブランチ作成のための選択画面が表示される。この画面から、GitHubで作成されているブランチを選択するか、新たにブランチを作成することが可能になる。  

#### pull プル  
デフォルトのブランチが更新された場合、それを自身のブランチに取り込む機能。
#### push プッシュ  
#### commit コミット  
#### marge マージ  
#### clone クローン  

  
