const ethers = require('ethers');

const validateSignature = async (contactInfo) => {

    const domain = {
        name: 'Eth-Connect',
        version: '1',
        // chainId: 3,
        // verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
    };

    const types = {
        Metadata: [
            { name: 'content', type: 'string' },
            { name: 'walletAddress', type: 'address' },
            { name: 'publicKey', type: 'string' },
            { name: 'date', type: 'string' },
        ],
    };

    try {
        let verifiedKey = await ethers.utils.verifyTypedData(domain, types, contactInfo.metadata, contactInfo.signature);
        // console.log({verifiedKey});
        let verified = contactInfo.address === verifiedKey;
        return {
            verified
        }
    }
    catch (e) {
        // console.log(e);
        // console.log('error with signature')
        return {
            verified: false,
            error: e
        }
    }
}

module.exports = {
    validateSignature
};
