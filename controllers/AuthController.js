const { User } = require('../models')
const middleware = require('../middleware')


const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { magicEmail: req.body.magicEmail },
      raw: true
    })

    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        magicEmail: user.magicEmail,
        username: user.username,
        name: user.name,
        highAbility: user.highAbility
      }
      let token = middleware.createToken(payload)
return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { magicEmail, password, name, username, highAbility} = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ magicEmail, passwordDigest, name, username, highAbility })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
