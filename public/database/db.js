const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./public/database/db.json')

const db = low(adapter)

db.get('users').push({
  email: 'mimsu@minsu.com',
  nickname: 'minsu',
  password: 'asdzxc123!@#',
  birthday: '1999.01.01',
})

module.exports = db
