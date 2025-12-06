import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import type { FilterOption, ProjectFilters } from '../types';

interface ProjectFiltersProps {
  filters: ProjectFilters;
  onFilterChange: (filters: ProjectFilters) => void;
  categoryOptions: FilterOption[];
  technologyOptions: FilterOption[];
  difficultyOptions: FilterOption[];
  statusOptions: FilterOption[];
}

const ProjectFiltersComponent = ({
  filters,
  onFilterChange,
  categoryOptions,
  technologyOptions,
  difficultyOptions,
  statusOptions,
}: ProjectFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (value: string | number) => {
    onFilterChange({ ...filters, category: value as string });
  };

  const handleTechnologyChange = (value: string | number) => {
    onFilterChange({ ...filters, technology: value as string });
  };

  const handleDifficultyChange = (value: string | number) => {
    onFilterChange({ ...filters, difficulty: value as string });
  };

  const handleStatusChange = (value: string | number) => {
    onFilterChange({ ...filters, status: value as string });
  };

  const handleReset = () => {
    onFilterChange({
      category: 'all',
      technology: 'all',
      difficulty: 'all',
      status: 'all',
      search: '',
    });
  };

  const activeFilterCount = [
    filters.category !== 'all',
    filters.technology !== 'all',
    filters.difficulty !== 'all',
    filters.status !== 'all',
    filters.search !== '',
  ].filter(Boolean).length;

  return (
    <div className="bg-card rounded-lg border border-border p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon name="Filter" size={20} strokeWidth={2} className="text-primary" />
          <h3 className="text-lg font-bold text-foreground">Filter Projects</h3>
          {activeFilterCount > 0 && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
              {activeFilterCount} active
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              iconSize={16}
              onClick={handleReset}
            >
              Clear All
            </Button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors duration-fast"
            aria-label="Toggle filters"
          >
            <Icon
              name={isExpanded ? 'ChevronUp' : 'ChevronDown'}
              size={20}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2">
            <Input
              type="search"
              placeholder="Search projects..."
              value={filters.search}
              onChange={handleSearchChange}
              className="w-full"
            />
          </div>

          <Select
            placeholder="Category"
            options={categoryOptions.map(opt => ({
              value: opt.value,
              label: `${opt.label} (${opt.count})`,
            }))}
            value={filters.category}
            onChange={handleCategoryChange}
          />

          <Select
            placeholder="Technology"
            options={technologyOptions.map(opt => ({
              value: opt.value,
              label: `${opt.label} (${opt.count})`,
            }))}
            value={filters.technology}
            onChange={handleTechnologyChange}
          />

          <Select
            placeholder="Difficulty"
            options={difficultyOptions.map(opt => ({
              value: opt.value,
              label: `${opt.label} (${opt.count})`,
            }))}
            value={filters.difficulty}
            onChange={handleDifficultyChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <Select
            placeholder="Status"
            options={statusOptions.map(opt => ({
              value: opt.value,
              label: `${opt.label} (${opt.count})`,
            }))}
            value={filters.status}
            onChange={handleStatusChange}
            className="w-full md:w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectFiltersComponent;