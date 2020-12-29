console.log("Задание 1");
let user = {
    first_name: "Ислам",
    last_name: "Енилеев",
    number_of_the_group: "201-321",
}
let property="Список свойств: ";
let i=0;
for (key in user) {
    i++
}
let j=0;
for (key in user) {
    j++
    if (j!=i) {
        property+=key+", "
    }
    else {
        property+=key
    }
}
let message=user.first_name+" "+user.last_name+" поступил в Московский Политехнический Университет и учится в группе "+user.number_of_the_group;
console.log(message);
console.log(property)
console.log("Задание 2");
popArray=[1,2,3,4,5];
function Cutarr(cutArray) {
    length=cutArray.length;
    for(let i=0; i<length; i++){
        let cutStr=cutArray.pop();
        if(cutArray.length>0){
            cutStr+=" осталось ["+cutArray+']';
        }
        console.log(cutStr);
    }
}
Cutarr(popArray);
console.log("Задание 3");
function polindrom(word) {
    let arr=[];
    arr=word.split('');
    let arr2="";
    for (let i=arr.length-1; i>=0; i--) {
        arr2=arr2+arr[i];
    }
    if (arr2==word) {
        console.log(`Слово "${word}" - полиндром`);
    }
    else {
        console.log(`Слово "${word}" - не полиндром`);
    }
}
polindrom(prompt("Введите слово для проверки: является ли оно полиндромом?"))
console.log("Задание 4");
function scalarMultiplication(chislo,matr) {
    for (let i=0;i<matr.length;i++) {
        let arr=[];
        let str="";
        for (let j=0;j<matr[i].length;j++) {
            matr[i][j]=matr[i][j]*chislo;
            arr.push(matr[i][j])
            str+=matr[i][j];
            for (let m=0;m<6-String(matr[i][j]).length;m++) {
                str+=" "
            }
        }
        console.log(str)
    }
}
scalarMultiplication(3, [[1,2,3],[4,5,6],[7,8,9]])