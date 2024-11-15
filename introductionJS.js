class Person {
    skills=[]
    constructor(firstName, lastName,age, coutry, city,skills){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.coutry=coutry
        this.city=city
        this.skills=skills
    }
    getFullName(){
        const fullName = this.firstName+ ' ' + this.lastName;
        return fullName;
    }
    addSkill(skill){
        this.skills.push(skill);
    }
}


class Student extends Person{
    saySomething(){
        console.log('I am a child of person class');
    }
}


const person1 = new Person('zsoldics','balazs', 31,'Romania','Cluj',['html','css']);
const student1 = new Student


person1.getFullName;