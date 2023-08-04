
const mongoose = require('mongoose');

async function mongoDB() {
    try {
        await mongoose.connect('mongodb+srv://gofood:localhostpassword@gofood.uvsrezn.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        // food_items 
        const fetched_food_items = await mongoose.connection.db.collection("food_items");
        const food_items_data = await fetched_food_items.find({}).toArray();
        global.food_items = food_items_data;
        // console.log(global.food_items);

        // food_category

        const fetched_food_category = await mongoose.connection.db.collection("foodCategory");
        const food_category_data = await fetched_food_category.find({}).toArray();
        global.foodCategory = food_category_data;
        // console.log(global.foodCategory);



    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = mongoDB;





// Aakash connection code


// const mongoose = require("mongoose");
// const mongoURL =
//     "mongodb+srv://gofood:localhostpassword@gofood.uvsrezn.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// // const food_items = require("./models/FoodItems");
// // const foodCategory = require("./models/FoodCategory");
// // const users = require("./models/User");

// async function mongoDB() {
//     mongoose
//         .connect(mongoURL, {
//             useNewUrlParser: true,
//         })
//         .then(() => {
//             console.log("connected to db");
//         })
//         .catch((e) => {
//             console.log(e);
//         });

//     try {
//         global.food_items = await food_items.find({});
//         console.log(global.food_items);
//     } catch (error) {
//         console.log(error);
//     }

//     // try {
//     //     global.foodCategory = await foodCategory.find({});
//     // } catch (error) {
//     //     console.log(error);
//     // }

//     // try {
//     //     global.users = await users.find({});
//     // } catch (error) {
//     //     console.log(error);
//     // }
// }

// module.exports = mongoDB;



// VIDEO JEVO  new code..........................................................................

// const mongoose = require('mongoose');
// const mongoURL = "mongodb+srv://gofood:localhostpassword@gofood.uvsrezn.mongodb.net/gofoodmern?retryWrites=true&w=majority"
// const mongoDB = async () => {
//     await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, result) => {
//         if (err) console.log("---", err)
//         else {
//             console.log("connected");
//             const fetched_data = await mongoose.connection.db.collection("food_items");
//             fetched_data.find({}).toArray(function (err, data) {
//                 if (err) console.log(err);
//                 else {
//                     global.food_items = data;
//                     console.log(global.food_items);
//                 }
//             })
//         }
//     });
// }


