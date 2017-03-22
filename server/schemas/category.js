var mongoose  = require("mongoose");
var DB = require("../models/db");
var Schema = mongoose.Schema,
    ObjectId  = Schema.Types.ObjectId;

var CategorySchema = new Schema({
    id:Number,
    name:String,
    list:[Number],
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default : Date.now()
        }
    }
});

CategorySchema.pre("save",function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt  = Date.now();
    }else{
        this.meta.createAt   = Date.now();
    }
    next();
});
//定义个静态的方法，这个方法可以通过model直接去调用
CategorySchema.statics = {
    //得到所有文章
    fetch(){
      return this
            .find({})
            .sort("meta.updateAt")
            .exec();
    },

    findById(id){ 
        return this
            .findOne({id:id})
            .exec()
    },
    removeBy_Id(id){
        return this
            .remove({_id:id})
            .exec()
    },
    removeById(id,cb){
        return this
            .remove({id:id})
            .exec(cb)
    },
    indexGet(data){
        return this
            .find({})
            .sort({ "meta.updateAt" : 1 })
            .skip(data.start)
            .limit(data.count)
            .exec()
    }

};

module.exports = CategorySchema;