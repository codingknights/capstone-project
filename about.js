const express=require('express')
const router=express.Router()


router.get(
    "/",
    function(req,res){
        res.send("about us")
    });

router.post(
    "/",
    function(re,res){
        res.send("about us posted")
    });

router.put(
    "/",
    function(req,res){
    res.send("updated successfully")
    });
    
router.delete(
    "/",
    function(req,res){
        res.send("deleted successfully")
    });


//exporting the router inorder to access from every other file
    module.exports=router