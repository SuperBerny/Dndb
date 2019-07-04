// Admin Routes Controller

//// Admin HomePage
exports.getAdminHome = (req, res, next) => {
   res.render('admin/admin', {
      layout: 'admin',
      path: '/admin',
      pageTitle: 'Admin'
   });
};

//// Admin Add Class
exports.getAddClass = (req, res, next) => {
   res.render('admin/add-class', {
      layout: 'admin',
      path: '/admin/add-class',
      pageTitle: 'Add Class Info'
   });
};

//// Admin Add Race
exports.getAddRace = (req, res, next) => {
   res.render('admin/add-race', {
      layout: 'admin',
      path: '/admin/add-race',
      pageTitle: 'Add Race Info'
   });
};

//// Admin Add Spell
exports.getAddSpell = (req, res, next) => {
    const Component = false;
   res.render('admin/add-spell', {
      layout: 'admin',
      path: '/admin/add-spell',
      pageTitle: 'Add Spell Info',
      ifComponent: true,
   });
};