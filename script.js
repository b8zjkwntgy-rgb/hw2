
let age = +prompt('Введите возраст')
if (age < 18) {
    alert('Вам доступ запрещён')
}else if(age < 61){
    alert('Добро пожаловать')
}else if(age > 60){
    alert('Вы слишком взрослый для этого сайта')
}else alert('Введите число')
