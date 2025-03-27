
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express= require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin =require("firebase-admin")

var serviceAccount = require("./ijasz-csata-firebase-adminsdk-fbsvc-5008137558.json");
const { LOG_ERROR } = require("karma/lib/constants");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ijasz-csata-default-rtdb.europe-west1.firebasedatabase.app"
});

const app=express();

app.use(cors({origin:'*'}));

app.use(bodyParser.json());

const verifyToken= (req,res, next)=>{
    const idToken= req.headers.authorization;

    admin.auth().verifyIdToken(idToken).then(
        (decodeData)=>{
            req.user=decodeData;
            next();
        }
    )
    .catch((error)=>{
        console.log("Hiba a token ellenőrzésekot!");        
        res.status(401).json({message:"Hozzáférés megtagadva, csak bejelentkezett felhasználóknak érhető el!"})

    })
}

const verifyAdmin =(req,res, next)=>{
  console.log(req.user)
  if (req.user && req.user.admin){
    next()
  }else{
    res.status(403).json({message:"Hozzáférés megtagadva, csak 'admin'-oknak érhető el!"})
  }
}
const verifyModerator =(req,res, next)=>{
  console.log(req.user)
  if (req.user && req.user.moderator){
    next()
  }else{
    res.status(403).json({message:"Hozzáférés megtagadva, csak 'moderator'-oknak érhető el!"})
  }
}

app.get('/users',verifyToken, async (req, res) => {
// app.get('/users',verifyToken,verifyAdmin, async (req, res) => {
  try{
    const userRecords=await admin.auth().listUsers()
    const userWithClaims=await Promise.all(userRecords.users.map(
      async (user)=>{
        console.log("User:", user)
        const userDetails= await admin.auth().getUser(user.uid)
        return {
          uid: userDetails.uid,
          email: userDetails.email,
          displayName: userDetails.displayName,
          phoneNumber: userDetails.phoneNumber,
          photoURL: userDetails.photoURL,
          emailVerified: userDetails.emailVerified,
          disabled: userDetails.disabled,
          claims:userDetails.customClaims || {}
        }
      }
    )
  )
    res.json(userWithClaims)
  }
    catch (error)  {
      console.error('Hiba történt a felhasználók lekérésekor:', error);
      res.status(403).json({message:"Hiba történt a felhasználók lekérésekor!", error:error})
    }
  })

app.post('/setCustomClaims',verifyToken ,(req,res)=>{
// app.post('/setCustomClaims',verifyToken,verifyAdmin ,(req,res)=>{
  const {uid, claims} = req.body
  admin.auth().setCustomUserClaims(uid, claims)
  .then(()=>res.json({message:"OK"}))
  .catch((error)=>{
    console.log("Hiba a claimsok beállításánál! ",error)
    res.status(500).json({message:"Hiba a claimsok beállításánál!", error:error})  })
})

app.get('/getClaims/:uid?',verifyToken, (req,res)=>{
  let {uid}= req.params
  if (!uid || !req.user.admin) uid = req.user.uid
  admin.auth().getUser(uid).then(
    (user)=>{
      res.json(user.customClaims || {})
    }
  ).catch((error)=>{
    console.log("Hiba a claimsok lekérdezésénél! ",error)
    res.status(500).json({message:"Hiba a claimsok lekérdezésénél!", error:error})  
  }
)})


app.patch("/updateUser", verifyToken, async (req, res) => {
  try {
    let {uid, email, password, displayName, phoneNumber, photoURL, emailVerified, disabled, claims } = req.body;
    if (!req.user.admin) {
       uid = req.user.uid
       emailVerified = undefined
       disabled= undefined
       claims=undefined
       email=undefined
      };


    if (!uid)  uid = req.user.uid
    const updatedUser = await admin.auth().updateUser(uid, {
      email,
      password,
      displayName,
      phoneNumber,
      photoURL,
      emailVerified,
      disabled,
    });  
    if (claims) {
      await admin.auth().setCustomUserClaims(uid, claims);
    }  
    res.json({
      message: "Felhasználói adatok sikeresen frissítve.",
      user: {
        uid: updatedUser.uid,
        email: updatedUser.email,
        displayName: updatedUser.displayName,
        phoneNumber: updatedUser.phoneNumber,
        photoURL: updatedUser.photoURL,
        emailVerified: updatedUser.emailVerified,
        disabled: updatedUser.disabled,
        claims: claims || {} 
      },
    });
  } catch (error) {
    console.error("Hiba a felhasználói adatok frissítésekor:", error);
    res.status(500).json({ message: "Hiba történt a felhasználói adatok frissítésekor!",error:error });
  }
});

exports.api =onRequest(app);
