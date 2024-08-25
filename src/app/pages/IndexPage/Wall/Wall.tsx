import React, { type ReactNode, useMemo } from 'react';

import { Section } from '../Section/Section';

import styles from './Wall.module.scss';

type CelebrityKey = 'buterin' | 'carlson' | 'graham' | 'musk' | 'snowden';

interface Quote {
    /**
     * Author name.
     */
    author: string;
    /**
     * Message creation date.
     */
    date: Date;
    /**
     * Author key.
     */
    key: CelebrityKey;
    /**
     * Message text.
     */
    text: ReactNode;
    /**
     * Twitter message link.
     */
    source: string;
}

function celebrityImage(key: CelebrityKey, scale: number): string {
    return `/img/celebrities/${key}/@${scale}x.png`;
}

function formatDate(date: Date): string {
    return Intl
        .DateTimeFormat('en-US', {
            day: '2-digit',
            hourCycle: 'h24',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit',
            second: undefined,
        })
        .format(date)
}

export function Wall() {
    const quotes = useMemo<Quote[]>(() => [
        {
            author: 'Elon Musk',
            date: new Date(Date.UTC(2024, 7, 25, 5, 4)),
            key: 'musk',
            source: 'https://x.com/elonmusk/status/1827572720936030703',
            text: '#FreePavel',
        },
        {
            author: 'Vitalik Buterin',
            date: new Date(Date.UTC(2024, 7, 25, 7, 3)),
            key: 'buterin',
            source: 'https://twitter.com/VitalikButerin/status/1827602680388239582',
            text: (
                <>
                    <p>I've criticized Telegram before for not being serious with encryption.</p>
                    <p>
                        But (given the info available so far: the charge seems to be just being
                        "unmoderated" and not giving up people's data), this looks very bad and
                        worrying for the future of software and comms freedom in Europe.
                    </p>
                </>
            ),
        },
        {
            author: 'Edward Snowden',
            key: 'snowden',
            // fixme: openTelegramLink
            text: (
                <p>
                    The arrest of @Durov is an assault on the basic human rights of speech and
                    association. I am surprised and deeply saddened that Macron has descended
                    to the level of taking hostages as a means for gaining access to private
                    communications. It lowers not only France, but the world.
                </p>
            ),
            date: new Date(), //fixme
            source: 'https://twitter.com/VitalikButerin/status/1827602680388239582',
        },
        {
            author: 'Tucker Carlson',
            date: new Date(Date.UTC(2024, 7, 24, 21, 37)),
            key: 'carlson',
            source: 'https://x.com/TuckerCarlson/status/1827460234887008277',
            text: (
                <p>
                    Pavel Durov left Russia when the government tried to control his social media
                    company, Telegram. But in the end, it wasn't Putin who arrested him for
                    allowing the public to exercise free speech. It was a western country, a Biden
                    administration ally and enthusiastic NATO member, that locked him away. Pavel
                    Durov sits in a French jail tonight, a living warning to any platform owner who
                    refuses to censor the truth at the behest of governments and intel agencies.
                    Darkness is descending fast on the formerly free world.
                </p>
            ),
        },
        {
            author: 'Paul Graham',
            date: new Date(Date.UTC(2024, 7, 25, 2, 32)),
            key: 'graham',
            source: 'https://x.com/paulg/status/1827534519618224335',
            text: (
                <p>
                    It's hard to imagine a country both arresting the founder of Telegram and being
                    a major startup hub.
                </p>
            ),
        },
    ], []);

    return (
        <Section title={'Durov’s Wall'}>
            <div className={styles.content}>
                {quotes.map(({ key, date, ...q }) => (
                    <div className={styles.quote} key={key}>
                        <div className={styles.quoteTop}>
                            <img
                                className={styles.quoteImage}
                                alt={`${q.text} quote`}
                                src={celebrityImage(key, 1)}
                                srcSet={`${celebrityImage(key, 2)} 2x`}
                            />
                            <div className={styles.quoteMessage}>
                                <p className={styles.quoteAuthor}>{q.author}</p>
                                <div className={styles.quoteText}>{q.text}</div>
                            </div>
                        </div>
                        <div className={styles.quoteDate}>
                            {formatDate(date)} via X (ex. Twitter)
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}