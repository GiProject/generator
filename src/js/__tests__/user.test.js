import Character from '../Character';
import Team from '../Team';

test('iterator test', () => {
  const char1 = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
  const char2 = new Character('Лучник', 'Bowman', 70, 2, 64, 24);
  const char3 = new Character('Лучник', 'Bowman', 80, 3, 84, 35);

  const team = new Team([
    char1,
    char2,
    char3,
  ]);

  const objIterator = team[Symbol.iterator]();

  expect(objIterator.next()).toEqual({
    value: char1,
    done: false,
  });
  expect(objIterator.next()).toEqual({
    value: char2,
    done: false,
  });
  expect(objIterator.next()).toEqual({
    value: char3,
    done: true,
  });
  expect(objIterator.next()).toEqual({
    value: undefined,
    done: true,
  });
});
