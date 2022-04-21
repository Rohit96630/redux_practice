const Userlist = (state=[], action) =>{
    const oldandnewuser = Object.assign([], state); // to captute old value from state
    
    if(action.type=="adduser")
    {
        oldandnewuser.push( action.userdata );
    }

    if(action.type=="deleteuser")
    {
        oldandnewuser.splice( action.index, 1 );
    }

    return oldandnewuser;
}

export default Userlist;