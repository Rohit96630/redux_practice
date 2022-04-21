
const Booklist = (state=[], action) =>{
    const oldandnewbook = Object.assign([], state); // to captute old value from state
    
    if(action.type=="newbook"){
        oldandnewbook.unshift(action.bookname);
    }


    if(action.type=="deletebook"){
        oldandnewbook.splice(action.bookindex, 1);
    }
    return oldandnewbook;
}

export default Booklist;