const buttons = document.querySelectorAll(".btn");

buttons.forEach(button =>{
	// console.log(button);

	button.addEventListener("click",function(e){
		// console.log("i am workinf");
		const cx = e.clientX;
		// console.log(cx);

		const cy = e.clientY;
		// console.log(cy);

		const btntop = e.target.offsetTop;
		// console.log(btntop);

		const btnleft = e.target.offsetLeft;
		// console.log(btnleft);

		const xinside = cx - btnleft;
		const yinside = cy - btntop;

		const circle = document.createElement("span");
		circle.classList.add("circle");
		circle.style.top = yinside+"px";
		circle.style.left = xinside+"px";
		// console.log(circle);

		this.appendChild(circle);

		setTimeout(()=>{
			circle.remove();
		},600);
	});
});