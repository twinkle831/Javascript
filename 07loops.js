const arr =[1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

//can also use for of loops in strings 

// MAPS - only has unique values 

const map = new Map()
//holds key value pairs in order ; has unique values

map.set('IN', "India")
map.set('JP', "Japan")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

for (const [key,value] of map){
    console.log(key, ':', value); 

}

//cannot do this in object 
//use "for in" in objects 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//can use key as keyword iterator in object 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
//if you print only key : prints indices

//for in doesnt print in maps 

//FOREACH LOOP 
//call back functions are unnamed
programming.forEach( function (item) {
    console.log(item);
} )

programming.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

function printMe(item){
    console.log(item);
}

programming.forEach(printMe) //only give refernvce : dont call it here 