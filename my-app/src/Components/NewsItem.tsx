import React, {useEffect, useState} from "react";
import {Container, Col, Row} from "react-bootstrap";
import {EndPoint} from "../Auth/config";
import useData from "../Auth/APIHelperHook";
import '../assets/sass/Components/style.scss';
import CommentItem from "./CommentItem";
import {PrimaryButton} from "@fluentui/react";
import Collapse from "@kunukn/react-collapse";
;

export interface NewsProperties {
    by: string;
    time: Date;
    score: number;
    title: string;
    url: string;
    kids: number[];
}

export interface NewsItemProps {
    children: string;
    id: number;
}


function NewsItem(props: NewsItemProps) {
    const [newsItem, setNewsItem] = useState<NewsProperties>();
    const [data, query, setQuery, apiLoading, error, errorMessage] = useData(EndPoint.GetItem, "GET", [])
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const onClick = () =>{
        setIsOpened(!isOpened)
    };


    const parseData = () => {

        let helper: NewsProperties = {
            by: data.by,
            time: new Date(data.time * 1000),
            score: data.score,
            title: data.title,
            url: data.url,
            kids: data.kids
        };
        setNewsItem(helper);

    }

    useEffect(() => {
        const paramArr = {
            "id": props.id + ""
        };
        setQuery(paramArr)

    }, [props])

    useEffect(() => {
        if (data !== undefined && data.id !== undefined && error == 0) {
            parseData();
        }
    }, [data]);

    return (
        <div>
            {newsItem === undefined
                ? ""
                :
                <div className="ms-depth-4 contact-container">
                <Container fluid className="newsItem">
                    <Row >
                        <Col className="newsText" md={4}>
                          <span className="newsSource">
                              {newsItem.by}
                          </span>
                            <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                                <span className="newsTitle">{newsItem.title}</span>
                            </a>
                            <span className="newsDescription">
                            Score: {newsItem.score}
                          </span>
                            <span className="newsDate">Date published: {newsItem.time.toDateString()}</span>
                        </Col>
                    </Row>
                </Container>
                    <PrimaryButton id="button" className = "button" onClick={onClick}>View Comments</PrimaryButton>
                    <Collapse isOpen={isOpened}>
                    {newsItem.kids === undefined || newsItem.kids.length === 0
                        ? ""
                        : newsItem.kids.slice(0,3).map((id) => <CommentItem id={id}> </CommentItem>)
                    }
                    </Collapse>
                </div>
            }
        </div>
    );
};

export default NewsItem;