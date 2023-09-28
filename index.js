import  express from 'express'
import bodyParser from 'body-parser' 
import  cors from  'cors';
import { rp } from './data.js';
import helmet from 'helmet'


const app=express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(bodyParser.json({limit:'30mb',extended:true}));


app.get('/find',(req, res) => {
        res.status(200).send(rp);
    
 })

 console.log('datbase connected')
    const PORT=process.env.PORT||4000;
    app.listen(PORT,()=>console.log(`Server Port :${PORT}`));