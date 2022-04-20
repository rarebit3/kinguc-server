const { User, Castles } = require('../models')
const middleware = require('../middleware')
const res = require('express/lib/response')


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
    const userId = req.params.userId
    const { currentPassword, newPassword } = req.body
    const user = await User.findByPk(userId)
    if (
      user &&
      (await middleware.comparePassword (
        user.passwordDigest,
        currentPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      const updateUser = await User.update({passwordDigest}, {
        where: { id: userId }, 
        returning: true   
      })
      return res.send({ status: 'Good', payload: updateUser })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
  } catch (error) {throw error}
}

const DeleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId)
    await User.destroy({
        where: { id: userId }
    })
    res.send({ message: `Deleted user with an id of ${userId}`})
  } catch (error) {
    throw error
  }
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
  RegisterCastle,
  DeleteUser
}
