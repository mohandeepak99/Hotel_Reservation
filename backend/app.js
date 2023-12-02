const express=require("express");

const app = express();

const cors=require("cors");

const bodyparser=require("body-parser");

const monogodb=require("mongodb").MongoClient;
const { time } = require("console");
const { ComponentFactoryResolver } = require("@angular/core");

app.use((cors()));

app.use(bodyparser.json());


var db;

monogodb.connect("mongodb+srv://bharathbarma94:Cse*39110136@cluster0.03pww.mongodb.net/collegebatch1?retryWrites=true&w=majority",(error,result)=>{
    if(error)
    {
        console.log("DB not connect");
        console.log(error);
    }else{
        db = result.db("collegebatch1");
        console.log("DB Connected");
    }

});


app.post("/login",(req,res)=>{

    
    console.log(req.body);

db.collection("usersinfo").find(req.body, {projection:{_id:1,uname:1}}).toArray((error,data)=>{
  if(error){
      res.status(403).json("Couldnot find login doc");
  }else{
      res.json(data);
  }  
})

});

app.post("/register",(req,res)=>{
   req.body_id=new Date().getTime();


    console.log(req.body);

    db.collection("usersinfo").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("Error in insert query");
        }
        else{
            res.json("User Registered successfully!.");
        }
    });

});

app.get("/allhotels",(req,res)=>{

    console.log(req.body);

    db.collection("hotelreserve").find(null, {projection:{upassword : 0}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Couldnot find login doc");
        }else{
            res.json(data);
        }  
    });
     
    


});

app.post("/addhotelss",(req,res)=>{
    console.log(req.body);
    req.body._id=new Date().getTime();

    db.collection("hotelreserve").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("Couldnot add hotels ");
        }
        else{
            res.json("Hotel added successfully");
        }

    });
});
app.get("/hotelnamecheck/:hotelname",(req,res)=>{

    console.log(req.params.hotelname);

    db.collection("hotelreserve").find({uname:req.params.hotelname},{projection:{_id:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in finding hotelname ");
        }
        else{
            res.json(data);
        }
    });


});
app.get("/allusers",(req,res)=>{
    console.log(req.body);
    db.collection("usersinfo").find().toArray((error,data)=>{
        if(error){
            res.status(403).json("Could not find all the users")

        }else{
            res.json(data);
        }
    })
})

app.get("/regnameavailibilty/:u",(req,res)=>{

console.log(req.params.u);

db.collection("usersinfo").find({uname:req.params.u},{projection:{_id:1}}).toArray((error,data)=>{
    if(error){
        res.status(403).json("Error in finding username");

    }
    else{
        res.json(data);
    }
})
})

app.get("/gethotel/:hotelid",(req,res)=>{
    console.log(req.params);
    db.collection("hotelreserve").find({_id : Number(req.params.hotelid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in finding doc ");
        }
        else{
            res.json(data);
        }
    });
})

app.put("/updatehotel",(req,res)=>{

    console.log(req.body);

    var condition={_id:req.body._id};
    var newValues={$set:{uname:req.body.uname,uemail:req.body.uemail,urate:req.body.urate,uphone:req.body.uphone}}

    db.collection("hotelreserve").update(condition,newValues,(error,data)=>{
        if(error){
            res.status(403).json("Error in updating  ");

        }else
        {
            res.json("hotel updated successfully");
        }
    })

})
app.delete("/deletehotel/:hotelid",(req,res)=>{
    console.log(req.params);

   db.collection("hotelreserve").deleteOne({_id: Number(req.params.hotelid)},(error,data)=>{
       if(error){
        res.status(403).json("Error in deleting ");


       }
       else{
           res.json("User Deleted successfully")
       }
   });

});
app.post("/roomr",(req,res)=>{
    console.log(req.body);
    req.body._id=new Date().getTime();
    db.collection("reservations").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("Error in booking a room")

        }else{
            res.json("Your reservation is successfully");
        }
    })

});

app.get("/allcustomers",(req,res)=>{
    db.collection("reservations").find().toArray((error,data)=>{
        if(error){
            res.status(403).json("Coulnot find cust data")
        }else{
            res.json(data);
        }
    })
})

app.get("/booknow/:hotelid",(req,res)=>{
    db.collection("hotelreserve").find({_id:Number(req.params.hotelid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Coulnot find req data")
        }else{
            res.json(data);
        }
    })
})

app.get("/mybookings/:userId",(req,res)=>{

    console.log(req.params.userId);

    db.collection("reservations").find({requestedby:String(req.params.userId)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in finding hotelname ");
        }
        else{
            res.json(data);
        }
    });


});
app.get("/search/:searchtext?",(req,res)=>{

    console.log(req.params);

    if(req.params.searchtext!=undefined){

        var search = new RegExp(req.params.searchtext, 'i');
        var searchcond = {uname :search};
    }
    else{
        var searchcond = null;    
    }

    db.collection("hotelreserve").find(searchcond).toArray((error,data)=>{

        res.json(data);
    })


});

app.get("/searchinbookingpage/:searchtext?",(req,res)=>{

    console.log(req.params);

    if(req.params.searchtext!=undefined){

        var search = new RegExp(req.params.searchtext, 'i');
        var searchcond = {uname :search};
    }
    else{
        var searchcond = null;    
    }

    db.collection("hotelreserve").find(searchcond).toArray((error,data)=>{

        res.json(data);
    })


});

module.exports=app;