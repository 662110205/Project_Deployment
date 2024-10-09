import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {

    res.send('I Love My Job <3');

});
app.listen(port, () => {

    console.log(`Server is running ${port}`);

});