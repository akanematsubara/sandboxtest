// /**
//  * const.letなどの変数宣言
//  */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// // ★オブジェクトや配列は大体constで宣言する★
// const val4 = {
//   name: "あかね",
//   age: 25,
// };
// console.log(val4);
// val4.name = "きのこ";
// val4.address = "Tokyo";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "アカネ";
// const age = 25;
// // 「私の名前はアカネです。年齢は25歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。"
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// // 従来の関数
// function func1(str){
//   return str;
// }
// // 関数を変数に入れて使うことも可能
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数で書く（引数が一つの時は引数のかっこを省略することが可能）
// const func2 = (str) => {
//   return str;
// }

// //　関数の波かっことreturnを省略することが可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2
};
console.log(func3(10,20));