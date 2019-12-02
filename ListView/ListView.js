import React, { Component } from 'react';
import '../style.css';

import ListImg from './ListImg';
import ListDetail from './ListDetail';
import { NavLink } from "react-router-dom";

class ListView extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItemId: null,
      ListData: [
        {
          id: 0,
          name: 'TC 2016 Red SS',
          description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
          price: 74.00,
          count: 11,
          img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_red_SS_front_grande.jpg?v=1468602448',
        }, {
          id: 1,
          name: 'TC 2016 Dark SS',
          description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
          price: 35.99,
          count: 13,
          img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226',
        }, {
          id: 2,
          name: 'TC 2016 Light SS',
          description: 'Official replica of the 2016 Team Canada light playing jersey. VC spot sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
          price: 35.99,
          count: 16,
          img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TCsample2_white_front_grande.jpg?v=1480111096',
        }, {
          id: 3,
          name: 'Goat Shorts',
          description: 'This just in... VC\'s NEW signature \'GOAT\' style athletic shorts now with pockets! Made with our FlexLight material.',
          price: 29.00,
          count: 4,
          img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/MedGreyPockets_front_grande400x600_grande_888f95c1-0f4d-483f-938e-c686892a855a_grande.jpg?v=1454966549',
        }
      ]
    }
  }

  listItemSelected(id) {
    this.setState({
      selectedItemId: id
    })
  }

  render() {
    return (
      <div className="container">
        <h1>List View</h1>
        <div className="list_img_main">
          {this.state.ListData.map((list, index) => {
            return (
              <NavLink to={'/ListDetail/' + list.id} exact>
                <ListImg 
                  key={index} 
                  {...list}
                  id={index}
                  clicked={() => this.listItemSelected(list.id)}
                />
              </NavLink> 
            )
          })}
        </div>

        {
          this.state.selectedItemId ? <ListDetail id={this.state.selectedItemId}/> : null
        }
      </div>
    );
  }
}

export default ListView;
