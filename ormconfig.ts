module.exports = {
  synchronize: true,
  logging: true,
  type: 'sqlite',
  database: 'data/dev.sqlite',
  entities: ['dist/**/entities/**/*.entity.js'],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
