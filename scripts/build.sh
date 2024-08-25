npm run update:script &&
npm run build:client &&
npm run build:server &&
cp -r ./build ./dist &&
cp ./.env ./dist &&
rm -rf ./build
