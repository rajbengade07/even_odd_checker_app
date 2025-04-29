function check()
{
	event.preventDefault();
	let num=document.getElementById("num");
	let msg=document.getElementById("msg");
					
	if(num.value==="")
	{
		alert("Plz enter an integer");
		msg.innerHTML="";
		num.focus();
		return;
	}
	if(num.value==="0")
	{
		alert("Plz enter an value greater than 0");
		msg.innerHTML="";
		num.focus();
		return;
	}
					
	let n=parseInt(num.value);
	if(n%2==0)
	{
		msg.innerHTML=`${n} is an even number`;
	}
	else
	{
		msg.innerHTML=`${n} is odd number`;

	}

}
