import SESSION from './session'
import {error, warn} from 'src/containers/util/toast'
export const get = async (url, options) => {
    options.method = 'get'
    return await fetchData(url, options);
}

export const post = async (url, options) => {
    options.method = 'post'
    options.body = JSON.stringify(options.data?options.data:{})
    return await fetchData(url, options);
}

export const put = async (url, options) => {
    options.method = 'put'
    options.body = JSON.stringify(options.data?options.data:{})
    return await fetchData(url, options);
}

export const del = async (url, options) => {
    options.method = 'delete'
    return await fetchData(url, options);
}


async function fetchData(url, options) {
    // console.log(DEVELOPMETN_URL)
    if (!(/^https:\/\/|^http:\/\//.test(url))) url = DEVELOPMETN_URL + url
    let opts = Object.assign({
        loading: true,
        data: {},
        url,
        deal: true,
        credentials: 'include' ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        // noCredentials: true,
        mode: 'cors',
    }, options)
    return await fetch(url, opts).then((rst) => {
        return rst.json()

    }).then(resData=>{
        if (opts.deal) {
            return dealRst(resData, opts)
        }
        return resData
    }).catch(function (err) {
        console.log('catch fetch:' + err)
    })
}

function dealRst(resData, opts) {
    let {status, msg, data = {}} = resData;
    console.log(`----${opts.url}---`,resData)
    if (status != 1) {
        error({msg})
        if(status == 0){
            history.href='/login'
        }
        return null
    }
    return data

}
