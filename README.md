# MongoReactExpressMVC

Full Stack MVC Framework using MongoDB, React.js, Express.js and Gulp.js

## First clone it

bash
```bash
git clone https://github.com/Harduex/MongoReactExpressMVC.git
```

## Then install it
bash
```bash
npm i
```

## Configure
### replace with your credentials in ./config/database.js
##### *Make sure you have MongoDB server up and running
./config/database.js
```javascript
    // credentials
    const dbUrl = 'localhost';
    const dbPort = '27017';
    const database = 'MyDb';
```

## Now run it

bash
```bash
npm run dev
```
Navigate to http://localhost:3000

## And that's it!

🥳 *Now you're ready to rock!* 🥳

## Side note
Framework is preconfigured with local user authentication using Passport.js\
If you don't need authentication switch to branch **clean-starter**


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)