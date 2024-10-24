import { it, expect, describe } from 'vitest'
import { validateNumber, validateStringNotEmpty } from './validation'


describe('validateStringNotEmpty()', () => {
    it('', () => {
        const input = '';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).toThrow();
    })

    it('should throw an error with a message that contains a reason (must not be empty)', () => {
        const input = '';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).toThrow(/must not be empty/);
    })

    it('should throw an error if a long string of blanks is provided', () => {
        const input = '';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).toThrow();
    })

    it('should throw an error if any other value than a string is provided', () => {
        const inputNum = 1;
        const inputObj = {};
        const inputBool = true;

        const validationFnNum = () => validateStringNotEmpty(inputNum);
        const validationFnObj = () => validateStringNotEmpty(inputObj);
        const validationFnBool = () => validateStringNotEmpty(inputBool);

        expect(validationFnNum).toThrow();
        expect(validationFnObj).toThrow();
        expect(validationFnBool).toThrow();
    })
})
describe('validateNumber()', () => {

    it('should throw an error if NaN is provided', () => {
        const input = NaN;
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
    })

})