const app = require('./index.js');
let port = process.env.PORT || 3033;
app.listen(port, () => console.log(`listening to port ${port}`));