import mongoose from "mongoose";

type ConnectionObject = {
     isConnected?:number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
     if(connection.isConnected){
          console.log(" already Db connected");
          return 
          
     }
     try {
         const db= await mongoose.connect(process.env.MONGODB_URL || '')
         connection.isConnected= db.connections[0].readyState

         console.log("db connected");
         console.log(db)
         
          
     } catch (error) {
          console.log("Database connection error",error)
          process.exit(1)
          
     }
     
}
export default dbConnect