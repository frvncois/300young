import Article from "@/components/article/Article";
import React from "react";

function page({ params }) {
  console.log(params.articleSlug);
  return <Article />;
}

export default page;
