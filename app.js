console.log("Hello World")
 
const productOfTwoNumbers = (a,b)=> a*b;

class Students{
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks = marks
    }
    eligibleForPlacement(minMark){
        return (minAge)=>{
            if(this.age>minAge && this.marks>minMark){
                console.log(`${this.name} is eligible for Plcaement`)
            }else{
                console.log(`${this.name} is not eligible for Placement`)
            }
        }
    }
}

let ashu = new Students("Ashu",23,64);
let asif = new Students("Asif",13,75);
ashu.eligibleForPlacement(45)(18);
asif.eligibleForPlacement(45)(18)