const tabContainer=document.querySelector('.tabs');// 标签tabs容器
const tabs=document.querySelectorAll('.tab');// 每一个标签tab
const tabContants=document.querySelectorAll('.tab-content > *');// 标签内容区
console.log(tabContants);
// tab点击事件
tabContainer.addEventListener("click",({target:currentTab})=>{
    tabs.forEach((tab)=>{
        tab.classList.remove('active');
    })
    // 当前tab添加class
    console.log('打印target:current，',currentTab)
    currentTab.classList.add("active");
    // 调用选项卡内容切换
    changeTab(currentTab.id)
});
// 处理选项卡内容切换
const changeTab=(tabId)=>{
    const newTab=document.querySelector(`div[data-tab=${tabId}]`);
    console.log('打印tab-contant的内容：',newTab)
    tabContants.forEach((content)=>{
        content.style.display="none";
    });
    // 显示当前tab的内容
    newTab.style.display="block";
}