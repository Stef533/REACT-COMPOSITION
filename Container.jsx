import { useState } from 'react';
import PropTypes from 'prop-types';
import './Container.css'

export function Container({ title, children }){
  const [collapsed, setCollapsed] = useState(false)

  function handleToggleCollapse(){
    setCollapsed((t) => !t)
  }

  return (
    <div className="app">
      <div className="app-title">{title}<button onClick={handleToggleCollapse}>Toggle</button></div>
      <div className={collapsed ? 'app-content' : 'app-content-hidden'}>{children}</div>
      </div>
  )
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Nel video sulla page di Develhope il ragazzo che spiega il metodo usa la prop {children} tranquillamente e gli funziona, come mai io per poterla utilizzare devo fare un import PropTypes e devo dichiarare le propTypes a fine pagina?