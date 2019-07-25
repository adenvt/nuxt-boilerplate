import _ from 'lodash'

export const hasAccess = (menu, role) => {
  if (role === 'super_admin')
    return true

  if (menu.access) {
    /* Whitelist Scheme */
    if (menu.access === '*') {
      if (menu.except)
        return !_.includes(menu.except, role)

      return true
    }

    return _.includes(menu.access, role)
  } else if (menu.blocked) {
    /* Blacklist Scheme */
    if (menu.blocked === '*') {
      if (menu.except)
        return _.includes(menu.except, role)

      return false
    }

    return !_.includes(menu.blocked, role)
  }

  return true
}

export const filterMenu = (role, menus) => {
  return _.reduce(menus, (result, menu) => {
    if (_.has(menu, 'children')) {
      if (hasAccess(menu, role)) {
        const children = _.filter(menu.children, (submenu) => {
          return hasAccess(submenu, role)
        })

        if (children.length > 0)
          result.push(_.assign({}, menu, { children }))
      }
    } else {
      if (hasAccess(menu, role))
        result.push(menu)
    }

    return result
  }, [])
}
