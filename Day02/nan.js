function nan_val()
{
    let a=10,b;
    let c=a+b;
    let d=a+false;
    console.log(c,d);
    console.log(typeof c,typeof d);
}
nan_val();