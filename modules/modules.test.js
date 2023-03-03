// Import the function to be tested
import addNewTask from './add.js';
import trashTask from './remove.js';
import check from './check.js';
import { getStorage, Storage } from './storage.js';
import { populateList } from './populate.js';

// Mock populate and the storage functions.
jest.mock('./populate.js');
jest.mock('./storage.js');

describe('add task', () => {
  it('should add new task to the storage', () => {
    // Setup test data-arrange
    const input = { value: 'washing' };
    const expectedTask = {
      index: 1,
      completed: false,
      description: 'washing',
    };

    const taskList = [];
    getStorage.mockReturnValue(taskList);

    const result = addNewTask(input);
    // Act  and Assert
    expect(taskList).toContainEqual(expectedTask);
    expect(input.value).toBe('');
    expect(Storage).toHaveBeenCalledWith(taskList);
    expect(populateList).toHaveBeenCalledWith(taskList);
    expect(result).toEqual(expectedTask);
  });
});

//REMOVE FUNCTION TEST

// Mock the Storage and getStorage functions
jest.mock('./storage.js', () => ({
  Storage: jest.fn(),
  getStorage: jest.fn(),
}));

describe('remove task', () => {
  let taskIndex;
  let storedTasks;

  beforeEach(() => {
    // Set up the test data
    taskIndex = 1;
    storedTasks = [
      { index: 1, completed: false, description: 'Task 1' },
      { index: 2, completed: false, description: 'Task 2' },
      { index: 3, completed: false, description: 'Task 3' },
    ];
    // Mock the getStorage function to return the test data
    getStorage.mockReturnValue(storedTasks);
  });

  afterEach(() => {
    // Reset the mock functions
    jest.resetAllMocks();
  });

  it('should remove the task from the list', () => {
    // Call the function to be tested
    trashTask(taskIndex);
    // Check that the task was removed from the list
    expect(Storage).toHaveBeenCalledWith([
      { index: 1, completed: false, description: 'Task 1' },
      { index: 2, completed: false, description: 'Task 3' },
    ]);
  });

  it('should update the task indices', () => {
    // Call the function to be tested
    trashTask(taskIndex);
    // Check that the remaining tasks have their indices updated
    expect(Storage).toHaveBeenCalledWith([
      { index: 1, completed: false, description: 'Task 1' },
      { index: 2, completed: false, description: 'Task 3' },
    ]);
  });
});

//CHECK FUNCTION TEST

describe('check', () => {
  test('should add line-through style and set completed to true if checkbox is checked', () => {
    // Arrange
    const checkbox = {
      checked: true,
      nextElementSibling: {
        style: {},
      },
    };
    const item = {
      description: 'Buy milk',
      completed: false,
    };

    // Act
    check(checkbox, item);

    // Assert
    expect(checkbox.nextElementSibling.style.textDecoration).toBe('line-through');
    expect(item.completed).toBe(true);
  });

  test('should remove line-through style and set completed to false if checkbox is unchecked', () => {
    // Arrange
    const checkbox = {
      checked: false,
      nextElementSibling: {
        style: {
          textDecoration: 'line-through',
        },
      },
    };
    const item = {
      description: 'Buy milk',
      completed: true,
    };

    // Act
    check(checkbox, item);

    // Assert
    expect(checkbox.nextElementSibling.style.textDecoration).toBe('none');
    expect(item.completed).toBe(false);
  });
});

// POPULATE ITEMS FUNCTION TESTS
describe('populateList', () => {
  // Set up the jsdom environment before each test
  beforeEach(() => {
    // Create a new jsdom environment
    const { JSDOM } = require('jsdom');
    const { document } = new JSDOM('', { url: 'http://localhost' }).window;

    // Set the global document object to the jsdom document
    global.document = document;
  });

  test('should add a new task to the list', () => {
    // Arrange
    const taskList = [
      {
        index: 1,
        completed: false,
        description: 'Task 1',
      },
    ];

    // Mock the DOM elements
    document.body.innerHTML = `
    <ul id="list">
      <li class="task">
        <input type="checkbox" class="checkbox">
        <p class="description">Task 1</p>
        <i class="fas fa-trash-alt"></i>
      </li>
    </ul>
    `;

    // Act
    populateList(taskList);

    // Assert
    const list = document.getElementById('list');
    expect(list.children.length).toBe(1);
    expect(list.children[0].children[1].textContent).toBe('Task 1');

  });
});


