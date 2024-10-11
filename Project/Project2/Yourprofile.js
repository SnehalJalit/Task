
// function expandContent() {
//     const content = document.getElementById('content');


//         document.getElementById('expacondpage').textContent = ''; // Change button text
//         content.classList.remove('col-md-2');
//         content.classList.add('w-0');
    
// const expandContent=()=>{
//  document.getElementById('content') .style.width="0px";


//  }
const leftside=document.getElementById('col-md-2')
const rightside=document.getElementById('rightsection')
// var width=0;
// const expandContent=()=>{
// if( width==0){
//     leftside.style.width='0px'
//     width=0;
// }else{
//     rightside.style.width=''
//     width=1;
// }}
let isShow=true;
function expandContent(){
    if(isShow){
        leftside.style.display='none';
        isShow=false;
    }else{
        leftside.style.display='block';
        isShow=true;
    }
}