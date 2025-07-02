# Arla Leads Dashboard - API Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Main Application Components](#main-application-components)
3. [UI Component Library](#ui-component-library)
4. [Utility Functions](#utility-functions)
5. [Custom Components](#custom-components)
6. [Usage Examples](#usage-examples)
7. [Development Setup](#development-setup)

---

## Project Overview

The Arla Leads Dashboard is a React-based web application for managing leads, tracking performance metrics, and viewing analytics. It's built with modern technologies including:

- **React 18.2.0** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **shadcn/ui** - Component library based on Radix UI
- **Lucide React** - Icon library

---

## Main Application Components

### App Component (`App.tsx` / `src/App.jsx`)

The main application component that serves as the entry point and contains the dashboard layout.

#### Props
- None (root component)

#### State Management
```typescript
const [currentView, setCurrentView] = useState('dashboard');
```

#### Key Features
- Dashboard metrics display
- Navigation between different views
- Chart visualizations
- Data tables for transactions and leaderboards
- News and campaign information

#### Usage Example
```jsx
import App from './App';

function Main() {
  return <App />;
}
```

### MyLeads Component (`components/MyLeads.tsx`)

A comprehensive component for managing and displaying lead information with filtering and action capabilities.

#### Props
- None (self-contained component)

#### State Management
```typescript
const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
const [activeTab, setActiveTab] = useState('mailed');
const [activeStatus, setActiveStatus] = useState('gold');
const [showCount, setShowCount] = useState('10');
```

#### Key Features
- Lead type filtering (Mailed, Marketplace, Digital)
- Status filtering (Gold/Silver)
- Bulk selection and operations
- Individual lead actions (Call, Message, Notes)
- Pagination controls

#### Usage Example
```jsx
import { MyLeads } from './components/MyLeads';

function Dashboard() {
  return (
    <div>
      <h1>My Leads</h1>
      <MyLeads />
    </div>
  );
}
```

---

## UI Component Library

### Button Component (`components/ui/button.tsx`)

A versatile button component with multiple variants and sizes.

#### Props
```typescript
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  className?: string;
}
```

#### Variants
- **default**: Primary button with filled background
- **destructive**: Red button for dangerous actions
- **outline**: Button with border, transparent background
- **secondary**: Secondary styling
- **ghost**: Transparent button with hover effects
- **link**: Text-only button styled as a link

#### Sizes
- **default**: Standard height (h-9)
- **sm**: Small height (h-8)
- **lg**: Large height (h-10)
- **icon**: Square button for icons (size-9)

#### Usage Examples
```jsx
import { Button } from './components/ui/button';

// Primary button
<Button>Submit</Button>

// Secondary outline button
<Button variant="outline">Cancel</Button>

// Small destructive button
<Button variant="destructive" size="sm">Delete</Button>

// Icon button
<Button variant="ghost" size="icon">
  <TrashIcon className="h-4 w-4" />
</Button>
```

### Card Components (`components/ui/card.tsx`)

A set of components for creating card layouts with consistent styling.

#### Components
- **Card**: Main container
- **CardHeader**: Header section
- **CardTitle**: Title element
- **CardDescription**: Description text
- **CardContent**: Main content area
- **CardFooter**: Footer section
- **CardAction**: Action area in header

#### Props
All components extend their respective HTML element props with optional `className`.

#### Usage Example
```jsx
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Dashboard Metrics</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
</Card>
```

### Table Components (`components/ui/table.tsx`)

Comprehensive table components for displaying tabular data.

#### Components
- **Table**: Main table container with overflow handling
- **TableHeader**: Table header section
- **TableBody**: Table body section
- **TableFooter**: Table footer section
- **TableRow**: Table row
- **TableHead**: Header cell
- **TableCell**: Data cell
- **TableCaption**: Table caption

#### Props
All components extend their respective HTML table element props with optional `className`.

#### Usage Example
```jsx
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './components/ui/table';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Badge Component (`components/ui/badge.tsx`)

A component for displaying small status indicators or labels.

#### Props
```typescript
interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  asChild?: boolean;
  className?: string;
}
```

#### Variants
- **default**: Primary badge styling
- **secondary**: Secondary badge styling
- **destructive**: Red badge for warnings/errors
- **outline**: Badge with border only

#### Usage Examples
```jsx
import { Badge } from './components/ui/badge';

<Badge>New</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>
```

### Input Component (`components/ui/input.tsx`)

A styled input component with consistent theming.

#### Props
```typescript
interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
  type?: string;
}
```

#### Features
- Focus states with ring styling
- Error states
- File input styling
- Responsive text sizing

#### Usage Example
```jsx
import { Input } from './components/ui/input';

<Input 
  type="email" 
  placeholder="Enter your email"
  className="w-full"
/>
```

### Select Components (`components/ui/select.tsx`)

Dropdown select components built on Radix UI primitives.

#### Components
- **Select**: Root select component
- **SelectTrigger**: Button that opens the dropdown
- **SelectValue**: Displays selected value
- **SelectContent**: Dropdown content container
- **SelectItem**: Individual option
- **SelectLabel**: Option group label
- **SelectSeparator**: Visual separator
- **SelectGroup**: Groups related options

#### Props
Most components extend Radix UI select props. SelectTrigger has additional:
```typescript
interface SelectTriggerProps {
  size?: 'sm' | 'default';
}
```

#### Usage Example
```jsx
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './components/ui/select';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

---

## Utility Functions

### cn Function (`components/ui/utils.ts`)

A utility function for conditionally joining class names with Tailwind CSS optimization.

#### Signature
```typescript
function cn(...inputs: ClassValue[]): string
```

#### Parameters
- `inputs`: Array of class values (strings, objects, arrays)

#### Returns
- `string`: Optimized class string

#### Usage Examples
```jsx
import { cn } from './components/ui/utils';

// Basic usage
const className = cn('text-red-500', 'font-bold');

// Conditional classes
const className = cn(
  'base-class',
  isActive && 'active-class',
  { 'error-class': hasError }
);

// In component
<div className={cn('default-styles', className, props.className)} />
```

---

## Custom Components

### ImageWithFallback Component (`components/figma/ImageWithFallback.tsx`)

A robust image component that displays a fallback when the original image fails to load.

#### Props
```typescript
interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}
```

#### Features
- Automatic fallback on image load error
- Preserves original image attributes
- Displays error placeholder with original URL reference

#### Usage Example
```jsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="https://example.com/image.jpg"
  alt="Profile picture"
  className="w-32 h-32 rounded-full"
/>
```

---

## Usage Examples

### Complete Dashboard Layout

```jsx
import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { MyLeads } from './components/MyLeads';

function Dashboard() {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Arla Leads Dashboard</h1>
            <div className="space-x-2">
              <Button 
                variant={currentView === 'dashboard' ? 'default' : 'outline'}
                onClick={() => setCurrentView('dashboard')}
              >
                Dashboard
              </Button>
              <Button 
                variant={currentView === 'leads' ? 'default' : 'outline'}
                onClick={() => setCurrentView('leads')}
              >
                My Leads
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
          <div className="grid gap-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">125</div>
                  <Badge className="mt-2">+1.3%</Badge>
                </CardContent>
              </Card>
              {/* More metric cards... */}
            </div>
          </div>
        )}

        {currentView === 'leads' && <MyLeads />}
      </main>
    </div>
  );
}

export default Dashboard;
```

### Form with Validation

```jsx
import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    leadType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Add New Lead</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Select onValueChange={(value) => setFormData({...formData, leadType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select lead type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mortgage">Mortgage Protection</SelectItem>
                <SelectItem value="fex">FEX Gold</SelectItem>
                <SelectItem value="digital">Digital Leads</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full">
            Add Lead
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LeadForm;
```

---

## Development Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure
```
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   ├── index.css        # Global styles
│   └── components/
│       ├── MyLeads.jsx  # Leads management component
│       └── ui/          # Reusable UI components
├── components/
│   ├── ui/              # shadcn/ui components
│   └── figma/           # Custom Figma components
├── styles/              # Additional stylesheets
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── index.html           # HTML template
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Styling
The project uses Tailwind CSS for styling with a custom design system. Key features:
- Responsive design patterns
- Dark mode support
- Custom color palette
- Component-specific styling

### Icons
Icons are provided by Lucide React. Common icons used:
- `BarChart3`, `Users`, `Target`, `DollarSign` - Dashboard metrics
- `Phone`, `MessageSquare`, `FileText` - Actions
- `Filter`, `ChevronDown`, `MoreHorizontal` - UI controls

---

## Best Practices

### Component Usage
1. **Always use the provided UI components** for consistency
2. **Extend with className prop** for custom styling
3. **Use TypeScript interfaces** for prop validation
4. **Follow naming conventions** for components and props

### Styling Guidelines
1. **Use Tailwind utility classes** over custom CSS
2. **Leverage the design system colors** (chart-1, chart-2, etc.)
3. **Implement responsive design** with Tailwind breakpoints
4. **Use the cn utility** for conditional class names

### State Management
1. **Use local state** for component-specific data
2. **Lift state up** when multiple components need access
3. **Consider context** for deeply nested state sharing
4. **Type your state** with TypeScript interfaces

### Performance
1. **Use React.memo** for expensive components
2. **Implement proper key props** in lists
3. **Optimize images** with ImageWithFallback component
4. **Lazy load** heavy components when possible

---

This documentation provides a comprehensive overview of all public APIs, functions, and components in the Arla Leads Dashboard project. For additional support or questions, refer to the individual component files or the project's development team.