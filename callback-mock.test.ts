import { forEach } from './callback-mock';

describe('forEach callback', () => {
	const mockCallback = jest.fn(x => 42 + x);
	forEach([0, 1], mockCallback);

	it('mock function should be called twice', () => {
		expect(mockCallback.mock.calls.length).toBe(2);
	});

	it('', () => {
		expect(mockCallback.mock.calls[0].length).toBe(1);
	});

	it('The first argument of the first call to the function was 0', () => {
		expect(mockCallback.mock.calls[0][0]).toBe(0);
	});

	it('', () => {
		expect(mockCallback.mock.calls[1][0]).toBe(1);
	});
	
	it('', () => {
		expect(mockCallback.mock.results[0].value).toBe(42);
	});
});