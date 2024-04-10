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

const Libros = defineTable({
  columns:{
    idLibro: column.number({primaryKey: true}),
    tituloLibro: column.text(),
    nombreAutor: column.text(),    
    portadaLibro: column.text(),
    sinopsisLibro: column.text(),
    nPaginasLibro: column.number(),
    categoriaLibro: column.text(),
    fechaPubLibro: column.date()
  }
})






export { Usuarios, Libros };


export default defineDb({
  tables: {Usuarios, Libros}
});
