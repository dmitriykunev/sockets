
class AuthController {

    async userLookUp (name, password) {
        console.log('Searching a user');
        const {socketmodel} = require('../models');
        return socketmodel.findAll({
            raw: true,
            where: {
                userName: name,
                password: password
            }
        });
    };

    async login(req, res){
        if (req.body) {
            const user = await this.userLookUp(req.body.login, req.body.password);
            console.log(user);
            if (user) {
                const [payload] = user;
                res.send(payload);
                console.log('Query finished')
            }
        } else {
            res.statusCode = 400
        }
    }

}

module.exports = new AuthController();
