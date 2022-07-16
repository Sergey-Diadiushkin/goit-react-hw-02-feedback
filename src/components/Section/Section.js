import React from 'react'
import './Section.css'
import PropTypes from 'prop-types';


const Section = ({ title, children }) =>
    <section className='section'>
    <h1 className='feedback-title'>{title}</h1>
        {children}
        </section>
export default Section


Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};