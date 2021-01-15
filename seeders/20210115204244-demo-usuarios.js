module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('usuarios', [{
            nome: 'Miguel Elias Jesus',
            projeto: 'Globo',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Manoel Gabriel Campos',
            projeto: 'Globo',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Stella Louise Fernanda Aparício',
            projeto: 'Vivo',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Paulo Giovanni Thomas Corte Real',
            projeto: 'Claro',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Priscila Elisa Gomes',
            projeto: 'Alelo',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Henrique Yuri Alves',
            projeto: 'Alelo',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Isabelly Jéssica Fernandes',
            projeto: 'Claro',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Isadora Betina Pereira',
            projeto: 'Vivo',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Luna Alice Marlene Porto',
            projeto: 'Nextel',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Helena Tereza Cristiane Martins',
            projeto: 'Nextel',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('usuarios', null, {})
    }
}