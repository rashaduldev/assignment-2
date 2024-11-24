

// Middleware and route setups...

import config from "./config/database";
import app from "./app";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(config.database_url);
});


