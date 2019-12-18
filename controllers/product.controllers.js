var dbconn=require("../config/db_connection");

var connection=dbconn.getConnection();
connection.connect();

var express=require("express");
var router=express.Router();

router.get("/",(req,resp)=>{
    connection.query("select * from product",(err,records,fields)=>{
        if(err){
            console.error("Error while fetching the data"); 
        }else{
            resp.send(records);
        }
    })

})

router.get("/:id",(req,resp)=>{
    connection.query("select * from product where id="+req.params.id,(err,records,fields)=>{
        if(err){
            console.error("Error while fetching the data"); 
        }else{
            resp.send(records);
        }
    })

})

router.post("/",(req,resp)=>{
    var id=req.body.id;
    var name=req.body.name;
    var description=req.body.description;
    var price=req.body.price;

    connection.query("insert into product values("+id+",+'"+name+"',+'"+description+"',"+price+")",(err,result)=>{
        if(err){
            console.error("Error while adding the data"+err); 
        }else{
            resp.send({insert:"Suceesfylly data inserted!!"});
        }
    })

})

router.put("/",(req,resp)=>{
    var id=req.body.id;
    var name=req.body.name; 
    var price=req.body.price;

    connection.query("update product set name='"+name+"',price="+price+" where id="+id,(err,result)=>{
        if(err){
            console.error("Error while updating the data"+err); 
        }else{
            resp.send({update:"Suceesfylly data updated!!"});
        }
    })
})

router.delete("/:id",(req,resp)=>{
    connection.query("delete from product where id="+req.params.id,(err,records,fields)=>{
        if(err){
            console.error("Error while deleting the data"); 
        }else{
            resp.send({delete:"Deleted Successfully..."});
        }
    })

})

module.exports=router;