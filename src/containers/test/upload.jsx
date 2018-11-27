import React from 'react';
import FileUpload from 'xl_alioss_react'

export default class Main extends React.Component {
    state = {
        imgUlr:''
    }
    render() {
        return (
            <div style={{padding:30,fontSize:30}}>
                <FileUpload
                    url='http://127.0.0.1:8088/common/upload/alioss/vue'
                    uploadEnd={(data) => {
                        this.setState({
                            imgUlr:data
                        })
                    }}
                    // upload={(data, file, load) => {
                    //     load(Object.assign({}, data, {file}))
                    // }}
                >
                    上传
                </FileUpload>
                <div>
                    {this.state.imgUlr?
                        <img src={this.state.imgUlr} alt=""/>:''}
                </div>
            </div>
        )
    }
}

