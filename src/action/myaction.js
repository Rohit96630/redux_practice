
export const Savebook = () => {
  var bookinfo = {
    type: "newbook",
    bookname: document.getElementById("newbook").value
  };
  document.getElementById("newbook").value = "";
  return bookinfo;
};


export const Deletebook = (index) => {
  var bookinfo = {
    type: "deletebook",
    bookindex: index
  };
  return bookinfo;
}


export const Saveuser = () => {
  var userinfo = {
    type: "adduser",
    userdata: {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      edu: document.getElementById("edu").value
    }
  };
  return userinfo;
}

export const DeleteMyUser = (index) => {
  var userinfo = {
    type: "deleteuser",
    index: index
  };
  return userinfo;
}

export const PassToStore = (apidata) =>{
  var userinfo = {
    type: "myapi",
    alldata: apidata
  };
  document.getElementById("message").innerText = "All Api Data Sentto Successfully !";
  return userinfo;
}
