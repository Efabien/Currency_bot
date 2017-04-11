module.exports=function(){
	var _getAll=function(res,data){
		res.send(data);
	}
	return{
		getAll:_getAll
	}
}