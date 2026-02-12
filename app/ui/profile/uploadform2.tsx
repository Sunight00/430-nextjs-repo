import Fonts from '../font';
import { auth } from '@/auth';
import { addProduct} from '@/app/lib/actions';
import { getUserByEmail } from '@/app/lib/data';

type FormProps ={
  smallView: string;
  largeView: string;
}
//{smallView ,largeView}: FormProps ${smallView} md:${largeView}
export async function Form(){ {
        const session = await auth();
        const user = session?.user;
        const userData = user ? await getUserByEmail(user.email!) : null;
        //console.log(userData);
        const user_id = userData ? String(userData[0].id) : '';
        console.log(user_id);
  return (
    <div className={`view-h  lg:flex-[2]  p-5 bg-cyan-50 border-l border-neutral-200 block md:hidden`}>
      <h1 className={`${Fonts.Headers.className} text-2xl text-center mb-4`}>
        UPLOAD NEW PRODUCT
      </h1>
      <hr className="mb-4" />
      
      <form className="space-y-4" action={addProduct}>
        {/* Hidden Artist ID  */}
        <label htmlFor="user_id" className="block font-medium"></label>
        <input type="hidden" id="user_id" name="user_id" value={user_id} />

        {/* Product Title */}
        <div>
          <label htmlFor="title" className="block font-medium">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Product Title"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-medium">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Product Description"
            className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-200"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block font-medium">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Product Price"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-200"
          />
        </div>
        <div>
          <label htmlFor="category" className="block font-medium">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Product Category"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-200"
          />
        </div>
        

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block font-medium">Product Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/jpeg,image/webp"
            className="w-full border border-gray-300 rounded-md p-2 cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition-colors"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
}
}