import { it, expect } from 'vitest'
import { add } from './math'

it('should sumarize all number values in an array', () => {
    const numbers = [1, 2, 3]
    const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0)
    const result = add(numbers)
    expect(result).toBe(expectedResult)
});

it('should yield NaN if at least one invalid number is provided', () => {
    const numbers = [1, 2, 'a']
    const result = add(numbers)
    expect(result).toBeNaN()
})

it('should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2', '3']
    const expectedResult = numbers.reduce((acc, curr) => acc + Number(curr), 0)
    const result = add(numbers)
    expect(result).toBe(expectedResult)
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1
    const num2 = 2
    const resultFn = () => add(num1, num2)
    expect(resultFn).toThrow()
})
