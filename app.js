const express = require('express');
const IndexRoute = require('./routes/IndexRoute');
const userRoute = require('./routes/userRoute');
const config = require('./config/config');

/** ==========================================
 * App Setup
 * ===========================================
 */
const app = express();

app.set('view engine','ejs');
app.set('views','./views');

/**
 * ============================================
 * Use : Middlewares
 * ===========================================
 */
(function(){
    app.use('/',IndexRoute);
    app.use('/api/',userRoute);
    app.use('/api/*',(req,resp,)=>{
        resp.status(404).json({
          code : 404,
          status : false,
          message : "Bad Request",
          data:[],
          error : false,
        });
    });
    app.use('*',(req,resp)=>{
        resp.status(200)
        .sendFile(`${config.APP_PATH}/pages/404.html`);
    });
})();

app.use((req,resp,next)=>{
  resp.status(404).json({
    code : 404,
    status : false,
    message : "Bad Request",
    data:[],
    error : false,
  });
  next();
});


module.exports = app;
