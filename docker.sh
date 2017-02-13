IMGNAME="beam-frontend"
docker rm -f $IMGNAME
docker rmi $IMGNAME
docker build -t $IMGNAME .
docker run -d -p 1337:80 --name $IMGNAME $IMGNAME
