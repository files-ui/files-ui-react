export default function (
    formData: FormData,
    extraData: Record<string, string> | undefined
) {
    //headers
    const extraDataKeys: string[] = Object.keys(extraData || {});
    //const headerValues: string[] = Object.values(headers);
    for (let i = 0; i < extraDataKeys.length && extraData; i++) {
        console.log("uploadFile extraData", extraDataKeys[i], extraData[extraDataKeys[i]]);

        formData.append(extraDataKeys[i], extraData[extraDataKeys[i]]);

    }

    formData.append("otherValue", "HAAAAAAAAAAAAAAa");

}