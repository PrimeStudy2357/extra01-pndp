const myNumber : number = 23;
const myString : string = "pndp";
const myBoolean : boolean = true;

const myObj : {
    name: string;
    age: number;
} = {
    name: "noName",
    age: 23,
}

type MyType = {
    name: string;
    age : number;
}

const myObj2 : MyType = {
    name: "noName",
    age: 32,
}

type MyFlag = "Not Good" | "Bad";

const flag: MyFlag = "Bad";

interface MyInterface {     //권장
    champion: string;
    kda: number;
}

const myGamer: MyInterface = {
    champion: "Azir",
    kda: 4,
}

function doSomething(person: MyInterface): number {
    return person.kda;
}

const tempObj = {
    name: "nononono",
    hobby: "Kill",
}

doSomething(myGamer);

function genericFunc<T>(value: T) {
    return value;
}

genericFunc<MyInterface>(myGamer);