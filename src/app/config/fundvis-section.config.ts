export interface OverlaySection {
  title: string;
  icon: string;
  lazy?: boolean;
}

export const OVERLAY_SECTIONS = [
  {
    title: 'Tasks',
    icon: 'fa fa-tasks',
    lazy: true,
    columns: [
      { key: 'name', label: 'Task Name' },
      { key: 'dueDate', label: 'Due Date' },
      {
        key: 'status',
        label: 'Status',
        type: 'tag',
        tagColors: {
          Open: '#60A5FA',
          InProgress: '#FBBF24',
          Completed: '#10B981'
        }
      }
    ]
  },
  {
    title: 'Risks',
    icon: 'fa fa-exclamation-circle',
    columns: [
      { key: 'name', label: 'Risk Name' },
      {
        key: 'status',
        label: 'Severity',
        type: 'tag',
        tagColors: {
          Critical: '#F87171',
          Medium: '#FFD968',
          Low: '#A7F3D0'
        }
      },
      { key: 'action', label: '', type: 'button', buttonText: 'Preview' }
    ]
  },
  {
    title: 'Assets',
    icon: 'fa fa-list-alt',
    lazy: true,
    columns: [
      { key: 'name', label: 'Asset' },
      {
        key: 'status',
        label: 'Status',
        type: 'tag',
        tagColors: {
          InUse: '#34D399',
          Deprecated: '#D1D5DB'
        }
      },
      { key: 'action', label: '', type: 'button', buttonText: 'Preview' }
    ]
  },
  {
    title: 'Incidents',
    icon: 'fa fa-exclamation-triangle',
    columns: [
      { key: 'name', label: 'Incident' },
      {
        key: 'status',
        label: 'Priority',
        type: 'tag',
        tagColors: {
          'High Priority': '#F87171',
          Resolved: '#34D399'
        }
      },
      { key: 'action', label: '', type: 'button', buttonText: 'Preview' }
    ]
  },
  {
    title: 'Business Functions',
    icon: 'fa fa-sitemap',
    columns: [
      { key: 'name', label: 'Function' },
      {
        key: 'status',
        label: 'Status',
        type: 'tag',
        tagColors: {
          Active: '#10B981',
          Inactive: '#9CA3AF'
        }
      },
      { key: 'action', label: '', type: 'button', buttonText: 'Preview' }
    ]
  },
  {
    title: 'Contracts',
    icon: 'far fa-file',
    columns: [
      { key: 'name', label: 'Contract Name', },
      {
        key: 'status',
        label: 'Status',
        type: 'tag',
        tagColors: {
          Open: '#3B82F6',
          Resolved: '#34D399'
        }
      },
   {
      key: 'filename',
      label: '',
      type: 'link',
      buttonText: 'contract.pdf'  
    }
    ]
  }
];



