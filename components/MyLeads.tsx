import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";
import { 
  ChevronRight,
  MoreHorizontal,
  Filter,
  Phone,
  MessageSquare,
  FileText
} from 'lucide-react';

export function MyLeads() {
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('mailed');
  const [activeStatus, setActiveStatus] = useState('gold');
  const [showCount, setShowCount] = useState('10');

  const leadsData = [
    { id: '1', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'FL', county: 'County', name: 'John Doe' },
    { id: '2', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'AZ', county: 'County', name: 'Jessica Smith' },
    { id: '3', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'MI', county: 'County', name: 'Elena Rodriguez' },
    { id: '4', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'CO', county: 'County', name: 'Samuel Johnson' },
    { id: '5', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'FL', county: 'County', name: 'Nicole Brown' },
    { id: '6', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'AZ', county: 'County', name: 'Alexandra Wilson' },
    { id: '7', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'MI', county: 'County', name: 'Cameron Davis' },
    { id: '8', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'CO', county: 'County', name: 'Nicole Taylor' },
    { id: '9', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'FL', county: 'County', name: 'Amilia Anderson' },
    { id: '10', type: 'Type', goldSilver: 'Gold', status: 'Status', campaign: '042025', mortgageId: '#12345', state: 'AZ', county: 'County', name: 'Charles Doe' }
  ];

  const handleLeadSelection = (leadId: string, checked: boolean) => {
    if (checked) {
      setSelectedLeads([...selectedLeads, leadId]);
    } else {
      setSelectedLeads(selectedLeads.filter(id => id !== leadId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(leadsData.map(lead => lead.id));
    } else {
      setSelectedLeads([]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Lead Type Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Button 
            variant={activeTab === 'mailed' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('mailed')}
            className={activeTab === 'mailed' ? 'bg-chart-1 hover:bg-chart-1/90' : 'border-border hover:bg-muted'}
          >
            Mailed Leads
          </Button>
          <Button 
            variant={activeTab === 'marketplace' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('marketplace')}
            className={activeTab === 'marketplace' ? 'bg-chart-1 hover:bg-chart-1/90' : 'border-border hover:bg-muted'}
          >
            Marketplace Leads
          </Button>
          <Button 
            variant={activeTab === 'digital' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('digital')}
            className={activeTab === 'digital' ? 'bg-chart-1 hover:bg-chart-1/90' : 'border-border hover:bg-muted'}
          >
            Digital Leads
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-chart-1 hover:bg-chart-5">
          Book of Business
        </Button>
      </div>

      {/* Status Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <Button 
          variant={activeStatus === 'gold' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveStatus('gold')}
          className={activeStatus === 'gold' ? 'bg-chart-1 hover:bg-chart-1/90' : 'border-border hover:bg-muted'}
        >
          Gold (Complete)
        </Button>
        <Button 
          variant={activeStatus === 'silver' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveStatus('silver')}
          className={activeStatus === 'silver' ? 'bg-chart-1 hover:bg-chart-1/90' : 'border-border hover:bg-muted'}
        >
          Silver (Incomplete)
        </Button>
      </div>

      {/* Table Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Show</span>
            <Select value={showCount} onValueChange={setShowCount}>
              <SelectTrigger className="w-20 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Set Status</span>
            <Select>
              <SelectTrigger className="w-32 h-8">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="outline" size="sm" className="h-8">
            Update
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8">
            <Filter className="h-4 w-4 mr-2" />
            Filter by
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground text-xs h-8">
            Reset filters
          </Button>
        </div>
      </div>

      {/* Leads Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={selectedLeads.length === leadsData.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Type of Lead</TableHead>
                  <TableHead>Gold or Silver</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Mortgage ID</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>County</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leadsData.map((lead, index) => (
                  <TableRow key={lead.id} className="border-b border-border hover:bg-muted/50">
                    <TableCell>
                      <Checkbox 
                        checked={selectedLeads.includes(lead.id)}
                        onCheckedChange={(checked) => handleLeadSelection(lead.id, checked as boolean)}
                      />
                    </TableCell>
                    <TableCell>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </TableCell>
                    <TableCell className="text-sm">{lead.type}</TableCell>
                    <TableCell>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">
                        {lead.goldSilver}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{lead.status}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{lead.campaign}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{lead.mortgageId}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{lead.state}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{lead.county}</TableCell>
                    <TableCell className="text-sm">{lead.name}</TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger>
                          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 p-4" align="end">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">{lead.name}</span>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                              <Button variant="ghost" size="sm" className="justify-start h-8">
                                <Phone className="h-4 w-4 mr-2" />
                                Call
                              </Button>
                              <Button variant="ghost" size="sm" className="justify-start h-8">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Message
                              </Button>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm">Status</label>
                              <div className="flex items-center gap-2">
                                <Switch defaultChecked />
                                <span className="text-sm text-chart-1">Active</span>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm">Note:</label>
                              <Textarea 
                                placeholder="Add a note..." 
                                className="min-h-[60px] text-sm"
                              />
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}