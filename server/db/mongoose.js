var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, 
  useFindAndModify: false,
  useCreateIndex: true 
});
/* https://github.com/Automattic/mongoose/issues/7108 */
// mongoose.set('useNewUrlParser': true);
// mongoose.set('useFindAndModify': false);
// mongoose.set('useCreateIndex': true);

module.exports = {mongoose};
