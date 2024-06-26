import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "my website", body: "lorem ipsum....", author: "vrinda", id: 1},
        {title: "update", body: "lorem ipsum....", author: "joe", id: 2},
        {title: "hi", body: "lorem ipsum....", author: "vrinda", id: 3},
    ]);
   
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // useEffect is called everytime the page is re-rendered, can be chenged by dependencies
    useEffect(() => {
        console.log("use effect ran");
    }, []);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;