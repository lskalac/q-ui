import {describe, expect, it} from 'vitest';
import { replacePatternWithValue } from './string';

describe('replacePatternWithValue', () => {
    const pattern = ':id';
    const fullValue = 'someUrl/:id';
    const value = 2;

    it('should replace pattern with value', () => {
        const res = replacePatternWithValue(fullValue, pattern, value);
        expect(res).toBe('someUrl/2');
    })

    it('should return empty string when replacing on empty string', () => {
        const res = replacePatternWithValue('', pattern, value);
        expect(res).toBe('');
    })

    it('should return fullValue when pattern not found', () => {
        const res = replacePatternWithValue(fullValue, '#u', 2);
        expect(res).toBe(fullValue);
    })
})