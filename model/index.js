// методы для работы с бд
const User = require('./user')

// поиск по критерию
const getOne = (filter) => {
  return User.findOne(filter)
}
//добаление нового юзера
const add = ({ email, password, name, surname, avatarURL } ) => {
  const newUser = new User({ email, name, surname, avatarURL })
  newUser.setPassword(password)
  return newUser.save()
}
// поиск по ИД
const getById = (id) => User.findById(id)

module.exports = {
  getOne,
  add,
  getById,
}