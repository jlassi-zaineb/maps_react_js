import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

export default function ZipComponent() {
    return (
        <div>
            <InputGroup className="mb-3">

                <InputGroup.Text id="inputGroup-sizing-default">Code postal</InputGroup.Text>

                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />

            </InputGroup>
            <Button>Chercher</Button>
        </div>
    )
}
