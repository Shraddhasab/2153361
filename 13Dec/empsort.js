class Employee{
    constructor(id,name,salary){
        this.id=id;
       this.name=name;
       this.salary=salary;
    }
}

let Shraddha=new Employee(101,"Shraddha",10000);
let sable=new Employee(201,"sable",20000);
let navi=new Employee(301,"navi",30000);
let radhe=new Employee(401,"radhe",25000);


let employees=[Shraddha,sable,navi,radhe];

let sortedArr=employees.sort(
    (a,b)=>{
        if(a.name===b.name){
            return a.salary < b.salary?-1:1;
        }else{
            return a.name>b.name?1:-1;
        }
    }
);
console.log(sortedArr);


let button=document.getElementById("submit");
button.onclick=function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let salary=document.getElementById("salary").value;

    let  a=new Employee(employees.length+1,name,salary);
    employees.push(a);


    console.log(employees);
}
let sort=document.getElementById("sort");
sort.onclick=function(e){
    e.preventDefault();

    let table=document.createElement("table");


    let tr=document.createElement('tr');
        let id=document.createElement("td");
        let name=document.createElement("td");
        let salary=document.createElement("td");
        id.innerHTML="id";
        name.innerHTML="name";
        salary.innerHTML="salary";


        tr.appendChild(name);
        tr.appendChild(id);
        tr.appendChild(salary);
        table.appendChild(tr);

    for(let i=0;i<employees.length;i++){
        let tr=document.createElement('tr');
        let id=document.createElement("td");
        let name=document.createElement("td");
        let salary=document.createElement("td");
        id.innerHTML=employees[i].id;
        name.innerHTML=employees[i].name;
        salary.innerHTML=employees[i].salary;


        tr.appendChild(name);
        tr.appendChild(id);
        tr.appendChild(salary);
        table.appendChild(tr);



    }
    table.style.border="1px solid black";
    document.body.appendChild(table);
}
