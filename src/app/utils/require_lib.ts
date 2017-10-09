/* 手动引入js函数 */
export function _require(src?:string,cb?:any){
	const _body = document.querySelector("body");
	const _elem = document.createElement("script");

	/* 设置script的属性并追加到body */
	_elem.type = "text/javascript";
	_elem.src = src || "";
	_body.appendChild(_elem);

	_elem.onload = function(){
		if(cb !== undefined && typeof cb == 'function')cb();
	}
}