const path = require('path');
const config = {
    APP_DIR :{
        config : __dirname,
        pages : path.join(__dirname,'../pages/'),
        nodeModules : path.join(__dirname,'../node_modules/'),
    },
    APP_PATH : path.dirname(__dirname),
    PORT:8081,
    APP_URL: 'http://localhost:8081',
    printConsole : {
        success:function(msg){
            return `\x1B[32m${msg}\x1B[0m`;
        },
        error:function(msg){
            return `\x1B[31m${msg}\x1B[0m`;
        },
        warn:function(msg){
            return `\x1B[33m${msg}\x1B[0m`;
        }
    },

    MAIL_SETTING : {
        user : "abhishek.prajapati.psa@postmortemshala.co.in",
        pass : "Softpro@1999"
    }

}
module.exports = config;