import React, { useState } from 'react'
import { Autocomplete, verify } from '@lob/react-address-autocomplete'

const customStyles = {
    lob_container: provided => ({
        ...provided,
        backgroundColor: '#EBF0F6',
        borderRadius: '1em',
        padding: '1em'
    }),
    lob_label: provided => ({
        ...provided,
        color: '#57A1B9',
        fontWeight: 700
    })
}

const VerifyForm = () => {
    const [selectedAddress, setSelectedAddress] = useState({})
    const [verificationResult, setVerificationResult] = useState(null)

    const verifyAddress = () =>
        verify("live_pub_f5b5b72af120bd8635ea95388bc2a61", selectedAddress)
            .then((result) => {
                    // Simplify response into something readable to the user
                    const summary = `This address is ${result.deliverability}`
                    setVerificationResult(summary)
        })
        .catch((errorData) => setVerificationResult(errorData.message))

    return (
        <div className="App" style={customStyles}>
            <Autocomplete
                    apiKey="live_pub_f5b5b72af120bd8635ea95388bc2a61"
                    onSelection={(selected) => setSelectedAddress(selected.value)}
                    styles={customStyles}
        />
        <p>
            <button onClick={verifyAddress}>Verify</button>
        </p>
        <p>
            {verificationResult}
        </p>
        </div>
    );
}

export default VerifyForm