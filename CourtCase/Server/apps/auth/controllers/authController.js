const {User, Role} = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');
const tokenHandler = require('../../../utilities/tokenHandler');

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    var accessuser = await User.findOne({
        where: {
            email: email,
            password: password
        },
        include: Role
    });

    if (!accessuser) {
        return res.json(new ResponseModel(null, null, ['No user found']));
    }

    // Create token.
    const data = {
        id: accessuser.id,
        email: accessuser.email,
        name: accessuser.name,
        roleId: accessuser.roleId,
        roleName: accessuser.dataValues.Role.role
    };
    console.log(data);
    const token = tokenHandler.createToken(data);
    return res.json(new ResponseModel(token));
}

module.exports.test = async (req, res) => {
    console.log(req.headers);
    return res.json(new ResponseModel(req.headers));
}