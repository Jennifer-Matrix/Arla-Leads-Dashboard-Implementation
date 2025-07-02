# Component Reference Guide

This document provides detailed information about all UI components available in the Arla Leads Dashboard project.

## Table of Contents

1. [Form Components](#form-components)
2. [Layout Components](#layout-components)
3. [Navigation Components](#navigation-components)
4. [Feedback Components](#feedback-components)
5. [Data Display Components](#data-display-components)
6. [Overlay Components](#overlay-components)
7. [Utility Components](#utility-components)

---

## Form Components

### Checkbox (`components/ui/checkbox.tsx`)

A styled checkbox component built on Radix UI primitives.

#### Props
```typescript
interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  className?: string;
}
```

#### Usage Example
```jsx
import { Checkbox } from './components/ui/checkbox';

<Checkbox 
  checked={isChecked}
  onCheckedChange={setIsChecked}
  id="terms"
/>
<label htmlFor="terms">Accept terms and conditions</label>
```

### Switch (`components/ui/switch.tsx`)

A toggle switch component for binary choices.

#### Props
```typescript
interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  className?: string;
}
```

#### Usage Example
```jsx
import { Switch } from './components/ui/switch';

<div className="flex items-center space-x-2">
  <Switch 
    checked={isEnabled}
    onCheckedChange={setIsEnabled}
    id="notifications"
  />
  <label htmlFor="notifications">Enable notifications</label>
</div>
```

### Textarea (`components/ui/textarea.tsx`)

A multi-line text input component.

#### Props
```typescript
interface TextareaProps extends React.ComponentProps<"textarea"> {
  className?: string;
}
```

#### Usage Example
```jsx
import { Textarea } from './components/ui/textarea';

<Textarea
  placeholder="Enter your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows={4}
/>
```

### Radio Group (`components/ui/radio-group.tsx`)

Radio button group component for single selection.

#### Components
- **RadioGroup**: Container for radio items
- **RadioGroupItem**: Individual radio button

#### Props
```typescript
interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  className?: string;
}
```

#### Usage Example
```jsx
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Label } from './components/ui/label';

<RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>
```

### Label (`components/ui/label.tsx`)

A styled label component for form inputs.

#### Props
```typescript
interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  className?: string;
}
```

#### Usage Example
```jsx
import { Label } from './components/ui/label';

<Label htmlFor="email" className="text-sm font-medium">
  Email Address
</Label>
```

### Form (`components/ui/form.tsx`)

Form context and validation components built on React Hook Form.

#### Components
- **Form**: Form provider context
- **FormField**: Field wrapper with validation
- **FormItem**: Form item container
- **FormLabel**: Form label
- **FormControl**: Form control wrapper
- **FormDescription**: Help text
- **FormMessage**: Error message

#### Usage Example
```jsx
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './components/ui/form';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

function ContactForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

---

## Layout Components

### Separator (`components/ui/separator.tsx`)

A visual separator component.

#### Props
```typescript
interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}
```

#### Usage Example
```jsx
import { Separator } from './components/ui/separator';

<div>
  <p>Content above</p>
  <Separator className="my-4" />
  <p>Content below</p>
</div>
```

### Aspect Ratio (`components/ui/aspect-ratio.tsx`)

A component for maintaining aspect ratios.

#### Props
```typescript
interface AspectRatioProps extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {
  ratio?: number;
  className?: string;
}
```

#### Usage Example
```jsx
import { AspectRatio } from './components/ui/aspect-ratio';

<AspectRatio ratio={16 / 9} className="bg-muted">
  <img 
    src="image.jpg" 
    alt="Photo"
    className="rounded-md object-cover w-full h-full"
  />
</AspectRatio>
```

### Resizable (`components/ui/resizable.tsx`)

Resizable panel components for creating adjustable layouts.

#### Components
- **ResizablePanelGroup**: Container for resizable panels
- **ResizablePanel**: Individual resizable panel
- **ResizableHandle**: Drag handle between panels

#### Usage Example
```jsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './components/ui/resizable';

<ResizablePanelGroup direction="horizontal" className="min-h-[200px]">
  <ResizablePanel defaultSize={50}>
    <div className="p-4">Panel 1</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="p-4">Panel 2</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Sidebar (`components/ui/sidebar.tsx`)

A comprehensive sidebar component with collapsible functionality.

#### Components
- **Sidebar**: Main sidebar container
- **SidebarContent**: Content area
- **SidebarHeader**: Header section
- **SidebarFooter**: Footer section
- **SidebarMenu**: Menu container
- **SidebarMenuItem**: Menu item
- **SidebarMenuButton**: Menu button

#### Usage Example
```jsx
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from './components/ui/sidebar';

<Sidebar>
  <SidebarHeader>
    <h2>Navigation</h2>
  </SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          Dashboard
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          Leads
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>
```

---

## Navigation Components

### Tabs (`components/ui/tabs.tsx`)

Tab navigation component for organizing content.

#### Components
- **Tabs**: Root tabs container
- **TabsList**: Tab buttons container
- **TabsTrigger**: Individual tab button
- **TabsContent**: Tab content panel

#### Usage Example
```jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

<Tabs defaultValue="overview" className="w-full">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <p>Overview content</p>
  </TabsContent>
  <TabsContent value="analytics">
    <p>Analytics content</p>
  </TabsContent>
  <TabsContent value="reports">
    <p>Reports content</p>
  </TabsContent>
</Tabs>
```

### Navigation Menu (`components/ui/navigation-menu.tsx`)

A complex navigation menu component with dropdowns.

#### Components
- **NavigationMenu**: Root menu container
- **NavigationMenuList**: Menu items container
- **NavigationMenuItem**: Individual menu item
- **NavigationMenuTrigger**: Dropdown trigger
- **NavigationMenuContent**: Dropdown content
- **NavigationMenuLink**: Menu link

#### Usage Example
```jsx
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from './components/ui/navigation-menu';

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-6 w-[400px]">
          <NavigationMenuLink href="/product1">Product 1</NavigationMenuLink>
          <NavigationMenuLink href="/product2">Product 2</NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Breadcrumb (`components/ui/breadcrumb.tsx`)

Breadcrumb navigation component showing page hierarchy.

#### Components
- **Breadcrumb**: Root breadcrumb container
- **BreadcrumbList**: Breadcrumb items container
- **BreadcrumbItem**: Individual breadcrumb item
- **BreadcrumbLink**: Breadcrumb link
- **BreadcrumbPage**: Current page indicator
- **BreadcrumbSeparator**: Separator between items

#### Usage Example
```jsx
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from './components/ui/breadcrumb';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Leads</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Pagination (`components/ui/pagination.tsx`)

Pagination component for navigating through pages.

#### Components
- **Pagination**: Root pagination container
- **PaginationContent**: Pagination items container
- **PaginationItem**: Individual pagination item
- **PaginationLink**: Pagination link
- **PaginationPrevious**: Previous page button
- **PaginationNext**: Next page button
- **PaginationEllipsis**: Ellipsis indicator

#### Usage Example
```jsx
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from './components/ui/pagination';

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

## Feedback Components

### Alert (`components/ui/alert.tsx`)

Alert component for displaying important messages.

#### Components
- **Alert**: Main alert container
- **AlertTitle**: Alert title
- **AlertDescription**: Alert content

#### Props
```typescript
interface AlertProps extends React.ComponentProps<"div"> {
  variant?: 'default' | 'destructive';
}
```

#### Usage Example
```jsx
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { AlertCircle } from 'lucide-react';

<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>
```

### Progress (`components/ui/progress.tsx`)

Progress indicator component.

#### Props
```typescript
interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number;
  className?: string;
}
```

#### Usage Example
```jsx
import { Progress } from './components/ui/progress';

<Progress value={75} className="w-full" />
```

### Skeleton (`components/ui/skeleton.tsx`)

Loading skeleton component for placeholder content.

#### Props
```typescript
interface SkeletonProps extends React.ComponentProps<"div"> {
  className?: string;
}
```

#### Usage Example
```jsx
import { Skeleton } from './components/ui/skeleton';

<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
  <Skeleton className="h-4 w-[150px]" />
</div>
```

---

## Data Display Components

### Avatar (`components/ui/avatar.tsx`)

Avatar component for displaying user profile pictures.

#### Components
- **Avatar**: Main avatar container
- **AvatarImage**: Avatar image
- **AvatarFallback**: Fallback content when image fails

#### Usage Example
```jsx
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

### Accordion (`components/ui/accordion.tsx`)

Collapsible content component.

#### Components
- **Accordion**: Root accordion container
- **AccordionItem**: Individual accordion item
- **AccordionTrigger**: Clickable header
- **AccordionContent**: Collapsible content

#### Usage Example
```jsx
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from './components/ui/accordion';

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Collapsible (`components/ui/collapsible.tsx`)

Simple collapsible content component.

#### Components
- **Collapsible**: Root collapsible container
- **CollapsibleTrigger**: Trigger button
- **CollapsibleContent**: Collapsible content

#### Usage Example
```jsx
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/ui/collapsible';

<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects.
  </CollapsibleContent>
</Collapsible>
```

### Calendar (`components/ui/calendar.tsx`)

Calendar component for date selection.

#### Props
```typescript
interface CalendarProps extends React.ComponentProps<typeof DayPicker> {
  className?: string;
  classNames?: ClassNames;
  showOutsideDays?: boolean;
}
```

#### Usage Example
```jsx
import { Calendar } from './components/ui/calendar';
import { useState } from 'react';

function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
```

---

## Overlay Components

### Dialog (`components/ui/dialog.tsx`)

Modal dialog component.

#### Components
- **Dialog**: Root dialog container
- **DialogTrigger**: Button that opens dialog
- **DialogContent**: Dialog content container
- **DialogHeader**: Dialog header
- **DialogTitle**: Dialog title
- **DialogDescription**: Dialog description
- **DialogFooter**: Dialog footer
- **DialogClose**: Close button

#### Usage Example
```jsx
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from './components/ui/dialog';
import { Button } from './components/ui/button';

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      {/* Form content */}
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Sheet (`components/ui/sheet.tsx`)

Slide-out panel component.

#### Components
- **Sheet**: Root sheet container
- **SheetTrigger**: Button that opens sheet
- **SheetContent**: Sheet content container
- **SheetHeader**: Sheet header
- **SheetTitle**: Sheet title
- **SheetDescription**: Sheet description
- **SheetFooter**: Sheet footer
- **SheetClose**: Close button

#### Usage Example
```jsx
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from './components/ui/sheet';

<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

### Popover (`components/ui/popover.tsx`)

Popover component for contextual content.

#### Components
- **Popover**: Root popover container
- **PopoverTrigger**: Element that triggers popover
- **PopoverContent**: Popover content

#### Usage Example
```jsx
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { Button } from './components/ui/button';

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

### Tooltip (`components/ui/tooltip.tsx`)

Tooltip component for hover information.

#### Components
- **TooltipProvider**: Provider for tooltip context
- **Tooltip**: Root tooltip container
- **TooltipTrigger**: Element that triggers tooltip
- **TooltipContent**: Tooltip content

#### Usage Example
```jsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip';
import { Button } from './components/ui/button';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Alert Dialog (`components/ui/alert-dialog.tsx`)

Alert dialog for confirmations and important messages.

#### Components
- **AlertDialog**: Root alert dialog container
- **AlertDialogTrigger**: Button that opens dialog
- **AlertDialogContent**: Dialog content
- **AlertDialogHeader**: Dialog header
- **AlertDialogTitle**: Dialog title
- **AlertDialogDescription**: Dialog description
- **AlertDialogFooter**: Dialog footer
- **AlertDialogAction**: Confirm action button
- **AlertDialogCancel**: Cancel button

#### Usage Example
```jsx
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from './components/ui/alert-dialog';

<AlertDialog>
  <AlertDialogTrigger>Delete</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your data.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

## Utility Components

### Scroll Area (`components/ui/scroll-area.tsx`)

Custom scrollable area with styled scrollbars.

#### Components
- **ScrollArea**: Main scroll container
- **ScrollBar**: Custom scrollbar

#### Usage Example
```jsx
import { ScrollArea } from './components/ui/scroll-area';

<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <div className="space-y-4">
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="text-sm">
        Item {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>
```

### Command (`components/ui/command.tsx`)

Command palette component with search and keyboard navigation.

#### Components
- **Command**: Root command container
- **CommandInput**: Search input
- **CommandList**: Command items container
- **CommandEmpty**: Empty state
- **CommandGroup**: Group of commands
- **CommandItem**: Individual command
- **CommandSeparator**: Visual separator
- **CommandShortcut**: Keyboard shortcut display

#### Usage Example
```jsx
import { 
  Command, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from './components/ui/command';

<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### Toggle (`components/ui/toggle.tsx`)

Toggle button component for binary states.

#### Props
```typescript
interface ToggleProps extends React.ComponentProps<typeof TogglePrimitive.Root> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}
```

#### Usage Example
```jsx
import { Toggle } from './components/ui/toggle';
import { Bold } from 'lucide-react';

<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>
```

### Toggle Group (`components/ui/toggle-group.tsx`)

Group of toggle buttons for multiple selection.

#### Components
- **ToggleGroup**: Root toggle group container
- **ToggleGroupItem**: Individual toggle item

#### Usage Example
```jsx
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

---

This component reference provides comprehensive documentation for all UI components in the shadcn/ui library used in the Arla Leads Dashboard project. Each component includes usage examples and prop interfaces to help developers implement them correctly.