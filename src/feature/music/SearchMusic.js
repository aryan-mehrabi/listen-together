import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchTracks } from "apis/youtube";
import useDebouncing from "hooks/useDebouncing";
import useIntersection from "hooks/useIntersection";
import useRightSidebar from "context/RightSidebarContext";
import MusicItem from "./MusicItem";
import Spinner from "components/Spinner";

const SearchMusic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [spinner, setSpinner] = useState(null);
  const isVisible = useIntersection(spinner);
  const debouncedTerm = useDebouncing(searchTerm, 1000);
  const { setRightSidebar } = useRightSidebar();

  const { data, isLoading, isError, isIdle, fetchNextPage } = useInfiniteQuery(
    ["tracks", debouncedTerm],
    fetchTracks,
    {
      refetchOnMount: false,
      staleTime: Infinity,
      getNextPageParam: lastPage => lastPage.nextPageToken,
    }
  );

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [isVisible]);

  const renderMusicItems = () => {
    if (isLoading || isError || isIdle) return;

    const tracks = []
      .concat(...data.pages.map(res => res.items))
      .map(track => <MusicItem key={track.id.videoId} {...{ track }} />);

    return (
      <>
        {tracks}
        <div className="p-4 flex items-center justify-center" ref={setSpinner}>
          <Spinner className="w-8 h-8" />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="px-5 pt-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Search Music</h2>
          <i
            onClick={() => setRightSidebar("")}
            className="fa-solid fa-xmark text-3xl cursor-pointer"
          ></i>
        </div>
        <input
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search for artists, tracks"
          type="text"
          className="w-full mt-6 mb-2 bg-neutral-700 p-2 rounded-sm"
        />
      </div>
      <div className="overflow-y-auto overflow-x-hidden">
        {renderMusicItems()}
      </div>
    </>
  );
};

export default SearchMusic;
