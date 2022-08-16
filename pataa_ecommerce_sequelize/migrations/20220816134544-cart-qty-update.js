'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'carts',
      'discount',
       DataTypes.FLOAT
    );
  },

  async down (queryInterface, DataTypes) {    
  }
};
