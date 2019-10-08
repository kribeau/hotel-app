import React from 'react'

export default function Hero({children, hero}) {
  return <header className={hero}>{children}</header>
}

//defaultProps 为组件添加默认props(一般用于props未赋值，但又不能为null的情况)
Hero.defaultProps = {
  hero: 'defaultHero'
}
