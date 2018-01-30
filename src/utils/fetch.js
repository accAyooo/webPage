function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

export function get(url, data) {
    let myHeaders = true ? new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain'
    }) : new Headers({'Content-Type': 'text/plain'});
    let mode = true ? "cors" : "same-origin";

    data = data == null ? {} : data;
    let paramStr = obj2params(data);

    return fetch(url + paramStr, {
        headers: myHeaders,
        mode: mode,
        credentials: 'include'
    });
}

