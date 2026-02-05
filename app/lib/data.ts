import postgres from 'postgres';
import { email } from 'zod/v4/mini';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getUsers() {
    return sql`SELECT * FROM users`;
}

export async function getUserByEmail( email: string) {
    return sql`SELECT * FROM users WHERE email = ${email}`;
}

export async function getProductByUserId(artisanId: string){
    return sql`SELECT * FROM products WHERE artisan_id = ${artisanId}`;
}