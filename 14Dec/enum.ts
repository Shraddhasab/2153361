enum toppings{
    cheeze,
    corn,
    onion,
    tomato
}
enum sizes{
    small,
    medium,
    large,
    extralarge,
}

interface pizza{
    id: number,
    base: string,
    topping: toppings,
    size: sizes
}

let value: pizza;

value={
    id:100,
    base:'double base',
    topping : toppings.tomato,
    size: sizes.medium

};
console.log(value);
