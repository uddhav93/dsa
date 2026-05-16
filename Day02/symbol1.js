function sym1()
{
    var name=Symbol('name');
    let a={
        [name]:"Uddhav",
        "course":"mern"
    }
    console.log(a,a[name]);
    console.log(typeof name);
}
sym1();