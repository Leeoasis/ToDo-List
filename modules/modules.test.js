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
