import dva from 'dva';

// import createLoading from "dva-loading";
import './index.less';
import Router from './router';
import models from './models';

// const { registerObserver } = require("react-perf-devtool");
// registerObserver({ timeout: 30000 });

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use(createLoading());

// 3. Model
models.forEach((m: any): void => {
  app.model(m.default);
});

// 4. Router
app.router(Router);

// 5. Start
app.start('#root');
