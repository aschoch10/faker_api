//imports express
const express = require("express");
//creating instance of express to use 
const app = express();
const faker = require('@faker-js/faker');
//any port works/ 8000 and 5000 are the common ones obviously 
const port = 2222;


class User {
    constructor(){
        this._id=faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneWextension = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            city: faker.address.city(),
            state: faker.address.state(),
            streetAddress: faker.address.streetAddress(),
            zip: faker.address.zipCode()
            
        }
    }
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/api/users/new", (req, res)=>{
    let newUser = new User()
    res.json({result:newUser})
})

app.get("/api/company/new", (req, res)=>{
    let newCompany = new Company()
    res.json({result:newCompany})
})

//req and res are commonly used, longer for this first project
app.get("/api/test",(request, response)=>{
    response.json({message:"Hello test2!"})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );