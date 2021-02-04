const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require('./db');
const collection = "Songs";

//Thêm vào để những link khác có thể truy cập đến server này.
var cors = require('cors')
app.use(cors())

//Kết nối đến database
db.connect((err)=>{
    if(err){
        console.log('unable to connect database :((');
        process.exit(1);
    }
    else{
        app.listen(3000, ()=>{
            console.log('connect sussces, port 3000')
        });
    }
})

//Code html
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

//Xem database hiện tại
app.get('/getSongs', (req, res)=>{
    db.getDB().collection(collection).find({}).toArray((err, document)=>{
        if(err)
            console.log(err);
        else{
            res.json(document);
        }
    })
})

//Server sẽ trả về cho ngừi dùng thông tin mà họ đã người, lúc này sẽ bắt và insert nó vào database
app.post('/', (req, res)=>{
    const userInput = req.body;
 
    db.getDB().collection(collection).insertOne(userInput, (err, result)=>{
        if(err)
            console.log(err);
        else
            res.json({result: result, document: result.ops[0]});
    })
})
//Xóa một document nào đó theo id của nó (ytong ObjectId)
app.delete('/:id', (req, res)=>{
    const songID = req.params.id;
    
    db.getDB().collection(collection).deleteOne({_id : db.getPrimaryKey(songID)}, (err, result)=>{
        if(err)
            console.log(err);
        else
            res.json(result);
    });
});

