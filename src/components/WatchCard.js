import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchCard = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])


    return (
        <div className="px-10 py-2 ">
            <h1><iframe width="840"
                className="rounded-xl"
                height="420"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe></h1>
        </div>
    )
}

export default WatchCard
