import type { SkillCategory } from '../types';
import Icon from '../../../components/AppIcon';

interface CategoryFilterProps {
  categories: SkillCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-fast ${
          activeCategory === 'all' ?'bg-primary text-primary-foreground shadow-md' :'bg-surface text-text-secondary hover:bg-muted hover:text-foreground'
        }`}
      >
        All Skills
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-fast ${
            activeCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-surface text-text-secondary hover:bg-muted hover:text-foreground'
          }`}
        >
          <Icon
            name={category.icon}
            size={16}
            strokeWidth={2}
            color={activeCategory === category.id ? 'currentColor' : category.color}
          />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;