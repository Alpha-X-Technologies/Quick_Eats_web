import React from 'react';
import StyledSideNav from './StyledSideNav'
class SideNav extends React.Component {
    render() {
        return (
            <StyledSideNav />
        );
      }
}

export default class Sidebar extends React.Component {
  render() {
    return (
        <SideNav/>
    );
  }
}