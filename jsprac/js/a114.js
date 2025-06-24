var x=document.getElementById('x');
var y=document.getElementById('y');
var u=document.getElementById('u');
var v=document.getElementById('y');
function addNew(){
	var inp=document.createElement('input');
	inp.className="a";
	x.appendChild(inp);
	var nl=document.createElement('br');
	x.appendChild(nl);
}
function processRecord(){
	var recs=document.getElementsByClassName('a');
	for(var i=0;i<recs.length;i++){
		var val=parseInt(recs[i].value);
		if(val%2!=0){
			var dv1=document.createElement('div');
			dv1.className='z b';
			dv1.innerHTML=val;
			u.appendChild(dv1);
		}
		else{
			var dv2=document.createElement('div');
			dv2.className='z c';
			dv2.innerHTML=val;
			v.appendChild(dv2);		
		}
	}
}