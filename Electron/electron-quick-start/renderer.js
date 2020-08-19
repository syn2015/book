// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const electron=require('electron');
function getProcessInfo(){
    console.log('getCPUsage : ', process.getCPUUsage());
    console.log('env : ', process.env);
    console.log('arch : ', process.arch);
    console.log('platform : ', process.platform);
    console.log('electron :',electron)
  
}
const fs=require('fs');
const drageWrapper=document.getElementById('drag_test');
drageWrapper.addEventListener('drop',(e)=>{
    e.preventDefault();
    const files=e.dataTransfer.files;
    if(files&&files.length>0){
        const path=files[0].path;
        console.log('path:',path);
       const content=fs.readFileSync(path);
       console.log(content.toString())
        
    }
})
drageWrapper.addEventListener('dragover',(e)=>{
    e.preventDefault();
})