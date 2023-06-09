cd ../..
npm i
npm run build

cd ./examples/live-chat/
rm -rf ./node_modules/@millicast/vue-viewer-plugin
npm i
npx install-local ../../
npm run serve