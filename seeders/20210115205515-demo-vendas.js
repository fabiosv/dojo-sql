module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('vendas',
            [{
                id_usuario: 3,
                id_produto: 1,
                quantidade: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id_usuario: 5,
                id_produto: 3,
                quantidade: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id_usuario: 6,
                id_produto: 4,
                quantidade: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id_usuario: 3,
                id_produto: 2,
                quantidade: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id_usuario: 8,
                id_produto: 5,
                quantidade: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            ])
    },

    down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
        await queryInterface.bulkDelete('vendas', null, {})
    }
}