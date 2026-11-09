import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { projects } from '../data';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'All' };
  }

  onSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  getFilteredProjects = () => {
    const { selected } = this.state;
    if (selected === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === selected);
  };

  render() {
    const filters = ['All', ...new Set(projects.map((project) => project.category))];

    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.getFilteredProjects()} />
      </div>
    );
  }
}
