import React, { useState } from "react";
import { SearchInputGPT4 } from "./GPT4";
import { SearchInput } from "./searchInput";

export function LSP() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchInput value={value} onChange={handleChange} isLarge />
    // <SearchInputGPT4 value={value} onChange={handleChange} isLarge />
  );
}
