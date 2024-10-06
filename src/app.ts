import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!")
    // Start your application logic here
}).catch(error => console.log(error))