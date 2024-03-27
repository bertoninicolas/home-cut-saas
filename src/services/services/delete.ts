"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteService = async (formData: FormData) => {
  const service = await prisma.service.delete({
    where: {
      id: Number(formData.get("serviceId")),
    },
  });

  return service;
};

export default deleteService;
