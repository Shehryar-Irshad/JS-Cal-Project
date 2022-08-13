let screen  = document.getElementById('output');
let buttons = document.querySelectorAll('button');
let SV = '';
for(item of buttons){
	item.addEventListener('click', (e)=>{
		  let buttonText = e.target.innerText;
		  console.log(buttonText);
		  
		  if(buttonText=='*'){
			  SV += buttonText;
		      output.value = SV;
		  }
		  else if(buttonText=='C'){
			    SV ='';
				output.value = SV;
		  }
		  else if(buttonText=='='){
			  output.value = eval(SV);
		  }
		  else{
			  SV += buttonText;
			  output.value = SV;
		  }
	}) 
}