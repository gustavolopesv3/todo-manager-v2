import { Mail } from "react-feather"

export default [
    {
      header: 'Apps & Pages'
    },
    {
      id: 'tasks',
      title: 'Tarefas',
      icon: <Mail size={20} />,
      navLink: '/apps/email',
      action: 'read',
    resource: 'ACL'
    }
]