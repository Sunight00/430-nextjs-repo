'use server';
//import { z } from 'zod';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import postgres from 'postgres';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { revalidatePath } from "next/cache";
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


export async function deleteProduct(productId: number) {
  await sql`DELETE FROM products WHERE id = ${productId}`;
  // Re-fetch the server component for this path
  revalidatePath("/profile");
}






export async function addProduct(formData: FormData) {

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const price = parseFloat(formData.get('price') as string);
  const image = formData.get('image') as File;
  const user_id = formData.get('user_id') as string;
  const category = formData.get('category') as string;

  console.log('Received form data:', { title, description, price, image, user_id, category });

  // Convert to base64 server-side
  const arrayBuffer = await image.arrayBuffer(); // works in Next.js 13+ server actions
  const buffer = Buffer.from(arrayBuffer);
  const base64Image = `data:${image.type};base64,${buffer.toString('base64')}`;

  // Validate inputs
  if (!title || !description || isNaN(price) || !image || !user_id || !category) {
    throw new Error('All fields are required and must be valid');
  }

  
  if (base64Image) {
    await sql`
      INSERT INTO products (title, description, price, image_url, user_id, category)
      VALUES (${title}, ${description}, ${price}, ${base64Image}, ${user_id}, ${category})
    `;
  }

  revalidatePath("/profile");
}