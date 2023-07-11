// Гамбургер на ES-6
// Переписать задачу из 24 ДЗ на синтаксисе ES-2015(ES-6), используя классы
class Hamburger {

    static sizeSmall = {
        price: 50,
        calorie: 20
    };

    static sizeLarge = {
        price: 100,
        calorie: 40
    };

    static stuffingCheese = {
        price: 10,
        calorie: 20
    };

    static stuffingSalad = {
        price: 20,
        calorie: 5
    };

    static staffingPotatos = {
        price: 15,
        calorie: 10
    };

    static toppingMayo = {
        price: 20,
        calorie: 5
    };

    static toppingSauce = {
        price: 15,
        calorie: 0
    };

    constructor(size, stuffing) {
        this.price = size.price + stuffing.price
        this.calorie = size.calorie + stuffing.calorie
        this.toppings = [];
    }

    addTopping = function (topping) {
        this.toppings.push(topping);
    }

    calculateCalories = function () {
        return this.toppings.reduce((sum, item) => {
            return sum + item.calorie
        }, this.calorie);
    }

    calculatePrice = function () {
        return this.toppings.reduce((sum, item) => {
            return sum + item.price
        }, this.price);
    }
};

// // маленький гамбургер с начинкой из сыра
let hamburger = new Hamburger(Hamburger.sizeSmall, Hamburger.stuffingCheese);
// // добавка из майонеза
hamburger.addTopping(Hamburger.toppingMayo);
// // // спросим сколько там калорий
console.log(`Calories: ${hamburger.calculateCalories()}`);
// // // сколько стоит
console.log(`Price: ${hamburger.calculatePrice()}`);
// // // я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.toppingSauce);
// // // А сколько теперь стоит?
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);
