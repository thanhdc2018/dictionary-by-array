let str = "Xin chào";
console.log(str);
let vi = ["Xin chào", "Tạm biệt", "Chúc ngủ ngon"];
let eng = ["Hello", "Goodbye", "Good night"];
let asw = "";
function translate(str) {
    for (let i = 0; i < vi.length; i++) {
        if (str === vi[i]) {
            asw = eng[i];
            i = vi.length;
        } else {
            asw = "This dictionary hasn't this word";
        }
    }
    // console.log(asw);
}console.log(translate(str));