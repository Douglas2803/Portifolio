import React, { ReactNode } from 'react'

import './style.scss';

interface IPropsSection{
    children: ReactNode;
    className?: string;
    id?: string;
}
const Section:React.FC<IPropsSection> = ({children, className, id}) => {
  return (
    <section className={className} id={id}>
        {children}
    </section>
  );
}

export default Section