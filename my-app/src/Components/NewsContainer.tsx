import React, {useEffect, useState} from "react";
import {Stack} from "@fluentui/react";
import {Container, Col, Row} from "react-bootstrap";
import {EndPoint} from "../Auth/config";
import useData from "../Auth/APIHelperHook";
import '../assets/sass/Components/style.scss';
import NewsItem from "./NewsItem";


export interface NewsStories {
    ids: number[];

}


function NewsContainer(props:string) {
    const [newsStories, setNewsStories] = useState<NewsStories>();
    const [data, query, setQuery, apiLoading, error, errorMessage] = useData(EndPoint.BestStories, "GET", [])

    const parseData = () => {
        let helper: NewsStories = {
            ids: data ,
        };
        setNewsStories(helper);
    }
    useEffect(() => {
        setQuery({"body":""})
    },[props])

    useEffect(() => {
        if (data !== undefined  && error === 0) {
            parseData();
        }
    }, [data]);

    return (
        <div className="NewsScroll">
            <h6>News feed</h6>
            <Stack>
            {newsStories === undefined || newsStories.ids.length === 0
                ? ""
                : newsStories.ids.map((id) => <NewsItem id={id}> </NewsItem>)
            }
            </Stack>
        </div>
    );
}

export default NewsContainer;
