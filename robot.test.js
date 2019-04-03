const {newRobot, station, isWorkday, prioritizeTasks, isVintage}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
const foreignModel = newRobot(true, true, false);
const expectedResult = 1;
  // act
const result = station(foreignModel);
  // assert
expect(result).toEqual(expectedResult);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
const vintageModel = newRobot(true, false, true);
const expectedResult = 2;
  // act
const result = station(vintageModel);
  // assert
expect(result).toEqual(expectedResult);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  const needsRepairs = true;
  const isForeign = false; // not sure why this greys out
  const isVintage = false;
  const robot = newRobot(needsRepairs);
  const expectation = 3
  // act
  const result = station(robot);
  // assert
  expect(result).toEqual(expectation);
});

test.skip('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange

  // act

  // assert
});
test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  testRobot = newRobot(true, true, true);
  // act
  result = prioritizeTasks(testRobot)
  // assert
  expect(result).toEqual(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  testRobot = newRobot(true, true, true);
  testRobot['todos'].push(1);
  testRobot['todos'].push(2);
  testRobot['todos'].push(3);
  testRobot['todos'].push(4);
  // act
  result = prioritizeTasks(testRobot);

  // assert
  expect(result).toEqual(4);

});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  testRobot = newRobot(true,true,true);
  testRobot.dayOff = 'Monday';
  // act
  today = 'Monday'
  result = isWorkday(testRobot, today);
  // assert
  expect(result).toEqual(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  testRobot = newRobot(true, true, true);
  testRobot.dayOff = 'Monday';

  // act
  today = 'Saturday'
  result = isWorkday(testRobot, today);


  // assert
  expect(result).toEqual(true);

});