module.exports = function(sequelize, dataTypes) {
  
  var burgers = sequelize.define('burgers', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: dataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true,
    createdAt: 'Date Listed',
    updatedAt: 'Date Eaten'
  });
  return burgers
}
