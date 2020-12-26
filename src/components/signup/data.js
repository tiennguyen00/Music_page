var datas = [
    {name:'Liem',password:'Liem'}
];
//ten dang nhap co ton tai khong
function Query(nm){
    for(data in datas){
        if(data.name == nm)
            return true;
    }
    return false;
}
//them acc
function Add(nm,pass){
    datas.push({name:nm,password:pass});
}
//acc dung thong tin khong
function Query(nm,pass){
    for(data in datas){
        if(data.name == nm && datas.password == pass)//dung thong tin dang nhap
            return true;
    }
    return false;//sai thong tin dang nhap
}