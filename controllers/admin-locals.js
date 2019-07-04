// res.locals() object for admin middleware

exports.adminLocals = (req, res, next) => {
   res.locals.ifSpellComponent = false
}