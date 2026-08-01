import  {config} from 'dotenv'

 config()

 const envConfig={
    port:process.env.PORT,
    mongodbString:process.env.MONGO_URL
 }

 export default envConfig