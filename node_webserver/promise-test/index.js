const fs = require('fs')
const path = require('path')

const fillfilename = path.resolve(__dirname, 'files', 'a.json')
fs.readFile(fillfilename, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.toString())
})
// console.log('sync')
//callback方式读取文件内容
function getFileContent(filename, callback) {
    const fillfilename = path.resolve(__dirname, 'files', filename)
    fs.readFile(fillfilename, (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        // console.log(data.toString())
        callback(
            JSON.parse(data.toString())
        )
    })
}

//
// getFileContent('a.json',aData=>{
//     console.log('a data,',aData)
//     getFileContent('b.json',bData=>{
//         console.log('b data,',bData)
//         getFileContent('c.json',cData=>{
//             console.log('c data,',cData)
//         })
//     })
// })

//promise方式

function getFileContentPromise(filename) {
    const primsie = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', filename)
        fs.readFile(fullFileName, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(
                JSON.parse(data.toString())
            )
        })
    })
    return primsie
}
getFileContentPromise('a.json').then(aData => {
    console.log('a data,', aData)
    return getFileContentPromise(aData.next)
}).then(bData => {
    console.log('b data', bData)
    return getFileContentPromise(bData.next)
}).then(cData=>{
    console.log('d data,',cData)
})