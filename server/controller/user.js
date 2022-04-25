const  { User: UserModel, Review: ReviewModel } = require('../models');

module.exports = {
  get: async (req, res) => {
    console.log(req.params)
    // console.log(req.body)
    try {
      const id = req.params.userId;
      const userData = await UserModel.findOne({
        where: { userId: id }
      });
      if (!userData) return res.status(404).json({ message: '사용자 없음' });
      

      res.status(200).json({ message: 'success', userInfo: userData });
      
    } catch (err) {
      res.status(500).json(err)
    }
  }
}