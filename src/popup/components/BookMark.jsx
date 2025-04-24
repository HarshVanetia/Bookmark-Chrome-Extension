import React, { useContext, useEffect, useState } from "react";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import ContextStore from "../context/contextStore";

const BookMark = () => {
    const { title, logo, url } = useContext(ContextStore);
    const [isMarked, setIsMarked] = useState(false);
    let bookmarks = [];

    useEffect(() => {
        (async () => {
            bookmarks = await chrome.storage.local.get(["bookmarks"]);
            bookmarks.forEach((element) => {
                if (element.url === url) {
                    setIsMarked(true);
                }
            });
        })();
    }, [url]);

    const handelClick = async () => {
        setIsMarked(true);
        const bookmarks = await chrome.storage.local.get(["bookmarks"]);
        bookmarks.push({
            title,
            logo,
            url,
        });
    };

    return (
        <div
            style={{
                cursor: "pointer",
            }}
            onClick={handelClick}
        >
            {isMarked ? (
                <RxBookmarkFilled size={24} />
            ) : (
                <RxBookmark size={24} />
            )}
        </div>
    );
};

export default BookMark;
