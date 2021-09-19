const Camp = require('../models/Camp');
const asyncHandler = require('../middlewares/asyncHandler');

exports.addCampDetail = asyncHandler(async (req, res, next) => {
  const campDetail = await Camp.bulkCreate(req.body);
  let name = req.body.name,
  image_name = req.body.image_name,
  city = req.body.city,
  latitude = req.body.latitude,
  longitude = req.body.longitude,
  description = req.body.description
  /*let data = await Camp.create({"name":"Free medical camp","image_name":"camp1","city":"delhi","latitude":28.5058,"longitude":77.4086,"description":"Camp for kids" },
  {"name":"Free medical camp","image_name":"camp1","city":"delhi","latitude":28.5058,"longitude":77.4086,"description":"Camp for kids" },
  {"name":"Free medical camp","image_name":"camp1","city":"delhi","latitude":28.5058,"longitude":77.4086,"description":"Camp for kids" });*/
  user = await Camp.create({ name,  image_name, city,latitude,longitude,description});
  res.json({
    campDetail,
    status: 200,
    data:'ok'
  });
  
});

exports.getCampDetail = asyncHandler(async (req, res, next) => {
  const campDetails = await Camp.findAll({ where: req.query });

  res.json({
    numberOfcamps: campDetails.length,
    campDetails,
    status: 200,
   
  });
});
