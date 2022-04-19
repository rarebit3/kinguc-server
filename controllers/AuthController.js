const { User, Castles } = require('../models')
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


const UpdatePassword = async (req, res) => {
  try {
    const { oldPass, newPass } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword (
        user.dataValues.passwordDigest,
        oldPass
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPass)
      await user.update({passwordDigest})
      return res.send({ status: 'Good', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
  } catch (error) {throw error}
}

const RegisterCastle = async (req, res) => {
  try {
    const newCastle = await Castles.create(req.body)
    res.send(newCastle)
} catch (error) {
    throw error
}
}

const CheckSession = async (req, res) => {
  const {payload} = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession,
  RegisterCastle
}
