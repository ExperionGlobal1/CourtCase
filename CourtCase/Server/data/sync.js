
const {User, Role,  Case} = require('./models');
Role.sync({alter: true});
User.sync({alter: true});
// Case.sync({alter: true});

