import {Form} from "../ui/login/form"
import {Suspense} from 'react';

export default async function Page(){
    
    return<>{/*<h1>Login Page {user[0].name} users</h1>*/}
        <Suspense fallback={<div>Loading login...</div>}>
            <Form/>
        </Suspense>
    </>
}