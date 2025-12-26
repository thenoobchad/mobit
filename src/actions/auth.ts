"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



import crypto from "crypto";
import { eq } from "drizzle-orm";
import { lt } from "drizzle-orm";
import { z } from "zod";
import { _email } from "zod/v4/core";



const adminUser = {
  id: "1",
  email: "admin@gmail.com",
  password: "12345678",
  role: "admin",
};

const USER_ROLE = {
  ADMIN: "admin",
  USER: "user",
};

//seven days in seconds

const SESSION_EXPIRATION_SECONDS = 60 * 60 * 24 * 7;
const COOKIE_SESSION_KEY = "custom-auth-session-id";

const registerSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be aleast 4 characters." })
    .trim(),
  email: z.email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .trim(),
});

const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .trim(),
});

export async function register(formData: FormData) {
  return "hi";
}

export async function login(prevState: any, formData: FormData) {
  return "hi"
}

export async function logout() {
  const cookieStore = await cookies();

  //Get cookie from session
  const sessionId = cookieStore.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;

  //delete from database
  // await db.delete(sessions).where(eq(sessions.id, sessionId));

  //delete from session
  cookieStore.delete(COOKIE_SESSION_KEY);

  redirect("/");
}

async function fetchtUserByEmail(email: string) {
  // const [user] = await db
  //   .select({ id: users.id, email: users.email })
  //   .from(users)
  //   .where(eq(users.email, email));
  return "hi";
}

//Password hasher

function hashPassword(password: string, salt: string): string {
  const hash = crypto.scryptSync(password.normalize(), salt, 64);
  return hash.toString("hex").normalize();
}
//Salt generator
function generateSalt() {
  return crypto.randomBytes(16).toString("hex").normalize();
}

//create session
const userRoles = ["admin", "user"] as const;

const sessionSchema = z.object({
  id: z.string(),
  role: z.enum(userRoles),
});

type UserSession = z.infer<typeof sessionSchema>;

async function createUserSession(user: UserSession) {
  const sessionId = crypto.randomBytes(512).toString("hex").normalize();
  const expiresAt = new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000);
  // await db.insert(sessions).values({
  //   id: sessionId,
  //   userId: user.id,
  //   userRole: user.role,
  //   expiration: expiresAt,
  // });

  await setCookie(sessionId);
}

async function setCookie(sessionId: string) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_SESSION_KEY, sessionId, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    expires: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000),
  });
}

//node cron for automtic session cleanup
// cron.schedule('0 * * * *', async () => {
//     await deleteExpiredSessions();
//   });

//delete expired session
async function deleteExpiredSessions() {
  const currentTime = new Date();

}

// await deleteExpiredSessions();

//Get user from session

export async function getUserFromSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(COOKIE_SESSION_KEY)?.value;

  if (sessionId == null) return null;


}

//compare password function
export async function comparePasswords({
  password,
  salt,
  hashedPassword,
}: {
  password: string;
  salt: string;
  hashedPassword: string;
}) {
  const inputHashedPassword = hashPassword(password, salt);
  return crypto.timingSafeEqual(
    Buffer.from(inputHashedPassword, "hex"),
    Buffer.from(hashedPassword, "hex")
  );
}