// console.log("testing: linked up");


// ------- cached elements -------

// try / catch: 
const tryCatchExpand = document.getElementById('try-catch-expand');
const tryCatchCollapse1 = document.getElementById('try-catch-collapse-1');
const tryCatchCollapse2 = document.getElementById('try-catch-collapse-2');
const tryCatchInfo1 = document.getElementById('try-catch-more-info-1');
const tryCatchInfo2 = document.getElementById('try-catch-more-info-2');
const tryCatchExpandClick = document.getElementById('try-catch-expand-click')
const tryCatchCollapse1Click = document.getElementById('try-catch-collapse-1-click');
const tryCatchCollapse2Click = document.getElementById('try-catch-collapse-2-click');

// superrad 
const superradExpand = document.getElementById('superrad-expand');
const superradCollapse1 = document.getElementById('superrad-collapse-1');
const superradCollapse2 = document.getElementById('superrad-collapse-2');
const superradInfo1 = document.getElementById('superrad-more-info-1');
const superradInfo2 = document.getElementById('superrad-more-info-2');
const superradExpandClick = document.getElementById('superrad-expand-click');
const superradCollapse1Click = document.getElementById('superrad-collapse-1-click');
const superradCollapse2Click = document.getElementById('superrad-collapse-2-click');

// battle doodles 
const battleDoodlesExpand = document.getElementById('battle-doodles-expand');
const battleDoodlesCollapse1 = document.getElementById('battle-doodles-collapse-1');
const battleDoodlesCollapse2 = document.getElementById('battle-doodles-collapse-2');
const battleDoodlesInfo1 = document.getElementById('battle-doodles-more-info-1');
const battleDoodlesInfo2 = document.getElementById('battle-doodles-more-info-2');
const battleDoodlesExpandClick = document.getElementById('battle-doodles-expand-click');
const battleDoodlesCollapse1Click = document.getElementById('battle-doodles-collapse-1-click');
const battleDoodlesCollapse2Click = document.getElementById('battle-doodles-collapse-2-click');

// cardpool 
const cardpoolExpand = document.getElementById('cardpool-expand');
const cardpoolCollapse1 = document.getElementById('cardpool-collapse-1');
const cardpoolCollapse2 = document.getElementById('cardpool-collapse-2');
const cardpoolInfo1 = document.getElementById('cardpool-more-info-1');
const cardpoolInfo2 = document.getElementById('cardpool-more-info-2');
const cardpoolExpandClick = document.getElementById('cardpool-expand-click');
const cardpoolCollapse1Click = document.getElementById('cardpool-collapse-1-click');
const cardpoolCollapse2Click = document.getElementById('cardpool-collapse-2-click');

// earfull 
const earfullExpand = document.getElementById('earfull-expand');
const earfullCollapse1 = document.getElementById('earfull-collapse-1');
const earfullCollapse2 = document.getElementById('earfull-collapse-2');
const earfullInfo1 = document.getElementById('earfull-more-info-1');
const earfullInfo2 = document.getElementById('earfull-more-info-2');
const earfullExpandClick = document.getElementById('earfull-expand-click');
const earfullCollapse1Click = document.getElementById('earfull-collapse-1-click');
const earfullCollapse2Click = document.getElementById('earfull-collapse-2-click');



// ------- event listeners -------

// try / catch: 
tryCatchExpandClick.addEventListener('click', ()=>{
	tryCatchExpand.style.display = "none";
	tryCatchCollapse1.style.display = "flex";
	tryCatchCollapse2.style.display = "flex";
	tryCatchInfo1.style.display = "contents";
	tryCatchInfo2.style.display = "contents";
})

tryCatchCollapse1Click.addEventListener('click', ()=>{
	tryCatchExpand.style.display = "flex";
	tryCatchCollapse1.style.display = "none";
	tryCatchCollapse2.style.display = "none";
	tryCatchInfo1.style.display = "none";
	tryCatchInfo2.style.display = "none";
})

