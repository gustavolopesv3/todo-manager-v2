// ** Icons Import
import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'analyticsDash',
        title: 'Analytics',
        action: 'read',
        resource: 'ACL',
        icon: <Circle size={12} />,
        navLink: '/dashboard/analytics'
      },
      {
        id: 'eCommerceDash',
        title: 'eCommerce',
        icon: <Circle size={12} />,
        navLink: '/dashboard/ecommerce'
      }
    ]
  }
]
