function parseCount(inputValue){
    let parseResult = Number.parseFloat(inputValue);
    if (isNaN(parseResult)){
        throw new Error("Невалидное значение");
    }
    return parseResult;
}

function validateCount(inputValue){
    try {
        return parseCount(inputValue);
    } catch (error) {
        return error;
    }
}

class Triangle{
    constructor(a, b, c) {
        if(a + b < c || b + c < a || a + c < b){
            throw new Error("Треугольник с такими сторонами не существует");
        } 
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter(){
        return this.a + this.b + this.c;
    } 

    get area(){
        let p = (this.a + this.b + this.c) / 2;
        return Number(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
    } 

}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area(){
                return "Ошибка! Треугольник не существует";
            },
            get perimeter(){
                return "Ошибка! Треугольник не существует";
            }
        }    
    }
}