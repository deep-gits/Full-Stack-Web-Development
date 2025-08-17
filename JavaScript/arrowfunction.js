const sum= (a,b)=>(a+b);

const cube =(n)=>{
    return n*n*n;
};

const pow=(a,b)  =>{
    return a**b;
}



//implicit return in arrow function

const mul =(a,b)=>a*b;


//this with arrow funtion

const student={
    name: "deep",
    marks : 2,
    prop:this,//global scope
    getName : function(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);//parent's scope -> window

        return this.marks;
    },
    getInfo1 : function(){
        setTimeout(()=>{
            console.log(this);//student
        },2000);
    },
    getInfo2 : function(){
        setTimeout(function(){
            console.log(this);
        },2000);
    },
};

const a=5;
