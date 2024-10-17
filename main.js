function Filter_Array(arr)
{
    let new_arr=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
let ans=Filter_Array([1,2,3,4,5,6]);
console.log(ans);
// ==============================
// ==============================
// ==============================
// ==============================
function Max_Number(arr)
{
    return(Math.max(...arr));
}
console.log(Max_Number([1,2,4]));
// ==============================
// ==============================
// ==============================
// ============================
function reverse_string(str)
{
    let arr="";
    for(let i=str.length-1;i>=0;i--)
    {
       arr+=str[i];
    }
    str=arr;
    return str;
}
console.log(reverse_string("toka"));
// ==============================
// ==============================
// ==============================
// =============================
function remove_dublicate(arr)
{
    let st=new Set(arr);
    arr=new Array(...st);
    return arr;
}
console.log(remove_dublicate([1,2,3,4,4]));
// ==============================
// ==============================
// ==============================
// =============================