const emp= { 
    empId:`2153361`,
    fname:`shr`,
    lname:`sable`,
    dept:{
        deptid:2,
        deptname:"it",
        mgrId:1
    },
    project:{
        pId:33,
        title:"project",
        started:false,
    },
    salary:5000,
    doj:new Date("2005-03-22"),
    ServiceYears:function(){
        return(2022-this.doj.getFullYear());
    }
}
for (let i in emp){
    if(i === 'dept'|| i === 'project'){
        for(let j in emp[i]){
           console.log(`${j}: ${emp[i][j]}`);
        }
    }
    else if(i === 'ServiceYears'){
              console.log(`ServiceYears ${emp.ServiceYears()}`);


    }
    else{
                   console.log(`${i}: ${emp[i]}`);

    }
}
