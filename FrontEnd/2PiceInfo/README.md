# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Build image

```sh
docker build -f Dockerfile_Front -t front_number_serial .
```

#### Docker run

```sh
docker run -e VITE_BASE_URL=http://10.173.5.17/api/v1  --rm -p 3002:80 front_number_serial
```
