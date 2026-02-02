import App from './app';
import AuthRoute from './routes/auth.routes';
import ServiceRoute from './routes/service.routes';

const app = new App([new AuthRoute(), new ServiceRoute()]);

app.startServer()
