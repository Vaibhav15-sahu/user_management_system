const {data} = require("../model/userData");

// get Users Data
const getUsers = (req, res)=>{
    res.status(200).json(data);
};

// Create user
const createUser = (req, res)=>{
    const {name, email, phone, address } = req.body ;
    if(!name || !email || !phone || !address ){
        res.status(400).json({message : "All feilds are required"});
    }
    data[0].numberofUsers += 1;
    const newUser = { id: data[0].numberofUsers , name, email, phone, address};
    if(name && email && phone && address){
        data.push(newUser);
        res.send('<script>window.location.href = "/";</script>');
    }
};

// get User by it's Id
const getUserById = (req,res)=>{
    const uid = parseInt(req.params.id);
    const u = data.find( ele => {
        return ele.id === uid;
    });
    res.status(200).json(u);
};

// update User
const updateUser = (req, res)=>{
    const uid = parseInt(req.params.id);
    data.map( ele => {    
        if(ele.id === uid){
            const {name, email, phone, address } = req.body ;
            if(name)
                ele.name = name ;
            if(email)
                ele.email = email;
            if(phone)
                ele.phone = phone ;
            if(address)
                ele.address = address ;
        }
        return ele ;
    });
    res.status(200).json({message : `Update User Deatails for ${req.params.id} `});
};

// delete User
const deleteUser = (req, res)=>{
    const uid = parseInt(req.params.id);
    data.filter( (val, idx, id) => {
        if(val.id === uid){
            data.splice(idx, 1);
            data[0].numberofUsers -= 1;
            return true ;
        }
        return false ;
    })
    res.status(200).json({message :  `Delete User for ${req.params.id} `});
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}