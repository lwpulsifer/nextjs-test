import React from "react";
import BasePage from "../../components/BasePage";
import useSWR from "swr";
import Fetcher from "../../lib/fetch/fetcher";
import PageViewsDisplay from "../../components/pageViews/PageViewsDisplay";

const Views = () => {
  return (
    <BasePage isHomePage={false} title={"Page views"}>
      <main
        className={"flex flex-col items-center gap-5 w-full"}
      >
        <h1 className={"text-3xl text-header font-bold"}>Page Views</h1>
        <PageViewsDisplay />
      </main>
    </BasePage>
  );
};

export default Views;