const cron = require('node-cron');

let Mail = cron.schedule('0 12 * * *', () => { 
  try {
    //Do something here
  } catch (error) {
    throw error;        
  }
});   

Mail.start();
