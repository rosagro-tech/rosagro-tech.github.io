input.oninput=function(){result.innerHTML=input.value,ww=input.value,w=ww.length,type.innerHTML=ww.length},document.addEventListener("DOMContentLoaded",async()=>{const a=await Ipfs.create({repo:"ipfs-"+Math.random()});window.node=a;const b=a.isOnline()?"<span class=\"online\"></span>":"<span class=\"offline\"></span>";document.getElementById("status").innerHTML=`${b}`});async function addFile(){if(s=" ",s=s.replace(/^\s+|\s+$/g,""),document.getElementById("input").value==s)alert("\u043F\u0443\u0441\u0442\u043E");else{var a=document.getElementById("input").value;const b=await node.add(a);b.forEach(a=>document.getElementById("hash").innerHTML=a.hash),hss=document.getElementById("hash"),b.forEach(a=>hss.setAttribute("href","https://gateway.ipfs.io/ipfs/"+a.hash)),hss.setAttribute("target","blank"),document.getElementById("result").innerHTML=a,document.getElementById("type").innerHTML=" <span class=\"post_label\">post</span>"}}async function catFile(){if(s=" ",s=s.replace(/^\s+|\s+$/g,""),document.getElementById("input").value==s)alert("\u043F\u0443\u0441\u0442\u043E");else{var a=document.getElementById("input").value;const b=await node.cat(a);console.log(b.toString()),document.getElementById("result").innerHTML=b.toString(),document.getElementById("hash").innerHTML=a,hss=document.getElementById("hash"),hss.setAttribute("href","https://gateway.ipfs.io/ipfs/"+a),hss.setAttribute("target","blank"),document.getElementById("type").innerHTML="<span class=\"get_label\">get</span>"}}async function file(){document.getElementById("type").innerHTML="<span class=\"get_label\">file</span>"}setTimeout(function(){document.body.classList.add("body_visible")},500);const ipfs=window.IpfsHttpClient("ipfs.infura.io","5001",{protocol:"https"});$("#upload").on("change",function(){var a=new FileReader;a.onload=function(){const b=buffer.Buffer(a.result);ipfs.add(b,(a,b)=>{console.log(a,b);let c="<a href='https://gateway.ipfs.io/ipfs/"+b[0].hash+"' target='blank''> "+b[0].hash+"</a>";document.getElementById("hash").innerHTML=c})},a.readAsArrayBuffer(this.files[0])});
