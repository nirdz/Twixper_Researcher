var config = new Object()

// For choosing "download report" flow
config.isProduction = true // Real mode: true

/* For serverCommunicator */
config.serverUrl = "https://twixper-backend.azurewebsites.net"
// config.serverUrl = "http://localhost:3000"

config.isTest = false // Real mode: false
config.isTestingErrors = true


module.exports = config;