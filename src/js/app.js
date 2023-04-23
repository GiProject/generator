import Team from './Team';
import Character from './Character';

const char1 = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const char2 = new Character('Лучник', 'Bowman', 70, 2, 64, 24);
const char3 = new Character('Лучник', 'Bowman', 80, 3, 84, 35);

const team = new Team([
  char1,
  char2,
  char3,
]);
const iterator = team[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// const chars = [
//     new Character('Лучник', 'Bowman', 50, 1, 40, 10),
//     new Character('Лучник', 'Bowman', 70, 2, 64, 24),
//     new Character('Лучник', 'Bowman', 80, 3, 84, 35)
// ];

// const team = new Team(chars);

// for (let char of team) {
//     console.log(char);
// }
