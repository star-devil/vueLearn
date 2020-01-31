import { abs,add } from '@/count';

describe("count.js -> abs",() => {
    it("输入整数，期待返回输入值",() => {
        expect(abs(1)).toBe(1);
    })
    it("输入负数，期待返回值与输入值相反",() => {
        expect(abs(-1)).toBe(1);
    })
    it("输入0，期待返回0",() => {
        expect(abs(0)).toBe(0);
    })
    it("输入非数值，期待返回NaN",() => {
        expect(abs("")).toEqual(NaN);
    })
})

describe("count.js -> add",() => {
    it("求和",() =>{
        expect(add(1,2,3,4)).toBe(10)
    })
})