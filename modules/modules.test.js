// Import the function to be tested
import addNewTask from './add.js';
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
jest.mock('./storage', () => ({
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
    require('./storage').getStorage.mockReturnValue(storedTasks);
  });

  afterEach(() => {
    // Reset the mock functions
    jest.resetAllMocks();
  });

  it('should remove the task from the list', () => {
    // Call the function to be tested
    trashTask(taskIndex);
    // Check that the task was removed from the list
    expect(require('./storage').Storage).toHaveBeenCalledWith([
      { index: 1, completed: false, description: 'Task 1' },
      { index: 2, completed: false, description: 'Task 3' },
    ]);
  });

  it('should update the task indices', () => {
    // Call the function to be tested
    trashTask(taskIndex);
    // Check that the remaining tasks have their indices updated
    expect(require('./storage').Storage).toHaveBeenCalledWith([
      { index: 1, completed: false, description: 'Task 1' },
      { index: 2, completed: false, description: 'Task 3' },
    ]);
  });
});
