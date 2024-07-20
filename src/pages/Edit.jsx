import React, { createRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Text from '../components/Text'
import { exportComponentAsJPEG } from 'react-component-export-image'

function Edit() {
    const [params] = useSearchParams()
    const [count, setCount] = useState(0)

    const memeRef = createRef()

    const addText = () => {
        setCount(count + 1)
    }

    console.log(params.get('url'))
    return (
        <div className="meme-container">
            <div style={{ width: "550px", border: "1px solid" }}>
                <div ref={memeRef} className='meme mt-5 mb-5'>
                    <img src={params.get('url')} alt={params.get('name')} width='300px' />
                    {
                        Array(count).fill(0).map(e => <Text />)
                    }
                </div>
                <div className='button-container'>
                    <Button onClick={addText} className='primary'>Add Text</Button>
                    <Button variant='success' onClick={e => exportComponentAsJPEG(memeRef)} className='secondary'>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default Edit