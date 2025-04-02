//your JS code here. If required.

	let h1 = document.createElement("h1");
window.addEventListener("resize",(e)=>{
	h1.innerText =`width ${window.innerWidth } and Height ${window.innerHeight}`;
	
	document.querySelector("#sizeInfo").appendChild(h1);
})