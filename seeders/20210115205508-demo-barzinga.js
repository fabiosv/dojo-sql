module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('barzinga', [{
            nome: 'Coca-Cola Lata',
            preco: 3.50,
            quantidade: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nome: 'Fini Tube',
            preco: 1.50,
            quantidade: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nome: 'Tic Tac Laranja',
            preco: 1.00,
            quantidade: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nome: 'Heineken 350ml',
            preco: 4.20,
            quantidade: 50,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nome: 'Toddynho',
            preco: 1.30,
            quantidade: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('barzinga', null, {})
    }
}
