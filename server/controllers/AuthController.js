
class AuthController {

    async userLookUp (name, passwd) {
        console.log('Searching a user');
        const {NewUserBase: socketmodel} = require('../models');
        return socketmodel.findAll({
            raw: true,
            where: {
                userName: name,
                password: passwd
            }
        });
    };

    async login(req, res){
        if (req.body) {
            const user = await this.userLookUp(req.body.userName, req.body.password);
            console.log(user);
            if (user) {
                const [data] = user;
                res.send(data);
                console.log('Query finished')
            }
        } else {
            res.statusCode = 400
        }
    }

}

module.exports = new AuthController();
