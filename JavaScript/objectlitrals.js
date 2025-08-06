const students={
    name: "shradha",
    age: 23,
    city:"delhi",
    marks: 94.4
};

const item={
    price:100.88,
    discount: 50,
    colors:["red","blue"]
};

//creating a post


const post={
    username:"@deepsharma",
    content:" This is my hashtag first post",
    likes: 150,
    reposts: 5,
    tags:   ["@deepsaraswat","@delta"]
};

post["likes"]


const obj={
    1:"1",
    2:"b",
    null:"d",
    true:"c",
    undefined:"e"
};


//add_update values

const student={
    name: "shradha",
    age: 23,
    city:"delhi",
    marks: 94.4
};

student.city="mumbai";
student.gender="male";
students.marks="a";
students.age=["s","se"];

//delete the values

delete student.marks;
delete student.city;


//nestedobjects

const classinfo ={
    deep:{
        grade:"A+",
        city:"delhi"
    },
    rajiv:{
        grade:"B+",
        city:"mumbai"
    },
    ram:{
        grade:"c+",
        city:"midhakhur"
    }
}


classinfo.aman;
classinfo.deep.grade;

//Array Of Object

const classinfo2=[
    {
        name:"deep",
        grade:"A+",
        city:"mumbai"
    },
    {
        name:"ram",
        grade:"B+",
        city:"gurgaun"
    },
    {
        name:"rohan",
        grade:"C+",
        city:"hanuman gali"
    }
]

classinfo2[0];
classinfo2[1].name;
classinfo2[3].city;


//MAth object

Math.PI
Math.E
Math.abs(12)
Math.random() *10;
