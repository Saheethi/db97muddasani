var fan = require("../models/fan");// List of all Costumes
exports.fan_list = async function (req, res) {
try {
thefan = await fan.find();
res.send(thefan);
} catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
}
};// for a specific Costume.
exports.fan_detail = function (req, res) {
res.send("NOT IMPLEMENTED: fan detail: " + req.params.id);
};// Handle Costume create on POST.
exports.fan_create_post = async function (req, res) {
console.log(req.body);
let document = new fan();
document.Brand = req.body.Brand;
document.types = req.body.types;
document.cost = req.body.cost;
try {
let result = await document.save();
res.send(result);
} catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
}
};// Handle Costume delete form on DELETE.
exports.fan_delete = function (req, res) {
res.send("NOT IMPLEMENTED: fan delete DELETE " + req.params.id);
};// Handle Costume update form on PUT.
exports.fan_update_put = function (req, res) {
res.send("NOT IMPLEMENTED: fan update PUT" + req.params.id);
};// VIEWS
// Handle a show all view
exports.fan_view_all_Page = async function (req, res) {
try {
thefan = await Costume.find();
res.render("fan", { title: "fan Search Results", results: thefan });
} catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
}
};

/*




var fan = require('../models/fan'); 



// List of all Costumes 
exports.costume_list = async function(req, res) { 
    try{ 
        theCostumes = await Costume.find(); 
        res.send(TheFans); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// List of all Costumes 
//exports.costume_list = function(req, res) { 
    //res.send('NOT IMPLEMENTED: Costume list'); 
//}; 
 
// for a specific Costume. 
exports.costume_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Fan detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.costume_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Fan create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.costume_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Fan delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.costume_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Fan update PUT' + req.params.id); 
};*/