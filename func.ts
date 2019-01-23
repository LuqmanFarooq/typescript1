function str_len(value: string): number{
    let num: number = value.length;
    return num;
}

function str_len_nospaces(value: string): number{
    let num: number = value.replace(/\s+/,"").length;
    return num;
}
console.log("string length with space and all is: "+str_len("test 1"));
console.log("string length with spaces not include in to the count: "+ str_len_nospaces("test 1"));

//function str_len_both(value: string, space?:boolean): number{
    //note? for optional parameters
    //no will default to false due to
    //code in the function, but i could
    // change from optional and provide
    // a default to the parametre by writing
    // the signature as
//}
