import React, {useEffect, useState} from "react";
import {Stack} from "@fluentui/react";
import {Container, Col, Row} from "react-bootstrap";
import {EndPoint} from "../Auth/config";
import useData from "../Auth/APIHelperHook";
import '../assets/sass/Components/style.scss';


export interface NewsProperties {
    by: string;
    time: number;
    score: number;
    title: string;
    url: string;
    kids: string;
}


function NewsItem(props: number) {
    const [newsItem, setNewsItem] = useState<NewsProperties>();
    const [data, query, setQuery, apiLoading, error, errorMessage] = useData(EndPoint.GetItem, "GET", [])


    const parseData = () => {

        let helper: NewsProperties = {
            by: data.by,
            time: data.time,
            score: data.score,
            title: data.title,
            url: data.url,
            kids: data.kids
        };
        setNewsItem(helper);

    }

    useEffect(() => {
        const paramArr = {
            "id": props + ""
        };
        setQuery(paramArr)

    }, [props])

    useEffect(() => {
        debugger
        if (data !== undefined && data.id !== undefined && error == 0) {
            parseData();
        }
    }, [data]);

    return (
        <div>
            <h6>News feed</h6>
            {newsItem === undefined
                ? ""
                :
                <Container fluid className="newsItem">
                    <Row className="ms-depth-4 contact-container">
                        <Col className="newsText" md={8}>
                          <span className="newsSource">
                              {newsItem.by}
                          </span>
                            <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                                <span className="newsTitle">{newsItem.title}</span>
                            </a>
                            <span className="newsDescription">
                            Score: {newsItem.score}
                          </span>
                            <span className="newsDate">Date published{newsItem.time}</span>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    );
}

export default NewsItem;