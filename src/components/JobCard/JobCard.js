import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Flex, Spacer } from "@chakra-ui/react";
import { MdDateRange } from 'react-icons/md'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { DarkModeContext } from "../../contexts/ThemeContext";
import styles from './JobCard.module.css'

const JobCard = (props) => {
    let { darkMode } = useContext(DarkModeContext)
    const [bookmarkClick, setBookmarkClick] = useState(false)
    darkMode = false
    return (
        <>

            <Card className={darkMode ? styles.cardHoverDark : styles.cardHover} style={{ width: '55vw', height: "auto" }}>

                {/*      <Card.Header className={darkMode ? styles.fontColorDark : styles.fontColor} style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        <Flex flexDirection="row" align="center">
                            <img className={styles.image} src="/building.png" width={20} />&nbsp;{props.job.company}
                        </Flex>
    </Card.Header>*/}

                <Card.Body className={darkMode ? styles.fontColorDark : styles.fontColor} style={{ padding: "20px 30px", display: "flex", flexDirection: "column" }}>
                    <div className={styles.bookmarkPosition}>
                        <Link to={`/job/${props.job.slug}`}>
                            <Card.Title className={styles.cardTitle}>{props.job.title}</Card.Title>
                        </Link >
                        <button onClick={() => setBookmarkClick(!bookmarkClick)}>
                            {bookmarkClick ? <FaBookmark className={styles.bookmarkSelected} /> : <FaRegBookmark className={styles.bookmark} />}</button>
                    </div>
                    <Card.Text style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} >
                        <Flex className={styles.cardSubTitle} color="#001E4C" flexDirection="row" align="center">
                            <div >{props.job.company}</div>
                            &nbsp; . &nbsp;
                            <div style={{ color: "green" }}>{props.job.dateAdded.slice(0, 10)}</div>
                        </Flex>
                        <br />
                        <Flex flexDirection="row" align="center" flexWrap="wrap">
                            {props.job.tags.slice(0, 5).map((tag) => {
                                return (
                                    <div style={{ marginBottom: "3px" }}>
                                        <div className={styles.badge}>{tag.text}</div>&nbsp;
                                    </div>
                                );
                            })}

                        </Flex>


                    </Card.Text>

                </Card.Body>

            </Card>
        </>
    )
}

export default JobCard
