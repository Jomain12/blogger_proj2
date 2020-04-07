"use strict";var sequelize,fs=require("fs"),path=require("path"),Sequelize=require("sequelize"),basename=path.basename(module.filename),env=process.env.NODE_ENV||"development",config=require(__dirname+"/../config/config.json")[env],db={};sequelize=process.env.JAWSDB_URL?new Sequelize(process.env.JAWSDB_URL):(console.log("USING LOCAL"),new Sequelize(config.database,config.username,config.password,config)),fs.readdirSync(__dirname).filter(function(e){return 0!==e.indexOf(".")&&e!==basename&&".js"===e.slice(-3)}).forEach(function(e){console.log("DB USING:"+e);var n=sequelize.import(path.join(__dirname,e));console.log("MODELNAME:"+n.name),db[n.name]=n}),Object.keys(db).forEach(function(e){db[e].associate&&db[e].associate(db)}),db.sequelize=sequelize,module.exports=db;