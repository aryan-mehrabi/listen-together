import React, { useState, useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { searchVideos } from "apis/youtube";
import useDebouncing from "hooks/useDebouncing";
import useIntersection from "hooks/useIntersection";
import useRightSidebar from "context/RightSidebarContext";
import MusicItem from "./MusicItem";
import Spinner from "components/Spinner";
import Input from "components/Input";
import { BiX } from "react-icons/bi";

const SearchMusic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);
  const isVisible = useIntersection(ref);
  const debouncedTerm = useDebouncing(searchTerm, 1000);
  const { setRightSidebar } = useRightSidebar();

  const { data, isLoading, isError, isIdle, fetchNextPage } = useInfiniteQuery(
    ["tracks", debouncedTerm],
    searchVideos,
    {
      refetchOnMount: false,
      staleTime: Infinity,
      getNextPageParam: (lastPage) => lastPage.nextPageToken,
      retry: 5,
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
      .concat(...data.pages.map((res) => res.items))
      .map((track) => <MusicItem key={track.id.videoId} {...{ track }} />);
  };

  return (
    <div
      className={`w-full sm:border-l sm:border-neutral-700 sm:w-[37%] sm:min-w-[200px] sm:max-w-sm 
        flex flex-col`}
    >
      <div className="px-5 pt-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Search Music</h2>

          <button type="button" onClick={() => setRightSidebar("")}>
            <BiX className="text-3xl" />
          </button>
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
    </div>
  );
};

export default SearchMusic;
