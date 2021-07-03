///Based on https://amanscripts.com/creating-react-hook-for-fetching-data
import { useState, useEffect } from "react";


function useData(endpoint: string, callType: string, params: any) {
    const [query, setQuery] = useState<{ [key: string]: string }>({
        query: "react hooks"
    });
    const [data, setData] = useState<any>([]);

    // loading
    const [loading, setLoading] = useState<boolean>(false);

    // error state
    const [error, setError] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const StatusEnum = Object.freeze({ "Ok": 0, "Error": 1, "RecordNotFound": 2, "Unathorized": 3 });

    // query changed, make API call
    useEffect(() => {
        if (query["query"] !== undefined) {//ignore the internal initialization of query
            return;
        }
        async function fetchData() {

            setError(0);
            setErrorMessage("");
            setLoading(true);
            setData([]);
            const headers = new Headers();
            let body = ''
            if (callType == 'POST' && query.body != undefined) {
                body = query.body;
                headers.append("Content-type", "application/json; charset=UTF-8");
                query.body = '';
                delete query.body;
            }
            let response: Response;
            if (query.body !== undefined && query.body.length === 0){
                response = await fetch(endpoint, {
                    method: callType,
                    headers: headers,
                    body: callType == 'GET' || callType == 'HEAD' ? undefined : JSON.stringify(body),
                });
                delete query.body;
            }
            else {
                response = await fetch(endpoint + '/' + serialize(query) + '.json', {
                    method: callType,
                    headers: headers,
                    body: callType == 'GET' || callType == 'HEAD' ? undefined : JSON.stringify(body),
                });
            }
            if (response.ok) {
                let result = await response.json();
                setLoading(false);
                setData(result);
                setErrorMessage("");
                setError(StatusEnum.Ok);
            }
        }
        fetchData().catch((error) => {
            if (error.message !== "REQUEST_CANCELLED") {
                const msg: string = error.message;
                setErrorMessage("Error trying to reach the API.\n" + msg);
                setError(StatusEnum.Error);
            }
        });
    }, [query]);

    const serialize = (obj: any) => {
        let str = [];
        for (let p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(obj[p]));
            }
        return str.join("/");
    }

    return [data, query, setQuery, loading, error, errorMessage] as const;
}

export default useData;