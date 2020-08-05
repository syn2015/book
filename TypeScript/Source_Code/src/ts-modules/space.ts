// 定义命名空间
namespace Valitation{
    const isLetterReg=/^[A-Za-z]+$/
    export const isNumberReg=/^[0-9]+$/
    export const checkLetter=(text:any)=>{
        return isLetterReg.test(text)
    }
}
