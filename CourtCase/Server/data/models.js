const {Sequelize, DataTypes} = require('sequelize');

// Create instance of sequalize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Pass@123',
    database: 'mycourt'
});

const Role = sequelize.define('Role', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false
    }

});


// Define login model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    name : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    phone : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    address : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    dob : {
        type : DataTypes.DATEONLY,
        allowNull : false
    },

    barCouncilNo : {
        type : DataTypes.STRING(20),
        allowNull : true
    },

    specialization :
    {
        type : DataTypes.STRING(50),
        allowNull : true
    },

    lawyer :
    {
        type : DataTypes.STRING(20),
        allowNull : true
    },
    roleId : {
        type : DataTypes.INTEGER,
        references : 
        {
              to : Role,
              allowNull : false
        }
    }
});

Role.hasOne(User,{
    
    sourceKey : 'id',
    foreignKey : 'roleId',
    constraints: true,
    onDelete: 'CASCADE'
})
User.belongsTo(Role,
    {
        foreignKey : 'roleId',
        targetKey : 'id'
    })
   



// Define case model
const Case = sequelize.define('Case',{
   
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    caseno : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    casedesc : {
        type : DataTypes.STRING(300),
        allowNull : true
    },
    casetype : {
        type : DataTypes.STRING(10),
        allowNull : false
    },
    paymentstatus : {
        type : DataTypes.STRING(10),
        allowNull : false
    },
    
    customerId: {
        type: DataTypes.INTEGER,
        references:{
            to: User,
            allowNull: false
        }
    }
});

// Create associations

User.hasOne(Case, {
    sourceKey: 'id',
    foreignKey: 'customerId',
    constraints: true,
    onDelete: 'CASCADE',
});
Case.belongsTo(User, {
    foreignKey: 'customerId',
    targetKey: 'id',
});

const Appointment = sequelize.define('Appointment',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    casedesc : {
        type : DataTypes.STRING(300),
        allowNull : false
    },
    date: {
        type : DataTypes.DATEONLY,
        allowNull   : false
    },
    time: {
        type : DataTypes.TIME,
        allowNull : false
    },
    lawyerId: {
        type : DataTypes.INTEGER,        //data from ui
    },
    customerId: {
        type : DataTypes.INTEGER,

    }
    
})
   

module.exports.Appointment = Appointment;

module.exports.Role = Role;

module.exports.User = User;

module.exports.Case = Case; 