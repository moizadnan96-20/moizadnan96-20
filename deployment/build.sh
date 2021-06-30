docker build -t perception-web -f ./DockerFile .
docker rm -f perception
docker run -dit --name perception -p 8081:80 perception-web