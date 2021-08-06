
const mysql =require("mysql");

const db = mysql.createConnection(
    {
        host:process.env.DATABASE_HOST,
        user:process.env.DATABASE_USER,
        password:process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE

    }
);
exports.register =(req,res)=>{
    console.log(req.body);//grabbing all data send fromm the form 
   
   
    const email= req.body.email;
    const password =req.body.password;
    //quering database
    db.query('SELECT email FROM admins WHERE email= ? AND password= ? ',[email,password],async(error,results)=>
    {
        
        if(error)
        {
            console.log(error);
        
        }
        if(results.length>0)
        {
            return res.render("index",{
                message :'welcome'
            })
        }
        else
        {
            return res.render("register",{
                message :'Email ou mot de passe incorect'
            })  
        }
    });
   
}
