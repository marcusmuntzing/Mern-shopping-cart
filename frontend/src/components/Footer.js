import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => 

<footer>
<div class="footer">


<div class="row">
<ul>
<Link to="/">
Produkter
</Link>

<Link to="/cart">
Beställning
</Link>
</ul>
</div>

<div class="row">
RESTAURANG PIR Copyright © 2023  || Designed By: Marcus Müntzing 
</div>
</div>
</footer>

export default Footer;