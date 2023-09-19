const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration('posts', 'news', {
    type: 'boolean',
    nullable: false,
    defaultTo: false
});
