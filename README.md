Descarga el proyecto.

```sh
git clone git@github.com:aflotemx/web.git
```

Crea la imagen de docker.
```sh
sudo docker build -t web .
```

Crea un contenedor usando la imagen creada.
```sh
sudo docker-compose up -d
```
