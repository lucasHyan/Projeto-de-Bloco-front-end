import React from 'react';
import AboutText from "../components/AboutText";
import ContentCard from "../components/ContentCard";

export function ContentCards({ onClick }) {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <AboutText />
      <div className="grid grid-cols-2 Small-At:grid-cols-3 gap-4 pt-0 w-full max-w-screen-lg mx-auto">
        <ContentCard
          image="https://source.unsplash.com/random/800x600"
          title="Cartão A"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onClick={onClick}
        />
        <ContentCard
          image="https://source.unsplash.com/random/800x601"
          title="Cartão B"
          paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          onClick={onClick}
        />
        <ContentCard
          image="https://source.unsplash.com/random/800x602"
          title="Cartão C"
          paragraph="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          onClick={onClick}
        />
        <ContentCard
          image="https://source.unsplash.com/random/800x604"
          title="Cartão D"
          paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          onClick={onClick}
        />
        <ContentCard
          image="https://source.unsplash.com/random/800x604"
          title="Cartão E"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onClick={onClick}
        />
        <ContentCard
          image="https://source.unsplash.com/random/800x605"
          title="Cartão F"
          paragraph="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          onClick={onClick}
        />

        <div className="h-20"></div>
      </div>
    </div>
  );
}
