import pool from "../config/database.js";
import { baseUrl } from "../server.js";


const HomeController = (req, res) => {
    res.render("index", {base_url: baseUrl});
}

export default HomeController;