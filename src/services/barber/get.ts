"use server";

import { BarberShop, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBarberShopsByCity = async (
  city: string
): Promise<Array<BarberShop>> => {
  const result = await prisma.barberShop.findMany({
    where: {
      city: {
        equals: city,
        mode: "insensitive",
      },
    },
  });

  if (!result) {
    throw new Error("Barber Shop not found");
  }

  return result;
};

export const getBarberShops = async (): Promise<Array<BarberShop>> => {
  const result = await prisma.barberShop.findMany();

  if (!result) {
    throw new Error("Something went wrong");
  }

  return result;
};

export const getBarberShopDataForToken = async (
  userEmail: string
): Promise<{ name: string; id: number }> => {
  const result = await prisma.barberShop.findFirst({
    where: {
      userEmail,
    },
  });

  if (!result) {
    throw new Error("Barber Shop not found");
  }

  return { name: result.name, id: result.id };
};

export const getBarberShopByID = async (id: number): Promise<BarberShop> => {
  const result = await prisma.barberShop.findUnique({
    where: {
      id,
    },
  });

  if (!result) {
    throw new Error("Barber Shop not found");
  }

  return result;
};
