import React from 'react';

const Navigation = () => (
    <div className="left-sidebar left-sidebar--visible">

    <div className="left-sidebar__toolbar">
        Navigation
    </div>

    <a
        href="/?page=cats-gallery"
        className={
            'sidebar-navigation-item ' +
            (window.location.search === '?page=cats-gallery' && 'sidebar-navigation-item--active')
        }
    >
        Cats gallery
    </a>

    <a
        href="/?page=traffic-lights-controlled-btns"
        className={
            'sidebar-navigation-item ' +
            (window.location.search === '?page=traffic-lights-controlled-btns' && 'sidebar-navigation-item--active')
         }
    >
         Traffic lights Controlled with buttons
    </a>

     <a
        href="/?page=traffic-lights-automatic"
        className={
            'sidebar-navigation-item ' +
            (window.location.search === '?page=traffic-lights-automatic' && 'sidebar-navigation-item--active')
        }
    >
        Traffic lights auto
    </a>

    <a
        href="/?page=clock"
        className={
            'sidebar-navigation-item ' +
            (window.location.search === '?page=clock' && 'sidebar-navigation-item--active')
        }
    >
        Clock
    </a>

    <a
        href="/?page=address-book"
        className={
            'sidebar-navigation-item ' +
            (window.location.search === '?page=address-book' && 'sidebar-navigation-item--active')
        }
    >
        Address Book
    </a>

</div>
);

export default Navigation;