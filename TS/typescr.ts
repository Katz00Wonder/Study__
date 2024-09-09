function sub (a: number,b: number) : number {
    return a + b;
}

console.log(sub(1,2));

let norm= "2";

type Dog = { // объявление типа
    name: string,
    breed: string,
    age: number
}


let learnMassive: Array<number | string>  = [1,2,"2"]; // объявление массива

let MassiveObjects: Dog[] = [ // объявление массива объектов с использованием шаблона => Dog
    {
        name: 'Rex',
        breed: 'Labrador',
        age: 3
    }
];