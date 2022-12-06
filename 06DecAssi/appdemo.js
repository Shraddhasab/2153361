const employee={
    employeeId:2153361,
    name:"shr",
    department:{
        id:2,
        name:"it",
        mgrId:1
    },
    salary:500,
    joiningdate:new Date("2019-03-22"),
    getNumberOfServiceYears:function(){
        return(2022-this.joiningdate.getFullyear());
    }
}
console.log(employee);
console.log(employee.employeeId);
console.log(employee.name);
console.log(employee.department.id);
console.log(employee.department.name);
console.log(employee.salary);
console.log(employee.joiningdate);

const employees=[
    {id:23,name:"shraddha",age:22},
    {id:24,name:"kiya",age:22},
    {id:26,name:"komal",age:22}
];


for(let i=0;i<employees.length;i++){
    console.log(employees[i]);
}
