
const ApiDataList = (state=[], action) =>{
    var olddata = Object.assign([], state); 
    
    if( action.type=="myapi"){
        olddata = action.alldata;
    }
  
    return olddata;
}

export default ApiDataList;