'use server';
import { z } from 'zod';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import postgres from 'postgres';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


export type SignUpFormData = {
  email: string;
  username: string;
  password: string;
  role: string;
};

export async function signUp(formData: FormData) {
  // Convert FormData to typed object
  const data: SignUpFormData = {
    email: (formData.get('email') as string | null) ?? '',
    username: (formData.get('username') as string | null) ?? '',
    password: (formData.get('password') as string | null) ?? '',
    role: (formData.get('role') as string | null) ?? '',
  };
  const hashedPassword = await bcrypt.hash(data.password, 10);
  // Optional: validate
  if (!data.email || !data.username || !data.password || !data.role) {
    throw new Error('All fields are required');
  }

  // Insert into DB safely
  try {
    await sql`
      INSERT INTO users (name, email, password, role)
      VALUES (${data.username}, ${data.email}, ${hashedPassword}, ${data.role})
    `;
    
  } 
  catch (error) {
    throw new Error(error as string);
}
redirect('/profile');}
