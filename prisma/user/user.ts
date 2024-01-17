//CRUD operations for the user model
import { PrismaClient } from "@prisma/client";
/* import type { CreateContact, UpdateContact } from "~/routes/contacts.enum"; */

const db = new PrismaClient();

export const getUserById = async (id: string) => {
    return await db.user.findUnique({
      where: {
        id,
      },
    });
   };

export const updateUser = async (id: string, userData: {
  email: string,
  firstName: string,
  lastName: string,
  }) => {
  return await db.user.update({
    where: {
      id,
    },
    data: userData
  });
};

export const deleteUser = async (id: string) => {
  return await db.user.delete({
    where: {
      id,
    },
  });
};