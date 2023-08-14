import operate from '../logic/operate';

// Mock the alert function
const originalAlert = window.alert;
const mockAlert = jest.fn();
window.alert = mockAlert;

describe('operate function', () => {
  afterEach(() => {
    // Restore the original alert function after each test
    window.alert = originalAlert;
  });

  it('should perform addition correctly', () => {
    expect(operate('2', '3', '+')).toBe('5');
    expect(operate('-5', '10', '+')).toBe('5');
    expect(operate('0', '0', '+')).toBe('0');
    expect(operate('', '0', '+')).toBe('0');
    expect(operate('', '', '+')).toBe('0');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '3', '-')).toBe('2');
    expect(operate('10', '-7', '-')).toBe('17');
    expect(operate('0', '0', '-')).toBe('0');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('2', '3', 'x')).toBe('6');
    expect(operate('-5', '10', 'x')).toBe('-50');
    expect(operate('0', '5', 'x')).toBe('0');
  });

  it('should perform division correctly', () => {
    expect(operate('10', '2', '÷')).toBe('5');
    expect(operate('-50', '5', '÷')).toBe('-10');
    expect(operate('10', '', '÷')).toBe('10');
  });

  it('should handle division by zero', () => {
    // Mocking console.error to suppress expected error output in this test
    const originalConsoleError = console.error;
    console.error = jest.fn();

    // Call the function that throws the divide by zero error
    try {
      operate('5', '0', '÷');
    } catch (error) {
      // Check that the error message matches and the alert function was called
      expect(error.message).toBe('[big.js] Division by zero');
      expect(mockAlert).toHaveBeenCalledWith('Divide by 0 error');
    }

    // Restore the original console.error
    console.error = originalConsoleError;
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('5', '3', '%')).toThrow("Unknown operation '%'");
  });
});