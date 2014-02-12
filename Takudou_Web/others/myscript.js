//ダイアログでの文字の表示
alert("Hello World")

//変数宣言はvar
var message;
message = "Hello World!!!!!!!!";
//文字列の連結に「+」が使える
alert(message + "aaa");

var d1 = -5.5; //数値
/*undefinedやnullを変数に代入することも可能。
alertで表示すると、そのままundefined、nullと表示される*/
var d3 = undefined; //定義されていない
var d4 = null; //何もない
alert(d4);

var score = 60;
if(score > 70){
	alert("合格！")
}

var i = 0;
//ブラウザのjsコンソールに表示する
console.log(i);

//関数はfunctionで宣言
function sum(a,b){
	return (a+b);
}

var result = sum(50,33);
alert(result);

//配列
//大括弧で囲むことに注意
var sales = [100,200,150];

//連想配列
//それぞれの値にラベルをつける
var sales = {'year2000':100, 'year2001':200, 'year2002':150};

console.log(sales['year2000']);
