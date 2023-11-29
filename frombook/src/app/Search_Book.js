"use client";
import "./globals.css";

import React from "react";
import { Button, Input } from "antd";

export function Search_Book() {
  return (
    <div class="container">
      <div class="Search_Bar">
        {/* w-[335px] h-[50px] rounded-[18px] bg-[#0d0f14] */}
        <input
          class="Search_Bar_Input"
          type="text"
          placeholder="검색하고 싶은 책이 무엇인가요?"
        />
        <button type="button" onclick="alert(`Search Book!`)">
          <object
            class="icon_2_search"
            data="/icon_2_search.svg"
            type="image/svg+xml"
          />
        </button>
      </div>
    </div>
  );
}
