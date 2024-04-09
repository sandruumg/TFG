import { column, defineDb, defineTable } from 'astro:db';

const Usuarios = defineTable({
  columns:{
    idUsuario: column.number({primaryKey: true}),
    aliasUsuario: column.text({unique: true}),
    nombreUsuario: column.text(),    
    apellidoUsuario: column.text(),
    correoUsuario: column.text({unique: true}),
    contraseñaUsuario: column.text()
  }
})








export default defineDb({
  tables: {Usuarios}
});
