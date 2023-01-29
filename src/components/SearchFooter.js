
import { Link } from 'react-router-link'


const SearchFooter = () => {
  return (
    
        
        <div >
          <span className="yclinks">
            <a href="https://hn.algolia.com/about">About</a>
            &nbsp;| <Link to="/https://hn.algolia.com/settings">Setting</Link>
            &nbsp;| <a href="https://hn.algolia.com/help">Help</a>
            &nbsp;| <a href="https://hn.algolia.com/api">API Documentation</a>
            &nbsp;| <Link to="/">Hacker News</Link>
            &nbsp;| <Link to="https://github.com/algolia/hn-search">Fork/Contrybute</Link>
            &nbsp;| <Link to="https://hn.algolia.com/cool_apps">Cool Apps</Link>
          </span>
          <br />
          <br />
          
        </div>
      
  );
}


export default SearchFooter