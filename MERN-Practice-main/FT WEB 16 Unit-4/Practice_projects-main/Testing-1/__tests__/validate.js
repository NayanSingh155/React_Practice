// prev code is
// const {test,expect,describe} =require("@jest/globals");
// const sum =require("./firstcode")
// describe("Test Sum function with Numbers",function(){
//     test("should work on all positive numbers",function(){
//         expect(sum(2,2)).toBe(4)
//         })
//             test("should work on all negative numbers",function(){
//             expect(sum(-2,-2)).toBe(-4)
//             })
// })
// describe("Test sum function with characters",() => {
//         test("it should not work on two character", function () {
//             expect(sum("a", "b")).toBe(undefined);
//         });
//     })
const {test,expect,describe} =require("@jest/globals");
const validate =require("../src/index")
describe("Validate Password",function(){
    test(" All conditions satisfied",function(){
        expect(validate("aaaa1A")).toBe(true);
    })
})
