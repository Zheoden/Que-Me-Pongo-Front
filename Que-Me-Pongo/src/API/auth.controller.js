
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';



exports.loginUser = (req, res, next) => {
  const userData = {
    username: req.body.password,
    password: req.body.password
  }
  ({ email: "juan@gmail.com"}, (err, user) => {
    if (err) return res.status(500).send('Server error!');

  if (!user) {
    // email does not exist
    res.status(409).send({ message: 'Something is wrong' });
  } else {
    const resultPassword = bcrypt.compareSync(userData.password, user.password);
    if (resultPassword) {
      const expiresIn = 24 * 60 * 60;
      const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });

      const dataUser = {
        name: user.name,
        email: user.email,
        accessToken: accessToken,
        expiresIn: expiresIn
      }
      res.send({ dataUser });
    } else {
      // password wrong
      res.status(409).send({ message: 'Something is wrong' });
    }
  }
});
}
