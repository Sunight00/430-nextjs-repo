import { getUsers } from "../lib/data"
import {Form} from "../ui/login/form"

export default async function Page(){
    const user = await getUsers();
    return<><h1>Login Page {user[0].name} users</h1>
            <Form/>
    </>
}