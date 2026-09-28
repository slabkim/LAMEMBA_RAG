import { app } from './app';
import { env } from './config/env';

const port = parseInt(env.PORT, 10);

app.listen(port, () => {
  console.log(`[Server] AI DED LAMEMBA Backend listening at http://localhost:${port}`);
  console.log(`[Server] Environment: ${env.NODE_ENV}`);
});
