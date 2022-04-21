const  { User: UserModel } = require('../models');

module.exports = {
  get: async (req, res) => {
    // console.log(req.params)
    // console.log(req.body)
    try {
      const userData = await UserModel.findOne({
        where: {id : req.params.id}
      })
      if (!userData) return res.status(404).json({ message: '사용자 없음' });
      res.status(200).json({ message: 'success', userInfo: userData });
      
    } catch (err) {
      res.status(500).json(err)
    }
  }
}