import express from 'express';
import cors from 'cors';
import router from './src/routes/router.js';
import chalk from 'chalk';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(chalk.bgGreenBright.black(`Servidor rodando no endereço: http://localhost:${port}`));
});