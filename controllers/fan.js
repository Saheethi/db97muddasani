var fan = require("../models/fan");

// List of all fans
exports.fan_list = async function (req, res) {
  try {
    thefan = await fan.find();
    res.send(thefan);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific fan.
//exports.fan_detail = function (req, res) {
  //res.send("NOT IMPLEMENTED: fan detail: " + req.params.id);
//};
exports.fan_detail = async function(req, res) { 
  console.log("detail"  + req.params.id) 
  try { 
      result = await fan.findById( req.params.id) 
      res.send(result) 
  } catch (error) { 
      res.status(500) 
      res.send(`{"error": document for id ${req.params.id} not found`); 
  } 
}; 

// Handle fan create on POST.
exports.fan_create_post = async function (req, res) {
  console.log(req.body);
  let document = new fan();
  document.Brand = req.body.Brand;
  document.price = req.body.price;
  document.color = req.body.color;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle fan delete form on DELETE.
//exports.fan_delete = function (req, res) {
  //res.send("NOT IMPLEMENTED: fan delete DELETE " + req.params.id);
//};
exports.fan_delete = async function(req, res) { 
  console.log("delete "  + req.params.id) 
  try { 
      result = await fan.findByIdAndDelete( req.params.id) 
      console.log("Removed " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": Error deleting ${err}}`); 
  } 
}; 

// Handle fan update form on PUT.
//exports.fan_update_put = function (req, res) {
  //res.send("NOT IMPLEMENTED: fan update PUT" + req.params.id);
//};
exports.fan_update_put = async function(req, res) { 
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
  try { 
      let toUpdate = await fan.findById( req.params.id) 
      // Do updates of properties 
      if(req.body.Brand)  
             toUpdate.Brand = req.body.Brand; 
      if(req.body.price) toUpdate.price = req.body.price; 
      if(req.body.color) toUpdate.color = req.body.color; 
      let result = await toUpdate.save(); 
      console.log("Sucess " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
  } 
}; 

// VIEWS
// Handle a show all view
exports.fan_view_all_Page = async function (req, res) {
  try {
    thefan = await fan.find();
    res.render("fan", { title: "fan Search Results", results: thefan });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

/* GET detail fan page */ 
 //router.get('/detail', fan_controllers.fan_view_one_Page); 

// Handle a show one view with id specified by query 
exports.fan_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await fan.findById( req.query.id) 
        res.render('fandetail',  
{ title: 'fan Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a fan. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.fan_create_Page =  function(req, res) { 
  console.log("create view") 
  try{ 
      res.render('fancreate', { title: 'fan Create'}); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 

// Handle building the view for updating a fan. 
// query provides the id 
exports.fan_update_Page =  async function(req, res) { 
  console.log("update view for item "+req.query.id) 
  try{ 
      let result = await fan.findById(req.query.id) 
      res.render('fanupdate', { title: 'fan Update', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
  } 
}; 

// Handle a delete one view with id from query 
exports.fan_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await fan.findById(req.query.id) 
        res.render('fandelete', { title: 'fan Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 