const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8001;

function bootstrap() {
    const app = express();
    app.use(cors(
        {
            origin: "*"
        }
    ));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', require('./routes'));
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

bootstrap();
