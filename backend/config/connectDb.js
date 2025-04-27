const mongoose=require('mongoose');

connectDb=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection error:',error.message)
        process.exit(1)
    }
}

module.exports=connectDb;