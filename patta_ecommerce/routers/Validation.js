module.exports = (schema) => (req, res, next) => 
    {
        var data = req.method=="GET"?req.query:req.body;
        const {error} = schema.validate(data);
        if (error) 
        {
            res.status(400).json({
                status:false,
                msg : error.details[0].message
            })
        } else {
         next();
        }
  };