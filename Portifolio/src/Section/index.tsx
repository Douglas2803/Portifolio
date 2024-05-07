import React, { Children, ReactNode } from 'react'

import './style.scss';

interface IPropsSection{
    children: ReactNode;
    className?: string;
}
const Section:React.FC<IPropsSection> = ({children,className}) => {
  return (
    <section className={className}>
        {children}
    </section>
  );
}

export default Section