var array=['div','a','div','p','h2','a','li','h3','h2','div','p','a','div'];
var arr={}
for (var i=0;i<array.length;i++){
    var a = array[i];
    if (arr[a]) arr[a] += 1;
    else arr[a] = 1;
}
console.log(arr)
var arrMas=Object.values(arr);
var newArr=Object.keys(arr)
for (var i=0;i<arrMas.length;i++){
    newArr[i]=newArr[i]+":"+arrMas[i];
}
var arrObj={...newArr};
console.log(arrObj)
