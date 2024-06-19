import express from "express";
import HomeController from "../controllers/HomeController.js";
import AboutController from "../controllers/AboutController.js";
import { ReadingsController, ClassicsCategory, ContemporarysCategory } from "../controllers/ReadingsController.js";
import { DetailsReadingsController, LikeReadings} from "../controllers/DetailsReadingsController.js";
import { ContactController, ContactSubmit } from "../controllers/ContactController.js";
import { InscriptionController, InscriptionSubmit } from "../controllers/InscriptionController.js";
import { ConnexionController, ConnexionSubmitUser, Logout } from "../controllers/ConnexionController.js";
import { UserController} from "../controllers/UserController.js";
import { AdminController, AddBooks, DeleteBooks, EditBookForm, EditBook, UpdateBook} from "../controllers/AdminController.js";
import upload from "../helpers/upload.js";

const router = express.Router();

//liste des routes
//Home
router.get("/", HomeController)

//About
router.get("/about", AboutController);

//Readings
router.get("/readings", ReadingsController);
router.get("/readings_contemporarys", ContemporarysCategory);
router.get("/readings_classics", ClassicsCategory);


//DetailsReadings
router.get("/details_readings/:id", DetailsReadingsController);
router.post("/details_readings/:id", DetailsReadingsController);
router.post("/details_readings/:id/like", LikeReadings);


//Contact
router.get("/contact", ContactController);
router.post("/contact", ContactSubmit);

//Inscriptions
router.get("/inscription", InscriptionController);
router.post("/inscription", InscriptionSubmit);

//Connexion
router.get("/connexion", ConnexionController);
router.post("/connexion", ConnexionSubmitUser);


// user
router.get("/user", UserController);
router.get("/logout", Logout);


//Admin
// route pour la page Administrateur
router.get("/admin", AdminController);
// routes pour ajouter un nouveau livre
router.get("/add_book", AddBooks);
router.post("/add_book", upload.single("url_cover_image"), AddBooks);
// route pour effacer un livre
router.post("/readings", DeleteBooks);
// routes pour faire la mise à jour d'un livre
router.get("/edit_book", EditBookForm);
router.get("/edit_book/:id", EditBook);
router.post("/edit_book/:id", EditBook);
router.post("/edit_book/:id/edit", upload.single("url_cover_image"), UpdateBook);


export default router;