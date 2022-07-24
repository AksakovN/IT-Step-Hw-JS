import "./menu.css";
import { Link, NavLink } from "react-router-dom";

function Menu() {






    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to='/'>
                        All todo
                    </Link>
                </li>
                <li>
                    <Link to='/add'>
                        Add todo
                    </Link>
                </li>
                <li>
                    <Link to='/delete'>
                        Delete todo
                    </Link>
                </li>
            </ul>

        </nav>
    );
}

export default Menu;