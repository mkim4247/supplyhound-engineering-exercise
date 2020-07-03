import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Icon } from 'semantic-ui-react'

const Nav = () => {
  return(
    <div>
      <Menu borderless>
        <Menu.Item>
          <NavLink to='/'>
            <Icon name='globe'/>
          </NavLink>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button>
              LOGIN
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default Nav
