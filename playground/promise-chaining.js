require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5f46a380e235230d6865e5c8', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f46a380e235230d6865e5c8', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})