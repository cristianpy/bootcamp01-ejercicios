'use strict';
module.exports = (sequelize, DataTypes) => {
  //Define the Evento model
  var Evento = sequelize.define('Evento', {
    //Define the data types of the Evento fields
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    direccion: DataTypes.TEXT,
    ciudad_id: DataTypes.INTEGER,
    latitud: DataTypes.STRING,
    longitud: DataTypes.STRING,
    lugar: DataTypes.STRING,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    hora_inicio: DataTypes.TIME,
    hora_fin: DataTypes.TIME,
    imagen_url: DataTypes.STRING,
    cantidad_lugares: DataTypes.INTEGER,
    tipo_evento_id: DataTypes.INTEGER
  }, {
    //Set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
  });
  Evento.associate = function(models) {
    // associations can be defined here
    // Evento.hasMany(models.Ciudad, {
    //   onDelete: 'cascade'
    // });
    // Evento.hasMany(models.Tipo_Evento, {
    //   onDelete: 'cascade'
    // });
  };
  
  return Evento;
};