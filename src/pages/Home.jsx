
export const Home = ({ movies }) => {
    return (
        <main>
            <h1>Trending today</h1>
            <ul className="Movies">
                {movies.map(({ id, title, name }) => (
                    <li className="MovieItem" key={id}>
                        {/* <img
                            src={webformatURL}
                            alt={tags}
                            className="MovieItem-image"
                            loading="lazy" 
                        /> */}
                        <p>{ title ? title : name}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};