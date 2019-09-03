const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const AuthController = require('./controllers/AuthController');

function getAllUsers() {
  const {NewUserBase: socketmodel} = require('./models');
  return socketmodel.findAll({
    raw: true,
  })
}


function getUserByToken(token){
  const {NewUserBase: socketmodel} = require('./models');
  return socketmodel.findOne({
    where: {
      token: token
    }
  });
}

function userRegister(name, passwd, token, email, role, login, ban) {
  console.log('Registration started');
  const {socketmodel} = require('./models');
  return socketmodel.create({
    raw: true,
    userName: name,
    password: passwd,
    token: token,
    email: email,
    role: role,
    ban: ban,
    login: login
  })
}

app.use(jsonParser);
app.use(cors());

app.post('/login', (req, res)=> AuthController.login(req, res));

app.post('/token', async function (req, res) {
  console.log(req.body);
  const [ isToken ] = await checkOutToken(req.body);
  console.log('Token checkout finished...');
  console.log(isToken);
  if (isToken) {
    res.statusCode = 200;
    res.send(isToken);
  } else {
    res.statusCode = 400;
  }
});

app.get('/getUsers', async function (req, res) {
  const users = await getAllUsers();
  res.send(users);
  res.statusCode = 200
});

app.put('/modify', async function (req, res) {
  console.log(req.body);
  const user = await getUserByToken(req.body.token);
  console.log('User returns' + user);
  const data = await modifyUser(user, req.body);
  console.log(data);
  res.send(data);
  res.statusCode = 200
});
app.put('/register', async function (req, res) {
  const {userName, password, token, email, role, login, ban} = req.body;
  console.log(req.body);
  if (req.body) {
    try {
      const data = await userRegister(userName, password, token, email, role, login, ban);
      console.log(data);
      if (data) {
        console.log(data);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }

  } else {
    res.writeHead(res.statusCode = 400);
    res.send('This user is already registered, Choose another name!');}
});

app.post('/remove', async function (req, res) {
  console.log('Removing a user');
  const removed =  await removeUserByToken(req.body);
  console.log(removed);
  if (removed === 1) {
    res.send(req.body);
    res.statusCode = 200
  } else {
    res.writeHead(res.statusCode = 400);
    res.send('Something wend wrong ... User was not removed!');
  }
});

app.listen(3001, function () {
  console.log('App listening on port 3001!');
});


// const WebSocket = require('ws');
//
// const wss = new WebSocket.Server({ port: 3030 });
//
// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(data) {
//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(data);
//       }
//     });
//   });
// });
