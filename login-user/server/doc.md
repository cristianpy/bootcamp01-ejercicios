Generar los modelos Sequelize ORM
- Configurar correctamente el archivo /config/config.js
- sequelize model:generate --name nombre_modelo --attributes columnas_tabla
- hacer la migracion(crear tablas) con el comando sequelize db:migrate
- crear los controllers a los modelos
- agregar las rutas en /routes/index.js