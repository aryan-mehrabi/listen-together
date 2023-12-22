import React, { useState, useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchTracks } from "apis/youtube";
import useDebouncing from "hooks/useDebouncing";
import useIntersection from "hooks/useIntersection";
import useRightSidebar from "context/RightSidebarContext";
import MusicItem from "./MusicItem";
import Spinner from "components/Spinner";
import Input from "components/Input";

const SearchMusic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);
  const isVisible = useIntersection(ref);
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

    return []
      .concat(...data.pages.map(res => res.items))
      .map(track => <MusicItem key={track.id.videoId} {...{ track }} />);
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
        <Input
          setValue={setSearchTerm}
          value={searchTerm}
          placeholder="Search for artists, tracks"
          type="text"
          className="mt-6 mb-2"
        />
      </div>
      <div className="overflow-y-auto overflow-x-hidden">
        <ul>{renderMusicItems()}</ul>
        <div className="p-4 flex items-center justify-center" ref={ref}>
          <Spinner className="w-8 h-8" />
        </div>
      </div>
    </>
  );
};

export default SearchMusic;
