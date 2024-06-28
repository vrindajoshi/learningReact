import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    // useEffect is called everytime the page is re-rendered, can be chenged by dependencies
    useFetch("http://localhost:8000/blogs")

    // && checks that blogs is not null (conditional)
    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="blogs"/>}
        </div>
    );
}
 
export default Home;