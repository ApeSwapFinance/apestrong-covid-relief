// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ApeStrongCovidRelief = artifacts.require("ApeStrongCovidRelief");

module.exports = function(deployer) {
  deployer.deploy(ApeStrongCovidRelief, "ApeStrong Covid Relief", "ASCR", "https://api.apeswap.finance/apestrong/");
};