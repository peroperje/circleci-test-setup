import React from 'react';
import {Link} from "react-router-dom";

const Header: React.FC = (): JSX.Element=><div style={{width:'50%',display:'flex', justifyContent:'space-between'}}>
    <Link to="/" >Home</Link>
    <Link to="/goal" >Goal</Link>
</div>

export default Header;
