import React, {Component} from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: '免费鸡尾酒',
        info:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, possimus perspiciatis cupiditate vel, veniam odio dicta iusto tenetur eum unde magni quaerat repellat explicabo adipisci quos consequuntur voluptates dolor minima.'
      },
      {
        icon: <FaHiking />,
        title: '无尽的远足',
        info:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, possimus perspiciatis cupiditate vel, veniam odio dicta iusto tenetur eum unde magni quaerat repellat explicabo adipisci quos consequuntur voluptates dolor minima.'
      },
      {
        icon: <FaShuttleVan />,
        title: '免费班车',
        info:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, possimus perspiciatis cupiditate vel, veniam odio dicta iusto tenetur eum unde magni quaerat repellat explicabo adipisci quos consequuntur voluptates dolor minima.'
      },
      {
        icon: <FaBeer />,
        title: '上等的啤酒',
        info:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, possimus perspiciatis cupiditate vel, veniam odio dicta iusto tenetur eum unde magni quaerat repellat explicabo adipisci quos consequuntur voluptates dolor minima.'
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="服务" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
