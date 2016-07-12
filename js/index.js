window.onload=function(){
	var rightSideDing=document.getElementById('rightSideDing');	
var dingweiTop=document.getElementById('dingweiTop');
var leftSideDing=document.getElementById('leftSideDing');
var ch=document.documentElement.clientHeight;
var leftA=leftSideDing.getElementsByTagName('a');
var guanliandingW=getClass("guanliangleft-contentBox");
var flag=true;
var flag1=false;
var now=0;
document.body.scrollTop=1;
var obj=document.body.scrollTop?document.body:document.documentElement;
       	var bannerBox=getClass('bannerCenter-top')[0];
		var bannerPic=getClass('bannerCenter-lunbo'); 
		var btnL=getClass('btnleft')[0];
		var btnR=getClass('btnright')[0];
		var bannerCircle=getClass('banner-circle');
		var topNavRightson7=$('.topNavRight-son7');
		/*alert(topNavRightson7.length)*/
		var xiala=$('.xiala');
		var topNavRightyans=$('.topNavRight-yans');
		/*alert(xiala.length)*/
		var now=0;
		var next=0;
		var sidelis=$('.sideBarhover');
		var sidelis1=$('.sideBarhover1');
		var sideviewbox=$('.sideviewBox');
		var sideviewhover=$('.sideviewhover');
		var sideviewhover1=$('.sideviewhover1');
		var sideviewbox1=$('.sideviewBox1');
		/*alert(sideviewbox.length);*/
		var sideBarColor=$('.sideBarColor');
		var sideBarColor1=$('.sideBarColor1');
		var sideBarh2=$('.sideBarh2');
		var sideBarh21=$('.sideBarh21');
		var rightSideDingSon1=$('.rightSideDing-son1');
	    var rightSideDingSon2=$('.rightSideDing-son2')[0];
	    var rightSideDingSon1Tu2=$('.rightSideDing-son1-tu1')[0];
		var rightSideDingSon1Tu=$('.rightSideDing-son1-tu');
		var mainNavLeftSon2=$('.mainNavLeft-son2')[0];
		var form1=document.formsous;
		var txt1=form1.elements.txt1;
		var rightSideDingtop=$('.rightSideDingtop')[0];
		//返回顶部
		
			/*if(obj[scrollTop]>=ch){
				rightSideDingtop.display='block';
			}else{
				rightSideDingtop.display='none';
			}*/
		/*	window.onscroll=function(){
				var fantops=obj.scrollTop;
				if(fantops>=ch){
					rightSideDingtop.style.display='block';
				}else{
					rightSideDingtop.style.display='none';
				}
			}*/

		    rightSideDingtop.onclick=function(){
			/*fanhuitopLtops=0+'px';*/
			animate(obj,{scrollTop:0},800)
		}
		
		
		//input焦点
		txt1.onfocus=function(){
			if(txt1.value=='88包邮，轻松逛“超市”'){
				txt1.value='';
			}
		}
		txt1.onblur=function(){
			if(txt1.value==''){
				txt1.value='88包邮，轻松逛“超市”';
			}
		}
		hover(mainNavLeftSon2,function(){
			mainNavLeftSon2.style.background='url(images/xialah.gif) no-repeat 48px 14px';
		},function(){
			mainNavLeftSon2.style.background='url(images/xiala.jpg) no-repeat 48px 14px';
		});
		hover(rightSideDingSon2,function(){
			rightSideDingSon1Tu2.style.display='block';
			rightSideDingSon1Tu2.style.left=-180+'px';
			animate(rightSideDingSon1Tu2,{left:-154},300);
		},function(){
			rightSideDingSon1Tu2.style.display='none';
			rightSideDingSon1Tu2.style.left=-180+'px';
		});
		for(var i=0;i<rightSideDingSon1.length;i++){
			rightSideDingSon1[i].index=i;
			hover(rightSideDingSon1[i],function(){
				rightSideDingSon1Tu[this.index].style.display='block';
				for(var j=0;j<rightSideDingSon1.length;j++){
					rightSideDingSon1Tu[j].style.left=-110+'px';
				}
				animate(rightSideDingSon1Tu[this.index],{left:-90},600);
				/*animate(rightSideDingSon1Tu[this.index],{opacity:1});*/
				/*rightSideDingSon1Tu[this.index].style.opacity=1;
				rightSideDingSon1Tu[this.index].style.filter='alpha(opacity:100)';*/
				
			},function(){
			   /*rightSideDingSon1Tu[this.index].style.opacity=0;
				rightSideDingSon1Tu[this.index].style.filter='alpha(opacity:0)';*/
				rightSideDingSon1Tu[this.index].style.display='none';
				rightSideDingSon1Tu[this.index].style.left=-110+'px';
			})
		}
		for(var i=0;i<sidelis1.length;i++){
			sidelis1[i].index=i;
			hover(sidelis1[i],function(){
				for(var j=0;j<sidelis1.length;j++){
					sidelis1[j].style.background='';
					sideviewhover1[j].style.display='none';
				}
				var aColor1=sideBarColor1[this.index].getElementsByTagName('a');
				for(var j=0;j<aColor1.length;j++){
					aColor1[j].style.color='#fff';
				}
				if(this.index==0){
					this.style.background='url(images/youh5.jpg) no-repeat 15px 17px #e41a3a';
				}else if(this.index==1){
					this.style.background='url(images/youh6.jpg) no-repeat 14px 17px #e41a3a';
				}else if(this.index==2){
					this.style.background='url(images/youh7.jpg) no-repeat 14px 17px #e41a3a';
				}
				sideviewhover1[this.index].style.display='block';
				sideviewbox1[this.index].style.top=-73*(this.index+1)+'px';	
				sideviewbox1[this.index].style.display='block';
				sideBarh21[this.index].style.background='url(images/youjiantouh.jpg) no-repeat 170px 6px';
			},function(){
				sideviewhover1[this.index].style.display='none';
				sideviewhover[this.index].style.display='none';
				sideviewbox1[this.index].style.display='none';
				sideBarh21[this.index].style.background='url(images/youjiantou.jpg) no-repeat 170px 6px';
				var aColor1=sideBarColor1[this.index].getElementsByTagName('a');
				aColor1[0].style.color='#515151';
				for(var j=1;j<aColor1.length;j++){
					aColor1[j].style.color='#999';
				}
				if(this.index==0){
					this.style.background='url(images/you5.jpg) no-repeat 15px 17px #fff';
				}else if(this.index==1){
					this.style.background='url(images/you6.jpg) no-repeat 14px 17px #fff';
				}else if(this.index==2){
					this.style.background='url(images/you7.jpg) no-repeat 14px 17px #fff';
				}
			});
		}
		
		for(var i=0;i<sidelis.length;i++){
			sidelis[i].index=i;
			hover(sidelis[i],function(){
				for(var j=0;j<sidelis.length;j++){
					sidelis[j].style.background='';
					sideviewhover[j].style.display='none';
				}
				var aColor=sideBarColor[this.index].getElementsByTagName('a');
				for(var j=0;j<aColor.length;j++){
					aColor[j].style.color='#fff';
				}
				if(this.index==0){
					this.style.background='url(images/youh1.jpg) no-repeat 14px 17px #e41a3a';
				}else if(this.index==1){
					this.style.background='url(images/youh2.jpg) no-repeat 16px 17px #e41a3a';
				}else if(this.index==2){
					this.style.background='url(images/youh3.jpg) no-repeat 17px 17px #e41a3a';
				}else if(this.index==3){
					this.style.background='url(images/youh4.jpg) no-repeat 20px 17px #e41a3a';
				}
				
				sideviewhover[this.index].style.display='block';	
				sideviewbox[this.index].style.display='block';
				sideBarh2[this.index].style.background='url(images/youjiantouh.jpg) no-repeat 170px 6px';
			},function(){
				sideviewhover[this.index].style.display='none';
				sideviewbox[this.index].style.display='none';
				sideBarh2[this.index].style.background='url(images/youjiantou.jpg) no-repeat 170px 6px';
				var aColor=sideBarColor[this.index].getElementsByTagName('a');
				aColor[0].style.color='#515151';
				for(var j=1;j<aColor.length;j++){
					aColor[j].style.color='#999';
				}
				if(this.index==0){
					this.style.background='url(images/you1.jpg) no-repeat 14px 17px #fff';
				}else if(this.index==1){
					this.style.background='url(images/you2.jpg) no-repeat 16px 17px #fff';
				}else if(this.index==2){
					this.style.background='url(images/you3.jpg) no-repeat 17px 17px #fff';
				}else if(this.index==3){
					this.style.background='url(images/you4.jpg) no-repeat 20px 17px #fff';
				}
			});
		}
		
		for(var i=0;i<topNavRightson7.length;i++){
			topNavRightson7[i].index=i;
			hover(topNavRightson7[i],function(){
				this.style.background='url(images/dsanjiao.jpg) no-repeat right  center #fff';
				this.style.height='27px';
			    this.style.borderLeft='1px solid #eee';
			     this.style.borderRight='1px solid #eee';
	
				 topNavRightyans[this.index].style.color='#c40000';
				xiala[this.index].style.display='block';
			},function(){
				this.style.background='url(images/sanjiao.jpg) no-repeat right  center #f2f2f2';
			this.style.height='26px';
				xiala[this.index].style.display='none';
				topNavRightyans[this.index].style.color='#999';
				 this.style.borderLeft='1px solid #f2f2f2';
			     this.style.borderRight='1px solid #f2f2f2';
			});
		}
		function movelo(){
			next++;
			if(next==bannerPic.length){
				next=0;
			}
			for(var i=0;i<bannerPic.length;i++){
				bannerCircle[i].style.background='black';
				bannerPic[i].style.zIndex=-1;
			}
			bannerPic[next].style.left='750px';
				bannerPic[next].style.zIndex=1;
			btnL.style.zIndex=2;
			btnR.style.zIndex=2;
			animate(bannerPic[next],{left:0});
		    animate(bannerPic[now],{left:-750});
		    bannerCircle[next].style.background='red';		   
		    now=next;
		}
		var timer=setInterval(movelo,3000);
		bannerBox.onmouseover=function(){
			clearInterval(timer);
			btnL.style.display='block';
			btnR.style.display='block';
		}
		bannerBox.onmouseout=function(){
			 timer=setInterval(movelo,3000);
			 btnL.style.display='none';
			 btnR.style.display='none';
		}
		for(var i=0; i<bannerCircle.length;i++){
					bannerCircle[i].index=i;
					bannerCircle[i].onmouseover=function(){

						for(var j=0;j<bannerCircle.length;j++){
							if(j>=this.index){
								bannerPic[j].style.left='750px';

							}
						 bannerCircle[j].style.background='black';
						 bannerPic[j].style.zIndex=-1;
					}
					this.style.background='red';	
					bannerPic[this.index].style.zIndex=1;
					btnL.style.zIndex=2;
					btnR.style.zIndex=2;		
				if(this.index==0){
					bannerPic[bannerCircle.length-1].style.left=0;
				animate(bannerPic[bannerCircle.length-1],{left:-750});
			     }else{
						bannerPic[this.index-1].style.left=0;
				       animate(bannerPic[this.index-1],{left:-750});
					}
				 bannerPic[this.index].style.left=750;
			animate(bannerPic[this.index],{left:0});
			now=this.index;
			 next=this.index;
					}
				}
		btnR.onmouseover=function(){
			 btnR.style.opacity='1';
			 btnR.style.filter='alpha(opacity:100)';
		}
		btnR.onmouseout=function(){
			 btnR.style.opacity='0.3';
			 btnR.style.filter='alpha(opacity:30)';
		}
		btnL.onmouseover=function(){
			 btnL.style.opacity='1';
			  btnL.style.filter='alpha(opacity:100)';
		}
		btnL.onmouseout=function(){
			 btnL.style.opacity='0.3';
			 btnL.style.filter='alpha(opacity:30)';
		}
		btnR.onclick=function(){
			movelo();
		}
		btnL.onclick=function(){
			next--;
			if(next==-1){
				next=bannerPic.length-1;
			}
			for(var j=0;j<bannerCircle.length;j++){
				 bannerCircle[j].style.background='black';
				  bannerPic[j].style.zIndex=-1;
			}
			bannerPic[next].style.left='-750px';
				bannerPic[next].style.zIndex=1;
			btnL.style.zIndex=2;
			btnR.style.zIndex=2;
			animate(bannerPic[next],{left:0});
		    animate(bannerPic[now],{left:750});
		    bannerCircle[next].style.background='red';		   
		    now=next;
		}
var rightSideDing=document.getElementById('rightSideDing');	
var dingweiTop=document.getElementById('dingweiTop');
var leftSideDing=document.getElementById('leftSideDing');
var ch=document.documentElement.clientHeight;
var leftA=leftSideDing.getElementsByTagName('a');
var guanliandingW=getClass("guanliangleft-contentBox");
var flag=true;
var flag1=false;
var now=0;
document.body.scrollTop=1;
var obj=document.body.scrollTop?document.body:document.documentElement;
window.onresize=function(){
	var ch=document.documentElement.clientHeight;
}
  rightSideDing.style.height=ch+'px';
 for(var i=0;i<leftA.length;i++){
 	leftA[i].index=i;
 	leftA[i].onclick=function(){
 		animate(obj,{scrollTop:guanliandingW[this.index].offsetTop-80},600,Tween.Linear);
 		for(var j=0;j<leftA.length;j++){
						leftA[j].style.background='url(images/dingwjiant.png) no-repeat 58px center';
						leftA[j].style.color='#666';
					}
				
					this.style.background='url(images/dingwjianth.png) no-repeat 58px center #e5374d';
					this.style.color='#fff';
					now=this.index;
 	}
 	leftA[i].onmouseover=function(){
 		for(var j=0;j<leftA.length;j++){
						if(j!=now){
							leftA[j].style.background='url(images/dingwjiant.png) no-repeat 58px center';
							leftA[j].style.color='#666';
						}
						
					}
					this.style.background='url(images/dingwjianth.png) no-repeat 58px center #e5374d'
					this.style.color='#fff';

 	}
 	leftA[i].onmouseout=function(){
				 if(this.index!=now){
					this.style.background='url(images/dingwjiant.png) no-repeat 58px center';
					this.style.color='#666';
				}
				
			}

 }
window.onscroll=function(){
	var tops=document.body.scrollTop||document.documentElement.scrollTop;
	if(tops>=700){
		if(flag1){
			animate(dingweiTop,{top:0});
			leftSideDing.style.display='block';
			animate(rightSideDingtop,{opacity:1});
			/*rightSideDingtop.style.opacity=1;*/
			rightSideDingtop.style.filter='alpha(opacity:100)';
			flag1=false;
			flag=true;
		}
		
	}else{
		if(flag){
			animate(dingweiTop,{top:-37});
			leftSideDing.style.display='none';
			animate(rightSideDingtop,{opacity:0});
			/*rightSideDingtop.style.opacity=0;*/
			rightSideDingtop.style.filter='alpha(opacity:0)';
			flag=false;
			flag1=true;
		}
		
	}

	for(var i=0;i<guanliandingW.length;i++){
		if(guanliandingW[i].offsetTop<=tops+80){
			for(var j=0;j<guanliandingW.length;j++){
			leftA[j].style.background='url(images/dingwjiant.png) no-repeat 58px center';	
			leftA[j].style.color='#666';

			}
			leftA[i].style.background='url(images/dingwjianth.png) no-repeat 58px center #e5374d';
			leftA[i].style.color='#fff';
			now=i;
		}
	}
	var ch=document.documentElement.clientHeight;
	for(var i=0;i<guanliandingW.length;i++){
		if(guanliandingW[i].offsetTop<=(tops+ch)){
			var imgs=$('img',guanliandingW[i]);
			for(var j=0;j<imgs.length;j++){
				var src=imgs[j].getAttribute('data-src');
				imgs[j].src=src;
			}
		}
	}
}

       

}