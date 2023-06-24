const User = require('../models/user');

exports.getUser = async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.status(200).json({ allUsers: users });
    } catch (err) {
      res.status(500).json({
        err: err,
      });
    }
  }


exports.postAddUser = async (req, res, next) => {
    try {
      const { name, email, phonenumber } = req.body;
      // console.log(name);
  
      const data = await User.create({
        name: name,
        email: email,
        phonenumber: phonenumber,
      });
      res.status(201).json({ newUserDetail: data });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  };

  exports.deleteUser = async (req, res, next) => {
    try{
        if(req.params.id === 'undefined'){
            console.log('id is missing');
            return res.status(400).json({err: 'ID is missing'});
        }
        const uId = req.params.id;
        await User.destroy({where: {id: uId}});
        res.status(200);
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
} 