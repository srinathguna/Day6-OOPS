//Write a “person” class to hold all the details.

class Person{
    constructor(name,age,degree,city,pincode,){
        this.name=name
        this.age=age
        this.degree=degree
        this.city=city
        this.pincode=pincode
    }

    getDetails(){ // get details from arguments
        return(`
        I am ${this.name} from ${this.city}-${this.pincode} i am ${this.age}
        i did ${this.degree} in thiruvalluvar university
        `)
    }

}

const obj1=new Person('Srinath',31,'MCA','vellore',635601) // person 1 details
const obj2=new Person('Gopinath',34,'MBA','Tirupattur',600258) // person 2 details

console.log(obj1.getDetails()) // console output
console.log(obj2.getDetails()) // console output