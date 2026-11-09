import React from 'react';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={filter === selected ? 'toolbar-button active' : 'toolbar-button'}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
