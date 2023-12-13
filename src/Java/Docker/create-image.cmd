docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 22-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 22-java/app ../../..
