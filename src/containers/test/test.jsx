import React from 'react/umd/react.development';
import Storage, {get, set, clear, remove} from 'xl_storage/lib/index'
// import {error} from '../util/pc/toast'
import PageTransition, {setDirection, BoxPage} from 'xl_pagetransition'


export default class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            keyName: 1
        }
    }


    setTime = (keyName) => {
        if (keyName != 1) setDirection('left')
        else setDirection('right')
        this.setState({
            keyName
        })
    }

    render() {
        const {keyName} = this.state
        return (
            <div style={{padding: 30, fontSize: 30}}>
                <PageTransition>
                    <BoxPage key={keyName}>
                        <div onClick={() => {
                            this.setTime(keyName == 1 ? 2 : 1)
                        }}>{keyName}
                        </div>
                    </BoxPage>
                </PageTransition>
            </div>
        )
    }
}

