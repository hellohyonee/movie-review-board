const  { User: UserModel, Review: ReviewModel } = require('../models');

module.exports = {
  get: async (req, res) => {
    try {
      res.send('success');
      // const id = req.prams.id;
      // const findUser = await UserModel.findOne({
      //   where: { id: id }
      // });
      // console.log(findUser)
      // if (!findUser) {
      //   return res.status(404).json({ message: '사용자가 아닙니다' });
      // } 
      // res.status(200).json({userInfo: findUser})
      // const reviewData = await ReviewModel.findAll({
      //   attributes: { exclude: ['updatedAt'] },
        
      //   include: [{
      //     module: UserModel,
      //     require: true
      //   }]
      // });

      // res.status(200).json({ message: 'success', reveiwInfo: reviewData });
      
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: '리뷰 조회 실패' });
    }
    
  },
  post: async (req, res) => {
    try {
      const id = req.params.userId;
      const movieInfo = req.body.data.movieInfo;
      const reviewContent = req.body.data.reviewData;

      console.log('영화정보: ', movieInfo);
      console.log('리뷰내용: ', reviewContent);
      
      const createReview = await ReviewModel.create({
        userId: id,
        title: movieInfo.title,
        year: movieInfo.year,
        genre: movieInfo.genre,
        runtime: movieInfo.runtime,
        poster: movieInfo.poster,
        content: reviewContent.content
      });
      if (createReview.title === '' || createReview.content === '') {
        res.status(400).json({ message: '리뷰 제목이 없거나 내용이 없습니다.' })
      }
      res.status(200).json({ message: 'success', reviewData: createReview });
    } catch (err) {
      console.log(err)
    }
    
  },
  delete: async (req, res) => {

  }
}