/**
 * Created by leo on 17-7-15.
 */
var request = require('superagent');


module.exports = {
  /**
   * admin user login
   * @param agent
   * @param user_info
   * @param callback
   */
  login: function (agent, user_info, callback) {
    return agent.post(sails.getBaseurl() + "/api/v1/adminuser/login")
      .send(user_info)
      .end(function (err, res) {
        callback(err, res);
      });
  }
};
