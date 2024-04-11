import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    aliasUsuario: column.text({unique: true}),
    nombreUsuario: column.text(),    
    apellidoUsuario: column.text(),
    correoUsuario: column.text({unique: true}),
    password: column.text()
  }
})

const Session = defineTable({
  columns:{
    id: column.text({optional: false, unique: true}),
    userId: column.text({optional: false, references: ()=>User.columns.id}),
    expiresAt: column.number({optional: false}),
  },
});

const Libros = defineTable({
  columns:{
    idLibro: column.number({primaryKey: true}),
    tituloLibro: column.text(),
    nombreAutor: column.text(),    
    portadaLibro: column.text(),
    fondoLibro: column.text(),
    sinopsisLibro: column.text(),
    nPaginasLibro: column.number(),
    categoriaLibro: column.text(),
    fechaPubLibro: column.date()
  }
})

export {User, Session, Libros};

export default defineDb({
  tables: {
    User,
    Session, 
    Libros
  }
});