tryCatchCollapse2Click.addEventListener('click', ()=>{
	tryCatchExpand.style.display = "flex";
	tryCatchCollapse1.style.display = "none";
	tryCatchCollapse2.style.display = "none";
	tryCatchInfo1.style.display = "none";
	tryCatchInfo2.style.display = "none";
})


// superrad: 
superradExpandClick.addEventListener('click', ()=>{
	superradExpand.style.display = "none";
	superradCollapse1.style.display = "flex";
	superradCollapse2.style.display = "flex";
	superradInfo1.style.display = "contents";
	superradInfo2.style.display = "contents";
})

superradCollapse1Click.addEventListener('click', ()=>{
	superradExpand.style.display = "flex";
	superradCollapse1.style.display = "none";
	superradCollapse2.style.display = "none";
	superradInfo1.style.display = "none";
	superradInfo2.style.display = "none";
})

superradCollapse2Click.addEventListener('click', ()=>{
	superradExpand.style.display = "flex";
	superradCollapse1.style.display = "none";
	superradCollapse2.style.display = "none";
	superradInfo1.style.display = "none";
	superradInfo2.style.display = "none";
})


// battle doodles 
battleDoodlesExpandClick.addEventListener('click', ()=>{
	battleDoodlesExpand.style.display = "none";
	battleDoodlesCollapse1.style.display = "flex";
	battleDoodlesCollapse2.style.display = "flex";
	battleDoodlesInfo1.style.display = "contents";
	battleDoodlesInfo2.style.display = "contents";
})

battleDoodlesCollapse1Click.addEventListener('click', ()=>{
	battleDoodlesExpand.style.display = "flex";
	battleDoodlesCollapse1.style.display = "none";
	battleDoodlesCollapse2.style.display = "none";
	battleDoodlesInfo1.style.display = "none";
	battleDoodlesInfo2.style.display = "none";
})

battleDoodlesCollapse2Click.addEventListener('click', ()=>{
	battleDoodlesExpand.style.display = "flex";
	battleDoodlesCollapse1.style.display = "none";
	battleDoodlesCollapse2.style.display = "none";
	battleDoodlesInfo1.style.display = "none";
	battleDoodlesInfo2.style.display = "none";
})


// cardpool 
cardpoolExpandClick.addEventListener('click', ()=>{
	cardpoolExpand.style.display = "none";
	cardpoolCollapse1.style.display = "flex";
	cardpoolCollapse2.style.display = "flex";
	cardpoolInfo1.style.display = "contents";
	cardpoolInfo2.style.display = "contents";
})

cardpoolCollapse1Click.addEventListener('click', ()=>{
	cardpoolExpand.style.display = "flex";
	cardpoolCollapse1.style.display = "none";
	cardpoolCollapse2.style.display = "none";
	cardpoolInfo1.style.display = "none";
	cardpoolInfo2.style.display = "none";
})

cardpoolCollapse2Click.addEventListener('click', ()=>{
	cardpoolExpand.style.display = "flex";
	cardpoolCollapse1.style.display = "none";
	cardpoolCollapse2.style.display = "none";
	cardpoolInfo1.style.display = "none";
	cardpoolInfo2.style.display = "none";
})


// earfull 
earfullExpandClick.addEventListener('click', ()=>{
	earfullExpand.style.display = "none";
	earfullCollapse1.style.display = "flex";
	earfullCollapse2.style.display = "flex";
	earfullInfo1.style.display = "contents";
	earfullInfo2.style.display = "contents";
})

earfullCollapse1Click.addEventListener('click', ()=>{
	earfullExpand.style.display = "flex";
	earfullCollapse1.style.display = "none";
	earfullCollapse2.style.display = "none";
	earfullInfo1.style.display = "none";
	earfullInfo2.style.display = "none";
})

earfullCollapse2Click.addEventListener('click', ()=>{
	earfullExpand.style.display = "flex";
	earfullCollapse1.style.display = "none";
	earfullCollapse2.style.display = "none";
	earfullInfo1.style.display = "none";
	earfullInfo2.style.display = "none";
})

