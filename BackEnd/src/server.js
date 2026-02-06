import app from './app.js';

import './database/index.js';

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//Alterar em produção
