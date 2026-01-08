import { FC, useEffect, useState } from "react";
import SlackReactionContainer from "@/components/common/SlackReaction/SlackReactionContainer";
import unicorn from "@/img/ninja.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styles from "./IntroBox2.module.scss";

const IntroBox2: FC = () => {
    const [suspensionDots, setSuspensionDots] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const slackMessageClassName = isTyping ? "" : styles.visible;

    useEffect(() => {
        const interval = setInterval(() => {
            setSuspensionDots((t) => {
                if (t.length > 2) {
                    return "";
                } else {
                    return t + ".";
                }
            });
        }, 300);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsTyping(false);
        }, 1800);
        return () => clearTimeout(timeOut);
    }, []);

    const getCurrentTime = () => {
        const now = new Date();
        const minutes = `${now.getMinutes()}`.padStart(2, "0");
        const hours = `${now.getHours()}`.padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    return (
        <div className={styles.introBox2}>
            {isTyping && (
                <p className={styles.typingMessage}>
                    <b>Aayush</b> is typing
                    {suspensionDots}
                </p>
            )}
            <div
                className={`${styles.introBox2SlackMessage} ${slackMessageClassName}`}
            >
                <img
                    className={styles.introBox2SlackMessageImg}
                    src={unicorn}
                    alt="Unicorn avatar"
                />
                <div className={styles.introBox2SlackMessageText}>
                    <div className={styles.introBox2SlackMessageTextHeader}>
                        <b>Aayush Joshi</b>
                        <span
                            className={
                                styles.introBox2SlackMessageTextHeaderTime
                            }
                        >
                            {getCurrentTime()}
                        </span>
                    </div>
                    <p>
                        Hello Beautiful souls ☀️<br></br>
                        <br></br> My name is Aayush, welcome to my online
                        resume! I am currently looking for a fully remote
                        Frontend engineer position. <br></br>
                        <br></br>A developer driven by clarity and strength in design,
                        I gravitate toward minimalist concepts that deliver refined and seamless user experiences.
                        While I hold a meticulous eye for pixel-perfect interfaces,
                        I balance this precision with a pragmatic focus on rapid iteration and dependable delivery. <br></br>
                        <br></br> Beyond development, my interests extend to exploration and culture—discovering exceptional cuisine,
                        travelling with intent, hiking immersive landscapes, and most recently
                        , pursuing the depth and craftsmanship of Nepal's onseen culture.
                        In my spare time, I channel these passions into TravoNep,
                        a Nepal-focused side project,
                        where technology meets travel.
                        &nbsp;
                        <a
                            href="https://joshi.github.io/travoNep/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                        . Another side project I have is an online tool for
                        names of TravoNep in Nepal &nbsp;
                        <a
                            href="https://aayush.github.io/travoNep"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                        .
                    </p>
                    <SlackReactionContainer />
                </div>
            </div>
        </div>
    );
};

export default IntroBox2;
