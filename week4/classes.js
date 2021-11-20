//OBJECT
let myFirstEmployee =  {
    firstName: "Eduardo",
    position: "Instructor",
    age: "31"
};

// CLASS: a discription/BLUEPRINT of the group of OBJECTS I am going to create.
// Name of Class starting with a capital letter ('E')
class Employee {
    constructor() {
        this.firstName;
        this.position;
        this.age;
    }
}
// Using the Class I just created above
let mySecondEmployee = new Employee();
