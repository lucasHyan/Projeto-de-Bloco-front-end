import React, { useState } from "react";
import "../App.css";
import { Banner } from "../layout/Banner";
import { ContentCards } from "../layout/ContentCards";

export function HomePage() {
  return (
    <div>
      <Banner />
      <ContentCards />
    </div>
  );
}
