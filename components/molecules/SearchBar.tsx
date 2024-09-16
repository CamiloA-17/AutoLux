'use client';

import { SearchIcon } from '@primer/octicons-react';
import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex m-5 items-center border border-black rounded-lg overflow-hidden">
      <SearchIcon className="ml-3" size={24} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="p-2 w-full border-none outline-none"
      />
    </form>
  );
}
