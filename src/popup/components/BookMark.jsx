import React, { useContext, useEffect, useState } from "react";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import ContextStore from "../context/contextStore";

const BookMark = () => {
    const { title, logo, url } = useContext(ContextStore);
    const [isMarked, setIsMarked] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await chrome.storage.local.get("bookmarks");
            const bookmarks = result.bookmarks || [];
            const isAlreadyBookmarked = bookmarks.some(
                (element) => element.url === url
            );
            if (isAlreadyBookmarked) {
                setIsMarked(true);
            }
        })();
    }, [url]);

    const handelClick = async () => {
        const result = await chrome.storage.local.get("bookmarks");
        const bookmarks = result.bookmarks || [];
        if (!isMarked) {
            bookmarks.push({
                title,
                logo,
                url,
            });
            await chrome.storage.local.set({ bookmarks });
            setIsMarked(true);
        } else {
            const newList = bookmarks.filter((element) => element.url !== url);
            await chrome.storage.local.set({ bookmarks: newList });
            setIsMarked(false);
        }
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
