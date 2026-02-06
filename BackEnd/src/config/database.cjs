module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'admin',
  password: '123456',
  database: 'dev-burguer-api',
  define: {
    timestamps: true,
    underscored: true,
  },
};
//Alterar em produção
