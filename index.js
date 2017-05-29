console.log("log");
console.warn("warning");
console.error("error");
console.info("info");
console.debug("debug");
console.log("Hello world my name is %s and I am %d years old and here is an object: %o", "Federico", 30, {foo: "bar"});
// %s = string, %d = digit, %o = object, %c = css
console.log("this is my %coutput!", "color: blue; font-size: 33px");
for (var i = 0; i < 100; i++) {
    var num = Math.random() * 100;
    console.groupCollapsed("Picking a random number...");
    console.log("Number greater then 10?", num > 10);
    console.log("Number greater then 50?", num > 50);
    console.groupEnd();
}

for (var i = 0; i < 100; i++) {
    var num = Math.random() * 100;
    
    if(num > 50){
        console.count("greater than 50");
    }else{
        console.count("less than 50");
    }
}

console.time("createObjects");

var array = [];
for (var i = 0; i < 10000000; i++) {
    array.push({index: i});
}

console.timeEnd("createObjects");

function Movie(name, year) {
    this.name = name;
    this.year = year;
}

var amarcord = new Movie("Amarcord", 1973);
var trainspotting = new Movie("Trainspotting", 1996);
var leon = new Movie("Leon", 1994);

var movies = [amarcord, trainspotting, leon];

console.table(movies);

