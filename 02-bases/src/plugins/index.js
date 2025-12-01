const { getUUID } = require('./get-id-plugin');
const { getAge } = require('./get-age-plugin');
const { httpClient  } = require('./http-client.plugin');

module.exports = {  
    getUUID,
    getAge,
    httpClient,
    buildLogger: require('./logger.plugin')
}