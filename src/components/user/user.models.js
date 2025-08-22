import pkg from '@prisma/client';
const {PrismaClient} = pkg;
const prisma = new PrismaClient();

export const obtenerUsuarios = async () => {
  try {
    const usuarios = await prisma.user.findMany({
      include: {
        userRoles: {
          include: {
            role: true
          }
        }
      }
    });
    return usuarios;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const registrarUsuarios = async (datos) => {
  try {
    let { 
      name,
      email,
      password,
      image,
      bio,
      isPremium = false
    } = datos;
    email=email.toLowerCase();
    
    const nuevoUsuario = await prisma.user.create({
      data: {
        name,
        email,
        password,
        image,
        bio,
        isPremium
      }
    });
    return nuevoUsuario;
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
};

export const updateUsuario = async (user) => {
  let {
    name,
    email,
    password,
    image,
    bio,
    isPremium
  } = user;

  try {
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email.toLowerCase();
    if (password) updateData.password = password;
    if (image !== undefined) updateData.image = image;
    if (bio !== undefined) updateData.bio = bio;
    if (isPremium !== undefined) updateData.isPremium = isPremium;

    const usuarioActualizado = await prisma.user.update({
      where: { email },
      data: updateData
    });
    return usuarioActualizado;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const validarUsuariosExistentes = async (id) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return !!user; 
};

export const deleteUser = async (id) => {
  try {
    const existeUsuario = await validarUsuariosExistentes(id);
    if (!existeUsuario) {
      return {
        message: `Error: el usuario con id ${id} no existe`
      };
    }

    const res= await prisma.user.delete({ where: { id } });

    return {
      message: `Usuario eliminado`,
      data: res
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const cambiarContrasena = async (id, nuevaContrasena) => {
  try {
    const usuarioActualizado = await prisma.user.update({
      where: { id },
      data: { password: nuevaContrasena }
    });
    return usuarioActualizado;
  } catch (error) {
    console.error("Error al cambiar la contraseña:", error);
    throw error;
  }
};

export const contrasenaActual = async (id) => {
  try {
    const usuario = await prisma.user.findUnique({
      where: { id },
      select: { password: true }
    });

    return usuario?.password || null;
  } catch (error) {
    console.error("Error al obtener la contraseña:", error);
    throw error;
  }
};

export const obtenerUsuarioPorSuCorreo = async (email) => {
  try {
    const usuario = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        password: true, // 👈 Aquí se incluye la contraseña
        userRoles: {
          include: {
            role: true
          }
        }
      }
    });
    return usuario;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const obtenerUsuariosById = async (id) => {
  try {
    const usuario = await prisma.user.findUnique({
      where: { id },
      include: {
        userRoles: {
          include: {
            role: true
          }
        }
      }
    });
    return usuario;
  } catch (error) {
    console.error(error);
    return error;
  } 
};

export const asignarRolUsuario = async (userId, roleId) => {
  try {
    const userRole = await prisma.userRole.create({
      data: {
        userId,
        roleId
      }
    });
    return userRole;
  } catch (error) {
    console.error("Error al asignar rol:", error);
    throw error;
  }
};

export const removerRolUsuario = async (userId, roleId) => {
  try {
    await prisma.userRole.delete({
      where: {
        userId_roleId: {
          userId,
          roleId
        }
      }
    });
    return { message: "Rol removido exitosamente" };
  } catch (error) {
    console.error("Error al remover rol:", error);
    throw error;
  }
};

export const obtenerUsuariosPremium = async () => {
  try {
    const usuarios = await prisma.user.findMany({
      where: { isPremium: true },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        isPremium: true,
        createdAt: true
      }
    });
    return usuarios;
  } catch (error) {
    console.error(error);
    return error;
  }
};


