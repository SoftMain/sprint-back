Для начала работы:

- Получить последние изменения
- Установить NodeJS
- В терминал прописать команду: `npm install`
- Запустить dev-сервер перед началом работы: `npm run start:dev`
- Остановить web-сервер можно два раза нажав Ctrl + C

Запустить production-mode:
`npm run start:prod`


Миграции
npx sequelize-cli migration:generate --name create-company
npx sequelize-cli db:migrate

id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }