const http = require('http');
const config = require('./config/config');
const app = require('./app');
const PORT = process.env.PORT || config.PORT;

/** ==========================================
 * Server Setup
 * ===========================================
 */
const server = http.createServer(app);

server.listen(PORT,(err)=>{
    if(err){
        console.log('Error Starting Server',err);
    }else{
        console.log(`Server Running on ${config.printConsole.success(config.APP_URL)}`);
    }
});

