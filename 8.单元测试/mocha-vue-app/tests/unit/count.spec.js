import { abs, add } from '@/count.js';
import { expect } from 'chai';

describe("abs函数",() => {
    it("测试给abs传入正数，期待返回值和输入值相同",() => {
        expect(abs(1)).to.be.equal(1);
    })
    
    it("测试给abs传入负数，期待返回值和输入值相反",() => {
        expect(abs(-1)).to.be.equal(1);
    })
    
    it("测试给abs传入0，期待返回值为0",() => {
        expect(abs(0)).to.be.equal(0);
    })
    
    it("测试给abs传入非数值，期待返回值为NaN",() => {
        expect(abs("a")).to.be.deep.equal(NaN);
        expect(abs(undefined)).to.be.deep.equal(NaN);
        expect(abs(null)).to.be.deep.equal(NaN);
        expect(abs(true)).to.be.deep.equal(NaN);
        expect(abs([])).to.be.deep.equal(NaN);
        expect(abs({})).to.be.deep.equal(NaN);
    })
})

describe("add函数",() => {
    it("测试add求和",() => {
        expect(add(1,2,3,4)).to.be.equal(10);
    })
})