import { useState } from 'react';
import axios from 'axios';

const PostAxios = () => {

    const [data, setData] = useState({
        id: 0, userId: 0, title: "", body: ""
    });

    const [responseTemplate, setResponseTemplate] = useState(
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            Enter Details before proceeding!
        </div>
    )

    const onChanging = (e) => { setData({ ...data, [e.target.name]: e.target.value }) }

    const onSubmiting = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);

            setData(response.data);
            console.log(response.data);

            if (response.data.id !== 0) {
                setResponseTemplate(
                    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        data posted successfully!
                    </div>
                );
            }
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        <div className='m-16 p-16 border-2 rounded-md'>
            <form className="max-w-md mx-auto" onSubmit={onSubmiting}>
                {responseTemplate}
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" value={data.id} onChange={onChanging} name="id" id="id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID: </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" value={data.userId} onChange={onChanging} name="userId" id="userId" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="userId" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">USER ID: </label>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={data.title} onChange={onChanging} name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">TITLE: </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BODY: </label>
                    <textarea id="message" rows="4" value={data.body} name='body' onChange={onChanging} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>

                <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
            </form>
        </div >
    </>
};

export default PostAxios;