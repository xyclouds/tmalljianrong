 //getClass函数来实现用class类名获取元素的方法(兼容ie8以下浏览器)
//classname:指的是你所要获取元素的类名
//father:指的是你要获取元素的父级元素
function getClass(classname,father){
		//如果使用者没有传第二个参数，默认设为document
		father=father||document;
		//如果不是ie,就有getElementsByClassName的方法
		if(father.getElementsByClassName){
			return father.getElementsByClassName(classname)
		}else{
		/*ie没有getElementsByClassName的方法，解决办法：我们知道className（类名）不同元素可以重复用
		一个相同的类名，用className获取的结果是一个集合而不是一个单值，它的结果应该是类似数组的，所
		以ie8以下浏览器不能用className获取那我们只能用别的获取元素的方法，只有TagName有类似的结果，
		所以思路是先用TagName先将所有的元素获取到，在判断获取到的元素是否有同样的className，有就把他
		放到你要存放元素的数组中（需要注意一点的是一个元素的类名他可以不只一个，每个不同的类名用空格
		隔开-->split，再用一个函数单独控制）*/
			var arr=[];
			var all=father.getElementsByTagName("*");
			for(var i=0;i<all.length;i++){
				if(checkEqual(all[i].className,classname)){
				/*判断条件是一个返回值为真或假的函数（判断你获取到的元素类名有没有你要找的那个类名，
				有就为返回真，从头到尾都检测一遍，都没有返回假）*/
					arr.push(all[i]);

				}
			}
			return arr;

		}
	}
	//函数的作用是检测字符串中是否有你需要的类名
	//str:你获取元素的类名（字符串）
	//classname:是指你所要获取元素的类名
	function checkEqual(str,classname){
		var newarr=[];
		newarr=str.split(" ");
		for(var i in newarr){
			if(newarr[i]==classname){
				return true;
			}	
		}
		return false;
	}
	
/*********************************************************/
//纯文本兼容函数
	function getText(obj,val){
		if(val==undefined){
			if(obj.textContent){
				return obj.textContent
			}else{
				return obj.innerText
			}
		}else{
			if(obj.textContent){
				obj.textContent=val;
			}else{
				obj.innerText=val;
			}
		}
	}
/*********************************************************/
 function getStyle(obj,attr){
	if(obj.currentStyle){
		return parseInt(obj.currentStyle[attr])//80px;
		//80
	}else{
		return parseInt( getComputedStyle(obj,null)[attr])
	}
}
/*********************************************************/
//4.获取元素的兼容函数(id\类名、标签名)
/*$(".box")
$("#box")
$("div")*/
function $(selector,father){
	father=father||document;
	if(typeof selector=='string'){
		selector=selector.replace(/^\s*|\s*$/g,'');
		if(selector.charAt(0)=='.'){
			return getClass(selector.slice(1),father);
		}else if(selector.charAt(0)=='#'){
			return document.getElementById(selector.slice(1));
			//个人觉得id父级只能是document
		}else if(/^[a-zA-Z1-6]{1,6}$/.test(selector)){
			return father.getElementsByTagName(selector);
		}
	}else if(typeof selector=='function'){
		window.onload=function(){
			selector();
		}  
	}
}
/*********************************************************/
function getChild(father,type){
	type=type||'b';
	var all=father.childNodes;
	var arr=[];
	for(var i=0;i<all.length;i++){
		if(type=='a'){
			if(all[i].nodeType==1){
				arr.push(all[i]);
			}
		}else if(type=='b'){
			if(all[i].nodeType==1||(
				all[i].nodeValue.
			replace(/^\s*|\s*$/g,"")!=''&&all[i].nodeType==3)){
			arr.push(all[i]);
		   }
		}
		
	}
	return arr;
}
/*function getChild1(father,type){
	type=type||'b';
	var all=father.childNodes;
	var arr=[];
	for(var i=0;i<all.length;i++){
		if(type=='a'){
			if(all[i].nodeType==1){
				arr.push(all[i]);
			}
		}else if(type=='b'){
			if(all[i].nodeType==1||(//清文本中的空格
				(all[i].nodeValue=all[i].nodeValue.
			replace(/^\s*|\s*$/g,""))!=''&&all[i].nodeType==3)){
			arr.push(all[i]);
		   }
		}
		
	}
	return arr;
}*/
function getFirstChild(father,type){
	return getChild(father,type)[0];
}
function getLastChild(father,type){
	return getChild(father,type)[getChild(father,type).length-1]
}
function getTeChild(father,type,num){
	return getChild(father,type)[num];
	/*for(var i=0; i< newarr.length;i++){
		if(i==num){
			return newarr[num];
		}
	}*/
}

/*********************************************************/
//寻找上一个兄弟节点
function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType==8||(up.nodeType==3&&
		up.nodeValue.replace(/^\s*|\s*$/g,'')=='')){
		up=up.previousSibling;
	    if(up==null){
		return false;
	    }
	}
	return up;
}
/*********************************************************/
//寻找下一个兄弟节点
function getDown(obj){
	var down=obj.nextSibling;
	if(down==null){
		return false;
	}
	while(down.nodeType==8||(down.nodeType==3&&
		down.nodeValue.replace(/^\s*|\s*&/g,'')=='')){
		down=down.nextSibling;
		if(down==null){
			return false;
		}
	}
	return down;
}
/*********************************************************/
//插入到某个对象之后
function insertAfter(newobj,beiobj,father){
	var nextobj=getDown(beiobj);
	if(nextobj){
		var nextobj=getDown(beiobj);
	   return father.insertBefore(newobj,nextobj);
	}else{
		return father.appendChild(newobj);
	}
	 /*var nextobj=getDown(beiobj);
	 return father.insertBefore(obj,nextobj); */ 
	  
}
/*********************************************************/
//事件绑定的兼容函数
function addEvent(obj,event,fun){
	if(obj.addEventListener){
		 obj.addEventListener(event,fun,false)
	}else{
		 obj.attachEvent('on'+event,function(){
			fun.call(obj)
		})
	}
}
//事件删除的兼容函数
function deleteEvent(obj,event,fun){
	if(obj.removeEventListener){
		obj.removeEventListener(event,fun,false);
	}else{
		obj.detachEvent('on'+event,function(){
			fun.call(obj)
		})
	}
}
/*********************************************************/
//滚轮事件
function mouseWheel(obj,up,down){
	if(obj.attachEvent){ 
	obj.attachEvent("onmousewheel",scrollFn);  //IE、 opera 
	}else if(obj.addEventListener){ 
	obj.addEventListener("mousewheel",scrollFn,false);  //chrome,safari    -webkit
		obj.addEventListener("DOMMouseScroll",scrollFn,false);  //firefox     -moz
	} 
	function scrollFn(e){
		var ev=e||window.event;
		if(ev.preventDefault){
			ev.preventDefault();
		}else{
			ev.returnValue=false;
		}
		var val=ev.wheelDelta||ev.detail;
		if(val==3||val==-120){
			if(down){
				down();
			}
			
		}else if(val==-3||val==120){
			if(up){
				up();
			}
		}
	}
}
//15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/