# Quick Reference Guide

A developer's quick reference for common patterns and components in the Arla Leads Dashboard.

## Common Import Patterns

```jsx
// UI Components (most frequently used)
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

// Form Components
import { Checkbox } from './components/ui/checkbox';
import { Switch } from './components/ui/switch';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';

// Layout Components
import { Separator } from './components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

// Overlay Components
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';

// Icons
import { BarChart3, Users, Target, DollarSign, Phone, MessageSquare, Filter } from 'lucide-react';

// Utilities
import { cn } from './components/ui/utils';
```

## Common Component Patterns

### Basic Card Layout
```jsx
<Card>
  <CardHeader>
    <CardTitle>Title Here</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>
```

### Data Table with Actions
```jsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>
          <Badge variant="outline">{item.status}</Badge>
        </TableCell>
        <TableCell>
          <Button size="sm">Edit</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Form with Validation
```jsx
<form className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  
  <div>
    <Label htmlFor="status">Status</Label>
    <Select onValueChange={setStatus}>
      <SelectTrigger>
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="inactive">Inactive</SelectItem>
      </SelectContent>
    </Select>
  </div>
  
  <Button type="submit">Submit</Button>
</form>
```

### Modal Dialog
```jsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <div className="py-4">
      {/* Dialog content */}
    </div>
  </DialogContent>
</Dialog>
```

### Tabs Navigation
```jsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Tab 1 content</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Tab 2 content</p>
  </TabsContent>
</Tabs>
```

## Styling Patterns

### Common Class Combinations
```jsx
// Container layouts
className="container mx-auto px-4 py-8"
className="max-w-screen-2xl mx-auto"

// Grid layouts
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
className="grid gap-6"

// Flex layouts
className="flex items-center justify-between"
className="flex items-center space-x-2"

// Spacing
className="space-y-4"  // Vertical spacing
className="space-x-2"  // Horizontal spacing
className="gap-4"      // Grid/flex gap

// Text styling
className="text-sm text-muted-foreground"
className="text-2xl font-bold"
className="text-foreground"

// Background and borders
className="bg-background"
className="bg-muted/50"
className="border border-border"
className="rounded-lg"
```

### Responsive Design
```jsx
// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

// Responsive text
className="text-sm md:text-base lg:text-lg"

// Responsive spacing
className="p-4 md:p-6 lg:p-8"
className="space-y-4 md:space-y-6"

// Responsive visibility
className="hidden md:block"
className="block md:hidden"
```

## State Management Patterns

### Basic State
```jsx
const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState([]);
const [selectedItems, setSelectedItems] = useState([]);
const [filters, setFilters] = useState({
  status: '',
  type: '',
  search: ''
});
```

### Form State
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: ''
});

const handleInputChange = (field, value) => {
  setFormData(prev => ({
    ...prev,
    [field]: value
  }));
};
```

### Selection State
```jsx
const [selectedLeads, setSelectedLeads] = useState([]);

const handleSelectAll = (checked) => {
  if (checked) {
    setSelectedLeads(data.map(item => item.id));
  } else {
    setSelectedLeads([]);
  }
};

const handleSelectItem = (id, checked) => {
  if (checked) {
    setSelectedLeads(prev => [...prev, id]);
  } else {
    setSelectedLeads(prev => prev.filter(item => item !== id));
  }
};
```

## Event Handlers

### Common Event Patterns
```jsx
// Button click
const handleClick = () => {
  console.log('Button clicked');
};

// Form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};

// Input change
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

// Select change
const handleSelectChange = (value) => {
  setSelectedValue(value);
};

// Checkbox change
const handleCheckboxChange = (checked) => {
  setIsChecked(checked);
};
```

## Data Formatting

### Date Formatting
```jsx
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
```

### Currency Formatting
```jsx
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};
```

### Number Formatting
```jsx
const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};
```

## Conditional Rendering

### Status-based Styling
```jsx
<Badge 
  className={cn(
    "text-xs",
    status === 'active' && "bg-green-100 text-green-800",
    status === 'inactive' && "bg-red-100 text-red-800",
    status === 'pending' && "bg-yellow-100 text-yellow-800"
  )}
>
  {status}
</Badge>
```

### Loading States
```jsx
{isLoading ? (
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
) : (
  <div>
    {/* Actual content */}
  </div>
)}
```

### Empty States
```jsx
{data.length === 0 ? (
  <div className="text-center py-8">
    <p className="text-muted-foreground">No data available</p>
  </div>
) : (
  <Table>
    {/* Table content */}
  </Table>
)}
```

## Performance Optimization

### Memoization
```jsx
import { useMemo, useCallback } from 'react';

// Memoized calculations
const filteredData = useMemo(() => {
  return data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [data, searchTerm]);

// Memoized callbacks
const handleItemClick = useCallback((id) => {
  setSelectedItem(id);
}, []);
```

### Component Memoization
```jsx
import { memo } from 'react';

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
});
```

## Error Handling

### Try-Catch Pattern
```jsx
const handleAsyncOperation = async () => {
  try {
    setIsLoading(true);
    const result = await apiCall();
    setData(result);
  } catch (error) {
    console.error('Operation failed:', error);
    // Show error message to user
  } finally {
    setIsLoading(false);
  }
};
```

### Error Boundaries
```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## Accessibility Patterns

### ARIA Labels
```jsx
<Button aria-label="Close dialog">
  <X className="h-4 w-4" />
</Button>

<Input
  aria-describedby="email-help"
  aria-invalid={hasError}
/>
<div id="email-help">Enter a valid email address</div>
```

### Keyboard Navigation
```jsx
const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleClick();
  }
};

<div
  role="button"
  tabIndex={0}
  onKeyDown={handleKeyDown}
  onClick={handleClick}
>
  Clickable element
</div>
```

## Testing Patterns

### Component Testing
```jsx
import { render, screen, fireEvent } from '@testing-library/react';

test('button handles click', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalled();
});
```

### Custom Hooks Testing
```jsx
import { renderHook, act } from '@testing-library/react';

test('useCounter hook', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
```

---

This quick reference guide provides the most commonly used patterns and code snippets for developing with the Arla Leads Dashboard component library.