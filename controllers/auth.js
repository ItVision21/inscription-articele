
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
   
    const name = req.body.name;
    const email= req.body.email;
    const image = req.body.image;
    const info = req.body.info;

    //quering database
    db.query('SELECT email FROM demande WHERE email= ?',[email],async(error,results)=>
    {
        if(error)
        {
            console.log(error);
        
        }
        if(results.length>0)
        {
            return res.render("register",{
                message :'vous avez déja inscrit !'
            })
        }
    
   
    db.query('INSERT INTO demande SET ?',{name:name,email:email,image:image,info:info},(error,results)=>{
        if(error)
        {
            console.log(error);
        
        }
        else
        {
            return res.render("register",{
                message :'inscription réussite !'
            })
        
        }

    })


    });
   
}
