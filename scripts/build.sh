rm -rf ./dist &&
yarn run build:client &&
yarn run build:server &&
cp -r ./build ./dist &&
cp ./.env ./dist &&
rm -rf ./build
