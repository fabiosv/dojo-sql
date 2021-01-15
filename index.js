const {
    Usuarios
} = require('./models')

const main = async () => {
    const users = await Usuarios.findAll({ attributes: ['nome']})
    console.log(JSON.stringify(users))
}

main()
