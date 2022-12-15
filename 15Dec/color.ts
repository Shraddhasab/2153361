interface Colorable{
    color:string;
}
interface Printable{
    print:()=>void;
}
interface DigitalPrint extends Colorable, Printable{
};
    let obj:DigitalPrint={
        color:'pink',
        print:()=>console.log(`${obj.color}`)
    };

    let obj1:DigitalPrint={
        color:'red',
        print:function()
        {
        console.log(`${this.color}`)
    }
}
console.log(obj.color);
console.log(obj1.color);
obj.print();
obj1.print();


