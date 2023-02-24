export default function addHeaders(
    xhr: XMLHttpRequest,
    headers: Record<string, string> | undefined
) {
    //headers
    const headerKeys: string[] = Object.keys(headers || {});
    //const headerValues: string[] = Object.values(headers);
    for (let i = 0; i < headerKeys.length && headers; i++) {
        console.log("uploadFile headers", headerKeys[i], headers[headerKeys[i]]);
        xhr.setRequestHeader(
            headerKeys[i],
            headers[headerKeys[i]]
        );
    }


}