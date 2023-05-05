export const drawerList = [
  {group: true, title: 'link'},
  {name: 'Home', icon: 'mdi-home-account', roles:['admin'], route:'/home'},
  {name: 'Users', icon: 'mdi-account-group', roles:['admin'], route:'/users' },
  {name: 'DataTable', icon: 'mdi-table', roles:['admin'], route:'/data-table'},
  {group: true, title: 'no-link'},
  {name: 'My Filess', icon: 'mdi-folder'},
  {name: 'Shared with mes', icon: 'mdi-account-multiple'},
  {name: 'Starreds', icon: 'mdi-star'},
  {group: true, title: 'list'},
  {isExpanded: true, value: "list", title: 'list', icon: 'mdi-format-list-bulleted', children: [
      {name: 'My Filessd', icon: 'mdi-folder'},
      {name: 'Shared with mesd', icon: 'mdi-account-multiple'},
      {name: 'Starredsd', icon: 'mdi-star'}
    ]},

]
