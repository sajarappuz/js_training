const a = { Parent: { Student: { Name: "Virat", Age: 24, Rollno: 34, marks: [ { English : 85 }, { Science: 75 } ] } , MobileNos: [ "1234567890", "9087654321" ] } };
 
const b = {...a};

b.Parent = Object.assign({}, a.Parent);
b.Parent.Student = Object.assign({}, a.Parent.Student,{
    marks: a.Parent.Student.marks.map((mark)=> (Object.assign({}, mark))),
});

b.Parent.MobileNos = [...a.Parent.MobileNos];

b.Parent.Student.Name = "RAJU";
b.Parent.Student.Age = 18 ;
b.Parent.Student.Rollno = 2 ;
b.Parent.Student.marks[1].Science = 73;
b.Parent.MobileNos[1] = "9647382718"

console.log(JSON.stringify(a));
console.log(JSON.stringify(b))