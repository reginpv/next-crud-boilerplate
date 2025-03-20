"use server"

import prisma from "@/lib/prisma"
import { hash, compare } from "bcrypt"
import { revalidatePath } from "next/cache"

const table = "user"

// GET
export async function getUsers() {

  try {
    const users = await prisma[table].findMany({
      where: {
        deletedAt: null
      }
    })

    return {
      success: true,
      payload: users
    }

  } catch (error) {
    return {
      success: false,
      payload: null,
      message: "Failed to get users"
    }
  }
  
}

// CREATE
export async function createUser(prevState: User, formData: User) {

  const name = formData.get("name")?.toString().trim()
  const email = formData.get("email")?.toString().trim()
  const password = formData.get("password")?.toString().trim()

  // Check for missing required fields
  const requiredFields = ["name", "email"] as const
  type Field = typeof requiredFields[number]
  let errors: { [key in Field]?: string } = {}
  requiredFields.forEach((field) => {
    if (!formData.get(field)?.toString().trim()) {
      errors[field] = `${field} is required.`
    }
  })

  // Has error, return data
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Failed to create user",
      errors,
      input: {
        name,
        email,
      }
    }
  }

  try {

    // Check if email already exists
    const userExist = await prisma[table].findFirst({
      where: {
        email: email,
      },
    })

    // If email already exists, return error
    if (userExist) {
      return { 
        success: false, 
        message: [`Email ${email} already exists.`],
        input: {
          name,
          email,
        }
      }
    }

    // Create user
    const user = await prisma[table].create({
      data: {
        name,
        email,
        password: await hash(password, 12),
      }
    })

    // Revalidate route cache
    revalidatePath("/users")

    return {
      success: true,
      payload: user
    }

  } catch (error) {
    return {
      success: false,
      payload: null,
      message: "Failed to create user"
    }
  }
  
}

// LOGIN
export async function loginUser(prevState: User, formData: User) {

  const email = formData.get("email")?.toString().trim()
  const password = formData.get("password")?.toString().trim()

  // Check for missing required fields
  const requiredFields = ["email", "password"] as const
  type Field = typeof requiredFields[number]
  let errors: { [key in Field]?: string } = {}
  requiredFields.forEach((field) => {
    if (!formData.get(field)?.toString().trim()) {
      errors[field] = `${field} is required.`
    }
  })

  // Has error, return data
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Failed to login user",
      errors,
      input: {
        email,
      }
    }
  }

  try {

    // Check if email already exists
    const user = await prisma[table].findFirst({
      where: {
        email: email,
      },
    })

    // If email already exists, return error
    if (!user) {
      return { 
        success: false, 
        message: [`Email ${email} not found.`],
        input: {
          email,
        }
      }
    }

    // Check password
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return { 
        success: false, 
        message: ["Password does not match."],
        input: {
          email,
        }
      }
    }

    return {
      success: true,
      payload: user
    }

  } catch (error) {
    console.log("error:", error)
    return {
      success: false,
      payload: null,
      message: "Failed to login user"
    }
  }
  
}