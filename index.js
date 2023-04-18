const numbers1 = [1, 2, 3];
numbers1.push(6, 5, 4);
numbers1.unshift(-3, -2, -1)

const numbers2 = [100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10]

const deletedEnd1 = numbers2.pop();
const deletedEnd2 = numbers2.pop();
const deletedStart1 = numbers2.shift();
const deletedStart2 = numbers2.shift();

const numbers3 = [1,2,3,4,5];
const deletedGroup = numbers3.splice(1, 2);

const numbers4 = [1,2,3,4,5];
const addedNum = numbers4.splice(2, 0, 3,4,5);


const numbers5 = [1,2,3,4,5];
const addedLetters = numbers5.splice(3, 0, 'a', 'b', 'c');

const numbers6 = [1, 2, 3, 4, 5];
const addedLettersUneven = numbers6.splice(-4, 4,'a','b',2,3,4,'c',5,'e');
//probably not effeective, there is probably a method to insert into the array




