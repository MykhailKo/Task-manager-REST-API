require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f47954e42814334ac353ae9').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f47954e42814334ac353ae9').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})