import React, {useEffect, useState} from "react";
import {Container, Col, Row} from "react-bootstrap";
import {EndPoint} from "../Auth/config";
import useData from "../Auth/APIHelperHook";
import '../assets/sass/Components/style.scss';


export interface CommentProperties {
    by: string;
    time: Date;
    score: number;
    text: string;
    url: string;
    kids: string;
}

export interface CommentItemProps {
    children: string;
    id: number;
}


function CommentItem(props: CommentItemProps) {
    const [commentItem, setCommentItem] = useState<CommentProperties>();
    const [data, query, setQuery, apiLoading, error, errorMessage] = useData(EndPoint.GetItem, "GET", [])


    const parseData = () => {
        if (data !== undefined) {
            let helper: CommentProperties = {
                by: data.by,
                time: new Date(data.time * 1000),
                score: data.score,
                text: data.text,
                url: data.url,
                kids: data.kids
            };
            setCommentItem(helper);
        }
    }


    useEffect(() => {
        if(props.id !== undefined) {
            const paramArr = {
                "id": props.id + ""
            };
            setQuery(paramArr)
        }

    }, [props])

    useEffect(() => {
        if (data !== undefined && data.id !== undefined && error == 0) {
            parseData();
        }
    }, [data]);

    return (
        <div>
            {commentItem === undefined
                ? ""
                :
                <div>

                        <Container fluid className="newsItem">
                            <Row className="ms-depth-4 contact-container">
                                <Col className="newsText" md={4}>
                          <span className="newsSource">
                              {commentItem.by} says:
                          </span>
                                    <span className="newsTitle">{commentItem.text}</span>
                                    <span className="newsDescription" > Score: {commentItem.score} </span>
                                    <span className="newsDate">Date published on: {commentItem.time.toDateString()}</span>
                                </Col>
                            </Row>
                        </Container>

                </div>
            }
        </div>
    );
}

;

export default CommentItem;