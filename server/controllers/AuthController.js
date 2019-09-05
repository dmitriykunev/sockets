
class AuthController {

    async userLookUp (login, password) {
        console.log('Searching a user');
        const {socketmodel} = require('../models');
        return socketmodel.findAll({
            raw: true,
            where: {
                login: login,
                password: password
            }
        });
    };

    // async getAllUsers() {
    //     const {socketmodel} = require('./models');
    //     return socketmodel.findAll({
    //       raw: true,
    //     })
    //   }

    async login(req, res){
        if (req.body) {
            const user = await this.userLookUp(req.body.login, req.body.password);
            // const userList = await this.getAllUsers;
            const [payload] = user;
            console.log(user);
            if (user) {
                res.send(payload);
                console.log('Query finished')
            }
        } else {
            res.statusCode = 400
        }
    }

}

module.exports = new AuthController();
