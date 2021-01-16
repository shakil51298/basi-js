/**
                    ARRAY
 */


//Array /array alltime third bracket er modde thake
//array usually kno list.
var friendsAge = [22, 24, 12, 6];
// var shakilAge = friendsAge[2];
// friendsAge[2] = 26;/*this line update the age of third positioned values */
//var position = friendsAge.indexOf(24);//this line gave output the position of 24;
// যদি কোন ঈলিমেন্ট এরের লিস্টের মধ্যে না থাকে তাহলে আউটপুট হবে -1.
//aryy Push list er moddhe new kno element dukanor jnno use hoi
// friendsAge.push(50);//this line add a new element of array
// console.log(friendsAge);
// friendsAge.push(60);
// console.log(friendsAge)
// friendsAge.push(5);
// console.log(friendsAge)
// friendsAge.push(5);
// console.log(friendsAge)
//console.log(friendsAge.length);// this line showd me that how many element have inside the arry


var singer = ['shakil', 'rahim', 'karim'];
singer.pop();//লাস্ট এ কাউকে সরিয়ে দিবে।
console.log(singer);
singer.push('abdur');// লাস্ট এ কাউকে এড করে দিবে
console.log(singer);
singer.shift();//প্রথম থেকে কাউকে সরিয়ে ডিবে
console.log(singer);
singer.unshift('1st postion');//প্রথমে কাউকে এড করবে
console.log(singer); 

var singer = ['shakil', 'rahim', 'karim', 'abida', 'pabida', 'ronju'];
var part = singer.slice(2, 5); //this line slice the list
console.log(part);

var names = ['shakil', 'azad', 'karim', 'mahabur', 'sumon'];
console.log(names);
var slice = names.slice(2,5);
console.log(slice);
var slice = names.splice(2,4);
console.log(slice);