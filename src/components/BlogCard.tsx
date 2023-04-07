const BlogCardComponent = () => {
    return (
        <>
            <div className="w-full shadow-md lg:max-w-sm p-2">
                <img
                    className="object-cover w-full h-48"
                    src="https://picsum.photos/536/354"
                    alt="image"
                />
                <div className="p-4">
                    <h4 className="text-xl font-semibold text-blue-600">

                        {/* {blog.title} */}
                    </h4>
                    <p className="mb-2 leading-normal">
                        {/* {blog.text} */}
                    </p>
                    <button className="px-2 py-2 text-sm text-black-300">
                        {/* {blog.author} */}
                    </button>
                    <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                        Read more
                    </button>
                </div>
            </div>
        </>
    );
}
export default BlogCardComponent