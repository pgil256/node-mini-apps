/** User related routes. */

const User = require('../models/user');
const express = require('express');
const router = new express.Router();
const ExpressError = require('../helpers/expressError');
const { authUser, requireLogin, requireAdmin } = require('../middleware/auth');

/** GET /
 *
 * Get list of users. Only logged-in users should be able to use this.
 *
 * It should return only *basic* info:
 *    {users: [{username, first_name, last_name}, ...]}
 *
 */

router.get('/', authUser, requireLogin, async function(req, res, next) {
  //Bug 2: Listing route should only return username, first name, last name
  try {
    let users = await User.getAll();
    let out = users.map(u => ({
      username: u.username,
      first_name: u.first_name,
      last_name: u.last_name
    }));
    return res.json({ out });
  } catch (err) {
    return next(err);
  }
}); // end

/** GET /[username]
 *
 * Get details on a user. Only logged-in users should be able to use this.
 *
 * It should return:
 *     {user: {username, first_name, last_name, phone, email}}
 *
 * If user cannot be found, return a 404 err.
 *
 */

router.get('/:username', authUser, requireLogin, async function(
  req,
  res,
  next
) {
  try {
    let user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[username]
 *
 * Update user. Only the user themselves or any admin user can use this.
 *
 * It should accept:
 *  {first_name, last_name, phone, email}
 *
 * It should return:
 *  {user: all-data-about-user}
 *
 * It user cannot be found, return a 404 err. If they try to change
 * other fields (including non-existent ones), an error should be raised.
 *
 */

//Bug 3 Remove requireAdmin as paramater so users can patch themselves
router.patch('/:username', authUser, requireLogin, async function(
  req,
  res,
  next
) {
  try {

    // get fields to change; remove token so we don't try to change it
    let fields = { ...req.body };
      delete fields._token;

    //Throw out any users who aren't authenticated
    if (!req.curr_admin && req.curr_username !== req.params.username) {
      throw new ExpressError('Only  that user or admin can can access.', 401);
    }

    //Bug 4: A user can not change admin status, username, or password
    //Do not allow non-admin to set admin status
     if (!req.curr_admin && req.body.admin) {
      throw new ExpressError('Non-admins cannot change admin status.', 401);
    }
    //Do not allow non admin to update user/pw
    if (req.body.username || req.body.password) {
      throw new ExpressError('Updating username or password not allowed.', 401);
    }

    let user = await User.update(req.params.username, fields);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
}); // end

/** DELETE /[username]
 *
 * Delete a user. Only an admin user should be able to use this.
 *
 * It should return:
 *   {message: "deleted"}
 *
 * If user cannot be found, return a 404 err.
 */

router.delete('/:username', authUser, requireAdmin, async function(
  req,
  res,
  next
) {
  try {
    //Bug 5: Only respond with 'deleted' if you get a 200 status code
    User.delete(req.params.username);
    if (response.statusCode ==200){
    return res.json({ message: 'deleted' });
    } return res.json ({ message: 'deletion unsuccessful' });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
