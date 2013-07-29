/**
 * Class to build the user object which is then inserted into records
 * in our database.
 *
 * userId alone does not give enough information on its own (querying for
 * it leaves out many fields provided by the Login with Google service), so
 * we will instead store only the fields that we need.
 *
 * This is likely an antipattern.
 *
 * User is expected to be passed in from Meteor.user() - the current user
 */
UserBuilder = function (user) {
  /* user id */
  this._id = user._id

  /* image url */
  this.picture = user.services.google.picture

  /* email */
  this.email = user.services.google.email

  /* given name */
  this.given_name = user.services.google.given_name

  /* family name */
  this.family_name = user.services.google.family_name
}
